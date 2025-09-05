'use client';

import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

import Link from 'next/link';

import SetTimer from '@/components/sleeptime/SetTimer';
import AddSleepTime from '@/components/sleeptime/AddSleepTime';
import EditSleepTime from '@/components/sleeptime/EditSleepTime';

export default function SleepTimeSection() {

    const sheetRef = useRef(null);
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

    const minHeight = windowHeight * 0.001;
    const maxHeight = windowHeight * 0.3;

    const [{ y }, api] = useSpring(() => ({ y: windowHeight - minHeight }));
    const handleOverlayClick = () => {
        api.start({ y: windowHeight - minHeight });
    };

    const bind = useDrag(
        ({ movement: [, my], memo = y.get() }) => {
            let newY = memo + my;
            if (newY < windowHeight - maxHeight) newY = windowHeight - maxHeight;
            if (newY > windowHeight - minHeight) newY = windowHeight - minHeight;
            api.start({ y: newY });
            return memo;
        },
        { from: () => [0, y.get()], filterTaps: true }
    );

    return (
        <section onClick={handleOverlayClick} className="sm:px-[20px] md:px-[200px] lg:px-[400px] pt-3">

            <SetTimer />

            <EditSleepTime />

            <AddSleepTime />

            <animated.div
                {...bind()}
                ref={sheetRef}
                className="fixed left-0 right-0 bottom-0 bg-white max-[400px]:w-full w-[400px]  shadow-xl touch-pan-y z-10 mx-auto"
                style={{
                    y,
                    height: windowHeight,
                    willChange: 'transform',
                }}
            >
                <div className="p-4 overflow-auto h-full bg-[#9642FF] rounded-t-3xl">
                    <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mt-2"></div>
                    <h2 className="text-lg font-bold mb-2 text-center max-[400px]:text-[20px] text-[24px] mt-3 text-white">گزارش کلی</h2>
                    <div className="mt-10">
                        <div className="grid grid-cols-2 gap-6 mb-8 text-white">
                            <div className="text-center">
                                <p className="text-sm opacity-90">تاریخ</p>
                                <p className="text-2xl font-semibold mt-1">۱۴۰۳/۰۱/۱۳</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm opacity-90">مدت زمان</p>
                                <p className="text-2xl font-semibold mt-1">۰۷:۵۳</p>
                            </div>
                        </div>
                        <Link href="/generalreport">
                            <div className="flex justify-center rounded-[8px] px-[24px] mt-4 mx-auto gap-2 max-[400px]:w-[280px] w-[320px] h-[48px] bg-white border-1 border-[#A85FFF] cursor-pointer hover:bg-[#e4dfe9]">
                                <button className='cursor-pointer'>
                                    مشاهده کلی
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </animated.div>

        </section>
    );
}