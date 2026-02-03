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
                <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                    {day.count} contributions on {formattedDate}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
            )}
        </div>
    );
}
