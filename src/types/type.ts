type ContributionLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';

export interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

export interface ContributionData {
    totalContributions: number;
    contributions: ContributionDay[];
    username: string;
}

export interface MonthData {
    year: number;
    month: number;
    monthName: string;
    weeks: ContributionDay[][];
    totalContributions: number;
}