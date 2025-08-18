import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'About',
    description: 'Learn more about our mission, vision, and community.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=1200&q=80', // Replace with AI-generated imagery
  },
  {
    title: 'Live Stream',
    description: 'Join our live stream and connect with faith from anywhere.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=1200&q=80', // Replace with AI-generated imagery
  },
  {
    title: 'Plan of Salvation',
    description: 'Discover the plan of salvation and its meaning for you.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=compress&w=1200&q=80', // Replace with AI-generated imagery
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, slideCount]);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-white font-bold tracking-widest text-lg mb-4 mt-8 uppercase" style={{letterSpacing: '0.15em'}}>PUT YOUR FAITH INTO ACTION</h3>
        <div key={current} className="w-full flex flex-col items-center">
          <div
            className="bg-[#e57368] px-8 py-4 rounded mb-6 inline-block"
            style={{
              animation: 'fadeSlideUp 1s',
              opacity: 1,
            }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">{slides[current].title === 'About' ? 'FAITH IN GOD' : slides[current].title.toUpperCase()}</h1>
          </div>
          <p
            className="text-white text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-lg"
            style={{
              animation: 'scaleUp 1s',
              opacity: 1,
            }}
          >
            {slides[current].title === 'About'
              ? 'One person with a belief is equal to a force of ninety-nine who have only interest'
              : slides[current].description}
          </p>
          <style>{`
            @keyframes fadeSlideUp {
              0% {
                opacity: 0;
                transform: translateY(5em);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes scaleUp {
              0% {
                opacity: 0;
                transform: scale(0.5);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
        <button className="px-8 py-2 border-2 border-white rounded-full font-semibold shadow hover:bg-white hover:text-gray-900 transition mb-8">ABOUT US</button>
      </div>
      {/* Dots menu */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 aspect-square rounded-full border-2 border-white !p-0 !mr-[1em] transition ${current === idx ? '!bg-[#e57368]' : '!bg-white/30'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-6 left-0 w-full px-8 z-10">
        <div className="w-full h-2 bg-white/30 rounded-full">
          <div
            className="h-2 bg-[#e57368] rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / slideCount) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
