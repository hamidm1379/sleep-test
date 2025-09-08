'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function GeneralReportModal() {

    const [isExpanded, setIsExpanded] = useState(false);
    const bottomSectionRef =  useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isExpanded && bottomSectionRef.current && !bottomSectionRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExpanded]);

    return (
        <div
            ref={bottomSectionRef}
            className={`${isExpanded ? 'h-64' : 'h-20'
                } fixed left-0 right-0 bottom-0 max-[400px]:w-full w-[400px] bg-[#9642FF] mx-auto rounded-t-3xl transition-all duration-300 ease-in-out cursor-pointer  shadow-lg z-10`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="">
                {isExpanded ? (
                    <>
                        <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mt-2"></div>
                        <h2 className="text-lg font-medium mb-2 text-center max-[400px]:text-[20px] text-[24px] mt-3 text-white">گزارش کلی</h2>
                        <div className="mt-10">
                            <div className="grid grid-cols-2 gap-6 mb-8 text-white">
                                <div className="text-center">
                                    <p className="text-sm opacity-90">تاریخ</p>
                                    <p className="text-2xl font-medium mt-1">۱۴۰۳/۰۱/۱۳</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm opacity-90">مدت زمان</p>
                                    <p className="text-2xl font-medium mt-1">۰۷:۵۳</p>
                                </div>
                            </div>
                            <Link href="/generalreport">
                                <div className="flex justify-center rounded-[8px] px-[24px] mt-4 mx-auto gap-2 max-[400px]:w-[280px] w-[320px] h-[48px] bg-white border-1 border-[#A85FFF] cursor-pointer hover:bg-[#e4dfe9]">
                                    <button className='cursor-pointer text-black'>
                                        مشاهده کلی
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mt-2"></div>
                        <h2 className="text-lg font-medium mb-2 text-center max-[400px]:text-[20px] text-[24px] mt-3 text-white">گزارش کلی</h2>
                    </>
                )}
            </div>
        </div>
    );
}