import React, { useEffect, useState } from 'react';

// Helper to get next Sunday at 9am CT
function getNextSunday9amCT() {
  const now = new Date();
  // Central Time offset (UTC-5 during daylight saving, UTC-6 otherwise)
  // For simplicity, use UTC-5 (CDT) for August
  const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  let nextSunday = new Date(utcNow);
  nextSunday.setUTCDate(utcNow.getUTCDate() + ((7 - utcNow.getUTCDay()) % 7 || 7));
  nextSunday.setUTCHours(14, 0, 0, 0); // 9am CT is 14:00 UTC
  return nextSunday;
}

const event = {
  title: 'Sunday morning class',
  timestamp: getNextSunday9amCT().getTime(),
};

function getTimeLeft(target: number) {
  const now = Date.now();
  let diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(event.timestamp));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(event.timestamp));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
  <div className="flex flex-col md:flex-row w-full h-auto md:h-56 bg-white">
      {/* Left side */}
      <div className="flex flex-col justify-center items-start w-1/2 px-8 py-6 bg-white">
        <div className="flex items-center mb-2">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#e57368" strokeWidth="2" className="mr-2">
            <rect x="3" y="5" width="18" height="16" rx="2" fill="#fff" />
            <path d="M16 3v4M8 3v4M3 9h18" />
            <path d="M7 13h2v2H7zM11 13h2v2h-2zM15 13h2v2h-2z" />
          </svg>
          <span className="text-2xl font-semibold text-[#4ec3e0]">Next Upcoming Event</span>
        </div>
        <div className="border-b-2 border-[#e57368] w-40 mb-2 sm" />
        <div className="text-xl font-bold text-gray-900 mb-2">{event.title}</div>
        <div className="flex items-center text-gray-500 text-lg">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#e57368" strokeWidth="2" className="mr-1">
            <path d="M8 7V3M16 7V3M3 9h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{getNextSunday9amCT().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#e57368" strokeWidth="2" className="mx-2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>@ 9:00 AM CT</span>
        </div>
      </div>
    {/* Right side */}
      <div className="count-down flex flex-col md:flex-row items-center bg-[#d4635c] w-full md:w-full max-sm:pb-[2em]">
        <div className="count-down flex flex-row justify-start items-center space-x-8 pl-12 max-sm:w-full max-sm:justify-center" style={{marginRight: "4em"}}>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-lg text-white mt-2">DAYS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-lg text-white mt-2">HRS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-lg text-white mt-2">MIN</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-lg text-white mt-2">SEC</span>
          </div>
        </div>
        <button
          className="bg-white text-black font-semibold px-10 py-4 rounded-full shadow text-xl md:w-[20em] max-sm:w-[70%] max-sm:mt-4"
          style={{ letterSpacing: '0.02em', marginRight: "2em" }}
        >
          JOIN US!
        </button>
      </div>
    </div>
  );
};

export default CountDown;
