"use client"
import Image from "next/image";
import Avatar from "@/public/image/avatar.jpg";
import RightArrowIcon from "@/components/icons/rightarrow";
import HeadPhoneIcon from "@/components/icons/headphone";
import { useRouter } from 'next/navigation';


export default function Header({ title }: { title: string }) {

    const router = useRouter();
    const handleLogin = () => {
        router.replace('/');
        router.refresh();
    };

    return (
        <div className="flex justify-between w-full py-3 px-5 md:px-20 bg-white border-b-1 border-[#EDEDED]">
            <div className="flex gap-3 my-auto">
                <div className="my-auto">
                    <button className="cursor-pointer" onClick={handleLogin}>
                        <RightArrowIcon />
                    </button>
                </div>
                <div className="text-[18px] md:text-[24px] text-black">
                    {title}
                </div>
            </div>
            <div className="flex gap-2 md:gap-4">
                <HeadPhoneIcon />
                <Image className="w-8 h-8 md:w-12 md:h-12 rounded-full" alt="" src={Avatar} />
            </div>
        </div>
    );
}