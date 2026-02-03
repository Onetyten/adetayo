import { useEffect, useState } from "react";
import type {ContributionDay, ContributionData,MonthData} from "../types/type"

export default function useFetchGitData(username:string){
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_KEY
    const [data, setData] = useState<ContributionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    function setCachedData(key:string, value:number, ttl:number) {
        const item = { value, timestamp: Date.now(), ttl: ttl * 1000 };
        localStorage.setItem(key, JSON.stringify(item));
    }

    function getCachedData(key:string) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            const parsedItem = JSON.parse(item);
            const now = Date.now();
            if (now - parsedItem.timestamp > parsedItem.ttl) {
                localStorage.removeItem(key);
                return null;
            }
            return parsedItem;
        }
        catch {
            return null;
        }
    }

    async function fetchContributions() {
        try {
            const toDate = new Date();
            const fromDate = new Date();
            fromDate.setMonth(fromDate.getMonth() - 12);
            const allContributions: ContributionDay[] = [];

            
            const query = `
                query($username: String!, $from: DateTime!, $to: DateTime!) {
                    user(login: $username) {
                        contributionsCollection(from: $from, to: $to) {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        date
                                        contributionCount
                                        contributionLevel
                                    }
                                }
                            }
                        }
                    }
                }
            `;

            const response = await fetch("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query,
                    variables: {
                        username,
                        from: fromDate.toISOString(),
                        to: toDate.toISOString(),
                    },
                }),
            });

            const result = await response.json();

            if (result.errors) {
                throw new Error(result.errors[0].message);
            }

            const calendar = result.data.user.contributionsCollection.contributionCalendar;
                
            calendar.weeks.forEach((week: any) => {
                week.contributionDays.forEach((day: any) => {
                    allContributions.push({
                        date: day.date,
                        count: day.contributionCount,
                        level: day.contributionLevel
                    });
                });
            })

            const totalContributions = allContributions.reduce((sum, day) => sum + day.count, 0);
            
            setData({
                totalContributions,
                contributions: allContributions,
                username
            });
            setLoading(false);
        }
        
        catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch data');
            setLoading(false);
        }
    }

    function groupByMonth(contributions: ContributionDay[]): MonthData[] {
        const monthsMap = new Map<string, ContributionDay[]>();
    
        contributions.forEach(day => {
            const date = new Date(day.date);
            const key = `${date.getFullYear()}-${date.getMonth()}`;
            
            if (!monthsMap.has(key)) {
                monthsMap.set(key, []);
            }
            monthsMap.get(key)!.push(day);
        });
    
        const monthsData: MonthData[] = [];
    
        monthsMap.forEach((days, key) => {
            const [year, month] = key.split('-').map(Number);
            const date = new Date(year, month);
            const weeks: ContributionDay[][] = [];
            let currentWeek: ContributionDay[] = [];
            const sortedDays = [...days].sort((a, b) => 
                new Date(a.date).getTime() - new Date(b.date).getTime()
            );
    
            const firstDay = new Date(sortedDays[0].date);
            const firstDayOfWeek = firstDay.getDay();
            
            for (let i = 0; i < firstDayOfWeek; i++) {
                currentWeek.push({ date: '', count: 0, level: 0 });
            }
    
            sortedDays.forEach((day, index) => {
                const dayOfWeek = new Date(day.date).getDay();
                currentWeek.push(day);
                if (dayOfWeek === 6 || index === sortedDays.length - 1) {
                    if (index === sortedDays.length - 1 && dayOfWeek !== 6) {
                        for (let i = dayOfWeek + 1; i <= 6; i++) {
                            currentWeek.push({ date: '', count: 0, level: 0 });
                        }
                    }
                    weeks.push([...currentWeek]);
                    currentWeek = [];
                }
            });
    
            const totalContributions = days.reduce((sum, day) => sum + day.count, 0);
    
            monthsData.push({
                year,
                month,
                monthName: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
                weeks,
                totalContributions
            });
        });
        return monthsData.sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            return b.month - a.month;
        });
    }


    useEffect(() => {
        fetchContributions();
    }, []);

    return {fetchContributions,data,loading,error,groupByMonth}
}
