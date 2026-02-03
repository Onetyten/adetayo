import type { MonthData } from '../../../types/type';
import Tooltip from './Tooltip';

export default function MonthBlock({ monthData }: { monthData: MonthData }) {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getColor = (level: number) => {
        const colors = {
            0: 'bg-gray-100 dark:bg-gray-800',
            1: 'bg-green-200 dark:bg-green-900',
            2: 'bg-green-400 dark:bg-green-700',
            3: 'bg-green-600 dark:bg-green-500',
            4: 'bg-green-800 dark:bg-green-300'
        };
        return colors[level as keyof typeof colors] || colors[0];
    };

    return (
        <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{monthData.monthName}</h3>
                <span className="text-sm text-gray-600">
                    {monthData.totalContributions} contributions
                </span>
            </div>

            <div className="flex gap-1">
                <div className="flex flex-col gap-1 mr-2">
                    {weekDays.map(day => (
                        <div key={day} className="h-6 w-8 flex items-center justify-center text-xs text-gray-600" >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="flex gap-1 overflow-x-auto">
                    {monthData.weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                            {week.map((day, dayIndex) => (
                                <Tooltip key={dayIndex} day={day}>
                                    <div className={`h-6 w-6 rounded ${ day.date ? getColor(day.level) : 'bg-transparent'} transition-all hover:ring-2 hover:ring-blue-500 cursor-pointer`} />
                                </Tooltip>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
