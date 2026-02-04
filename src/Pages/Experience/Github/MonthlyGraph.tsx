
import type { ContributionDay } from '../../../types/type';
import useFetchGitData from '../../../hooks/useFetchGitData';
import MonthBlock from './MonthBlock';

export default function MonthlyGraph({ contributions }: { contributions: ContributionDay[] }) {
    const username = "Onetyten";
    const {groupByMonth} = useFetchGitData(username)
    const contributionsByMonth = groupByMonth(contributions);

    return (
        <div className="flex flex-col w-full gap-4">
            {contributionsByMonth.map((monthData, index) => (
                <MonthBlock key={index} monthData={monthData} />
            ))}
        </div>
    );
}
