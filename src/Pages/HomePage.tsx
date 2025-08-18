import React from 'react';
import HeroSlider from '../components/HeroSlider';

const HomePage: React.FC = () => {
  return (
  <main className="flex flex-col w-full h-full max-w-full bg-white dark:bg-gray-900">
      <section className="flex-shrink-0 w-full">
        <HeroSlider />
      </section>
      <section className="flex flex-col items-center justify-center flex-1 w-full px-4 py-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">Home Page</h1>
        <p className="text-base sm:text-lg text-center">Welcome to the Home Page!</p>
      </section>
    </main>
  );
};

export default HomePage;
