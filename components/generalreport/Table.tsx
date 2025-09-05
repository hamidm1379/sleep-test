"use client"

import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import NoteBookIcon from '@/components/icons/notbook';
import LeftArrowIcon from '@/components/icons/leftarrow';

export default function Table() {

    const [open, setOpen] = useState(false);
    const [openSec, setOpenSec] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const onOpenModalSec = () => setOpenSec(true);
    const onCloseModalSec = () => setOpenSec(false);

    const closeIcon = (
        <div></div>
    );
    
    return (
        <div className="max-md:px-4">
            <div className="text-[16px] font-medium mb-5">تاریخچه ساعت خواب</div>
            <div className="relative overflow-x-auto rounded-lg border-1 border-[#EDEDED]">
                <table className="w-full text-[14px] text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-white">
                        <tr>
                            <th scope="col" className="max-[400px]:px-2 px-6 py-3">
                                تاریخ
                            </th>
                            <th scope="col" className="max-[400px]:px-2 px-6 py-3">
                                مدت زمان
                            </th>
                            <th scope="col" className="max-[400px]:px-2 px-6 py-3">
                                یادداشت
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-white odd:bg-[#FAFAFA] border-b border-gray-200">
                            <th scope="row" className="max-[400px]:px-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ۰۱/۱۷ - ۲۱:۴۳
                            </th>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                ۹:۱۴
                            </td>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                <button onClick={onOpenModal}>
                                    <NoteBookIcon />
                                </button>
                                <div className="NoteModal">
                                    <Modal classNames={{
                                        modal: 'customModal'
                                    }}
                                        open={open}
                                        onClose={onCloseModal}
                                        center
                                        closeIcon={closeIcon}
                                    >
                                        <div className="text-[20px] text-center font-medium">یادداشت</div>
                                        <div className="flex justify-center my-5 gap-2 text-[14px] text-[#757575]">
                                            <span>۰۱/۱۷، ساعت ۲۱:۴۳</span>
                                            <LeftArrowIcon />
                                            <span>۰۱/18، ساعت 07:12</span>
                                        </div>
                                        <div className="flex justify-between gap-2 bg-[#F9F5FF] pr-1 p-2 rounded-sm">
                                            <div className='border-r-2 border-[#B471FF] pr-3'>
                                                <p className="text-right text-[16px] text-[#7F14FF] !whitespace-pre-line">
                                                    {'عین یک خرس بالغ می‌خوابه :) \n البته فکر می‌کنم جای نگرانی نداره و در دوران نوزادی این مقدار خواب طبیعی و نیازه.'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-left text-[#7F14FF] text-[16px] my-3">
                                            <span onClick={onCloseModal} className="cursor-pointer">بستن</span>
                                        </div>
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                        <tr className="even:bg-white odd:bg-[#FAFAFA] border-b border-gray-200">
                            <th scope="row" className="max-[400px]:px-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ۰۱/۱۶ - ۲۱:۴۵
                            </th>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                ۶:۵۰
                            </td>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                ----
                            </td>
                        </tr>
                        <tr className="even:bg-white odd:bg-[#FAFAFA] border-b border-gray-200">
                            <th scope="row" className="max-[400px]:px-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ۰۱/۱۵ - ۲۱:۴۸
                            </th>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                ۸:۳۲
                            </td>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                ----
                            </td>
                        </tr>
                        <tr className="even:bg-white odd:bg-[#FAFAFA] border-b border-gray-200">
                            <th scope="row" className="max-[400px]:px-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ۰۱/۱۴ - ۲۰:۵۶
                            </th>
                            <td className="max-[400px]:px-2 px-6 py-4">
                            ۷:۰۱
                            </td>
                            <td className="max-[400px]:px-2 px-6 py-4">
                                <button onClick={onOpenModalSec}>
                                    <NoteBookIcon />
                                </button>
                                <div className="NoteModal">
                                    <Modal classNames={{
                                        modal: 'customModal'
                                    }}
                                        open={openSec}
                                        onClose={onCloseModalSec}
                                        center
                                        closeIcon={closeIcon}
                                    >
                                        <div className="text-[20px] text-center font-medium">یادداشت</div>
                                        <div className="flex justify-center my-5 gap-2 text-[14px] text-[#757575]">
                                            <span>۰۱/۱۷، ساعت ۲۱:۴۳</span>
                                            <LeftArrowIcon />
                                            <span>۰۱/18، ساعت 07:12</span>
                                        </div>
                                        <div className="flex justify-between gap-2 bg-[#F9F5FF] pr-1 p-2 rounded-sm">
                                            <div className='border-r-2 border-[#B471FF] pr-3'>
                                                <p className="text-right text-[16px] text-[#7F14FF] !whitespace-pre-line">
                                                    {'عین یک خرس بkkkالغ می‌خوابه :) \n البته فکر می‌کنم جای نگرانی نداره و در دوران نوزادی این مقدار خواب طبیعی و نیازه.'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-left text-[#7F14FF] text-[16px] my-3">
                                            <span onClick={onCloseModalSec} className="cursor-pointer">بستن</span>
                                        </div>
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}