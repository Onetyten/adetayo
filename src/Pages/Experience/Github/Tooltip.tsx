import React, { useState } from 'react'
import type { ContributionDay } from '../../../types/type';

export default function Tooltip({ day, children }: { day: ContributionDay; children: React.ReactNode }) {

    const [show, setShow] = useState(false);
    const date = new Date(day.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });

    if (!day.date) return <>{children}</>;
    

    return (
        <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {children}
            {show && (
                <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-card text-text text-sm rounded whitespace-nowrap">
                    {day.count} contributions on {formattedDate}
                </div>
            )}
        </div>
    );
}
