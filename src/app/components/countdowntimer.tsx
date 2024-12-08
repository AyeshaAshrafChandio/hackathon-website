import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // You can pass the target date as a prop
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const targetTime = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center">
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xl">{timeLeft.days}</span>
        <span className="text-sm text-gray-600">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xl">{timeLeft.hours}</span>
        <span className="text-sm text-gray-600">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xl">{timeLeft.minutes}</span>
        <span className="text-sm text-gray-600">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xl">{timeLeft.seconds}</span>
        <span className="text-sm text-gray-600">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
