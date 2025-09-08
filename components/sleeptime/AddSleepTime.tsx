'use client';

import { useState, useEffect } from 'react';
import { Sheet } from 'react-modal-sheet';
import DatePicker, { DateObject, Value } from "react-multi-date-picker";
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import PlusIcon from '@/components/icons/plus';

export default function AddSleepTime() {

    const [start, setStart] = useState<DateObject | null>(null);
    const [end, setEnd] = useState<DateObject | null>(null);
    const [diff, setDiff] = useState<string>("");
    const [isOpen, setOpen] = useState(false);
    const [minDate, setMinDate] = useState<Date | null>(null);

    const calcDiff = (startDate: DateObject | null, endDate: DateObject | null): string => {
        if (!startDate || !endDate) return "";

        const s = startDate.toDate();
        const e = endDate.toDate();

        const diffMs = e.getTime() - s.getTime();
        if (diffMs < 0) return "تاریخ پایان قبل از شروع است";

        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;

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
    useEffect(() => {
        setMinDate(new Date());
    }, []);

    return (
        <>
            <div onClick={() => setOpen(true)} className="flex justify-center rounded-[8px] px-[24px] mx-auto gap-2 max-[400px]:w-[300px] w-[320px] h-[48px] bg-white border-1 border-[#A85FFF] cursor-pointer hover:bg-[#e4dfe9]">
                <PlusIcon />
                <div className="text-[#9642FF] my-auto" >افزودن دستی</div>
            </div>

            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} key={2}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <p className='text-center text-[20px] text-black'>ساعت خواب</p>
                        <div className='max-[400px]:w-[280px] w-80 mx-auto'>
                            <div className='text-lg text-black'>زمان شروع</div>
                            <div className='text-center mt-3'>
                                <DatePicker
                                    key={1}
                                    value={start}
                                    onChange={handleChangeStart}
                                    format="MM/DD/YYYY , ساعت HH:mm:ss"
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    inputClass="custom-input"
                                    plugins={[
                                        <TimePicker key={1} position="top" />
                                    ]}
                                    minDate={minDate === null ? undefined : minDate}
                                    placeholder="زمان شروع"
                                    className='text-gray-700'
                                />
                            </div>
                        </div>
                        <div className='max-[400px]:w-[280px] w-80 mt-3 min-[400px]:mt-6 mx-auto'>
                            <div className='text-lg text-black'>زمان پایان</div>
                            <div className='text-center mt-3'>
                                <DatePicker
                                    key={2}
                                    value={end}
                                    onChange={handleChangeEnd}
                                    format="MM/DD/YYYY , ساعت HH:mm:ss"
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    inputClass="custom-input"
                                    plugins={[
                                        <TimePicker key={2} position="top" />
                                    ]}
                                    minDate={minDate === null ? undefined : minDate}
                                    placeholder="زمان پایان"
                                    className='text-red'
                                />
                            </div>
                        </div>
                        <div className='max-[400px]:w-70 w-80 mt-3 min-[400px]:mt-6 mx-auto'>
                            <div className='text-lg text-black'>مدت زمان</div>
                            <div className='max-[400px]:w-full text-[14px] text-[#505050] my-auto w-80 h-10 px-4 py-1 bg-[#FAFAFA] mt-3 rounded-lg'>
                                <p className='py-1.5 text-black'>{diff}</p>
                            </div>
                        </div>

                        <div className='max-[400px]:w-70 w-80 mx-auto mt-6'>
                            <div className='flex gap-2'>
                                <div className='text-lg text-black'>یادداشت</div>
                                <div className='text-[14px] text-[#909090] my-auto'>(اختیاری)</div>
                            </div>
                            <textarea
                                className='max-[400px]:w-70 w-80 h-40 pt-3 p-2 border-2 border-gray-200 rounded-lg text-gray-700 text-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none'
                                placeholder='یادداشت خود را بنویسید...'
                                defaultValue=""
                                id='2'
                            />
                        </div>
                        <div className='max-[400px]:w-70 w-80 mx-auto mt-8'>
                            <button className='w-full h-12 text-white rounded-[8px] bg-[#9642FF] px-6 cursor-pointer'>ذخیره</button>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>

        </>
    );

}