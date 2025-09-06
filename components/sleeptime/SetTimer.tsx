"use client"

import { useRef, useState } from 'react';
import EndTimerIcon from "@/components/icons/endtimer";
import StartTimerIcon from "@/components/icons/starttimer";

const FirstImage = () => (
    <StartTimerIcon />
);

const SecondImage = () => (
    <EndTimerIcon />
);

export default function SetTimer() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState("");
    const [countdownDuration, setCountdownDuration] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 3
    });
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<Date | null>(null);
    const [completionMessage, setCompletionMessage] = useState("تایمر به پایان رسید!");
    const [isCompleted, setIsCompleted] = useState(false);
    const getTotalSeconds = () => {
        return countdownDuration.days * 24 * 60 * 60 +
            countdownDuration.hours * 60 * 60 +
            countdownDuration.minutes * 60 +
            countdownDuration.seconds;
    };

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;

        return {
            days,
            hours,
            minutes,
            seconds: secs
        };
    };

    const startCountdown = () => {
        if (isRunning) return;

        setIsRunning(true);
        setIsCompleted(false);
        startTimeRef.current = new Date();
        setStatus("تایمر شروع شد!");

        setTimeLeft(countdownDuration);

        timerRef.current = setInterval(() => {
            if (!startTimeRef.current) return;

            const now = new Date();
            const elapsedSeconds = Math.floor((now.getTime() - startTimeRef.current.getTime()) / 1000);
            const totalSeconds = getTotalSeconds();
            const remainingSeconds = totalSeconds - elapsedSeconds;

            if (remainingSeconds <= 0) {
                clearInterval(timerRef.current!);
                setIsRunning(false);
                setIsCompleted(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setStatus("تایمر به پایان رسید!");

                setTimeout(() => {
                    setCurrentImageIndex(0);
                }, 1000);

                return;
            }

            setTimeLeft(formatTime(remainingSeconds));
        }, 1000);
    };

    const changeImage = () => {
        if (isRunning && currentImageIndex === 1) {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            setIsRunning(false);
            setIsCompleted(false);
            setStatus("تایمر متوقف شد!");
            setCurrentImageIndex(0);
            return;
        }

        if (!isRunning) {
            const nextIndex = (currentImageIndex + 1) % 2;
            setCurrentImageIndex(nextIndex);

            if (nextIndex === 1) {
                startCountdown();
            }
        }
    };
    return (
        <>
            <div className="relative mx-auto w-full">
                <div className='w-80 mx-auto cursor-pointer' onClick={changeImage}>
                    {currentImageIndex === 0 ? <FirstImage /> : <SecondImage />}
                </div>
                <div className={`absolute max-[500px]:top-10 top-8 left-1/2 transform -translate-x-1/2 text-white max-[500px]:text-[30px]  text-5xl pointer-events-none ${isRunning ? '' : 'opacity-0'}`}>
                    {/* <div className={`p-3 rounded-xl border-2 ${isRunning ? 'bg-orange-50 border-orange-200' : 'bg-gray-100 border-gray-300 opacity-70'
                        }`}>
                        <div className="text-2xl font-bold text-orange-600">{timeLeft.days}</div>
                        <div className="text-xs text-gray-600 mt-1">روز</div>
                    </div> */}
                    {String(timeLeft.seconds).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')}
                </div>
            </div>

            {isCompleted && (
                <div className='text-sm text-green-400 text-center my-3'>
                    {completionMessage}
                </div>
            )}
        </>
    );
}