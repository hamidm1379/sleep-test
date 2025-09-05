'use client';

import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import FlagIcon from '@/components/icons/flag';

export default function EditSleepTime() {

    const [start, setStart] = useState<DateObject | null>(null);
    const [end, setEnd] = useState<DateObject | null>(null);
    const [diff, setDiff] = useState<string>("");

    const [isOpenSecond, setOpenSecond] = useState(false);

    const calcDiff = (startDate: DateObject | null, endDate: DateObject | null): string => {
        if (!startDate || !endDate) return "";

        const s = startDate.toDate();
        const e = endDate.toDate();

        let diffMs = e.getTime() - s.getTime();
        if (diffMs < 0) return "تاریخ پایان قبل از شروع است";

        let diffMinutes = Math.floor(diffMs / (1000 * 60));
        let hours = Math.floor(diffMinutes / 60);
        let minutes = diffMinutes % 60;

        return `${hours} ساعت  و ${minutes} دقیقه `;
    };

    const handleChangeStart = (value: Value) => {
        const val = value instanceof DateObject ? value : null;
        setStart(val);
        setDiff(calcDiff(val, end));
    };

    const handleChangeEnd = (value: Value) => {
        const val = value instanceof DateObject ? value : null;
        setEnd(val);
        setDiff(calcDiff(start, val));
    };

    return (
        <>
            <div className='flex justify-between max-[400px]:w-[300px] w-80 mx-auto mt-2 mb-4 rounded-[4px] border-1 border-[#9642FF] bg-[#F9F5FF] py-1 px-3 max-[400px]:text-[12px] text-[14px]'>
                <div className='flex justify-center gap-2'>
                    <FlagIcon />
                    <span className='text-[#9642FF]'>خواب از ساعت ۱۴:۲۲ شروع شده است.</span>
                </div>
                <div onClick={() => setOpenSecond(true)} className='text-[#7F14FF] cursor-pointer'>ویرایش</div>
                <Sheet isOpen={isOpenSecond} onClose={() => setOpenSecond(false)} key={1}>
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <p className='text-center text-[20px]'>ویرایش ساعت خواب</p>
                            <div className='max-[400px]:w-[280px] w-80 mx-auto'>
                                <div className='text-lg'>زمان شروع</div>
                                <div className='text-center mt-3'>
                                    <DatePicker
                                        value={start}
                                        onChange={handleChangeStart}
                                        format="MM/DD/YYYY , ساعت HH:mm:ss"
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        inputClass="custom-input"
                                        plugins={[
                                            <TimePicker position="top" />
                                        ]}
                                        placeholder="زمان شروع"
                                    />
                                </div>
                            </div>
                            <div className='max-[400px]:w-[280px] w-80 mt-3 min-[400px]:mt-6 mx-auto'>
                                <div className='text-lg'>زمان پایان</div>
                                <div className='text-center mt-3'>
                                    <DatePicker
                                        value={end}
                                        onChange={handleChangeEnd}
                                        format="MM/DD/YYYY , ساعت HH:mm:ss"
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        inputClass="custom-input"
                                        plugins={[
                                            <TimePicker position="top" />
                                        ]}
                                        placeholder="زمان پایان"
                                    />
                                </div>
                            </div>
                            <div className='max-[400px]:w-70 w-80 mt-3 min-[400px]:mt-6 mx-auto'>
                                <div className='text-lg'>مدت زمان</div>
                                <div className='max-[400px]:w-full text-[14px] text-[#505050] my-auto w-80 h-10 px-4 py-1 bg-[#FAFAFA] mt-3 rounded-lg'>
                                    <p className='py-1.5'>{diff}</p>
                                </div>
                            </div>
                            <div className='max-[400px]:w-70 w-80 mx-auto mt-6'>
                                <div className='flex gap-2'>
                                    <div className='text-lg'>یادداشت</div>
                                    <div className='text-[14px] text-[#909090] my-auto'>(اختیاری)</div>
                                </div>
                                <textarea
                                    className='max-[400px]:w-70 w-80 h-40 pt-3 p-2 border-2 border-gray-200 rounded-lg text-gray-700 text-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none'
                                    placeholder='یادداشت خود را بنویسید...'
                                    defaultValue="سلام"
                                    id='1'
                                />
                            </div>
                            <div className='max-[400px]:w-70 w-80 mx-auto mt-8'>
                                <button className='w-full h-12 text-white rounded-[8px] bg-[#9642FF] px-6 cursor-pointer'>ذخیره</button>
                            </div>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>
            </div>
        </>
    );

}