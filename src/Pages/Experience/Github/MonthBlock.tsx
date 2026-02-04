import ConsoleText from '../../../ConsoleText';
import { getColor } from '../../../data/data';
import type { MonthData } from '../../../types/type';
import Tooltip from './Tooltip';

export default function MonthBlock({ monthData }: { monthData: MonthData }) {
    const allDays = monthData.weeks.flat().filter(day => day.date !== '');

    return (
        <ConsoleText projectname={monthData.monthName}>
            <div className='flex flex-col gap-3'>
                <span className="text-sm text-muted">
                    {monthData.totalContributions} contributions
                </span>
            
                <div className="grid grid-cols-[repeat(auto-fill,minmax(1.5rem,1fr))] gap-1">
                    {allDays.map((day, index) => (
                        <Tooltip key={index} day={day}>
                            <div className={`h-6 w-6 ${getColor(day.level)} transition-all hover:ring-2 hover:ring-blue cursor-pointer`} 
                            />
                        </Tooltip>
                    ))}
                </div>
            </div>
        </ConsoleText>
    );
}