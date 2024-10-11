import React, { useEffect, useState } from "react";
import "./countdown.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-20T00:00:00");
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
        <div className="countdown-element">
        <span>{timeLeft.days}</span>
        <span>Days</span>
      </div>
      <div className="countdown-element">
        <span>{timeLeft.hours}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-element">
        <span>{timeLeft.minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-element">
        <span>{timeLeft.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
