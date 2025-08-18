import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CountDown from '../components/CountDown';
import ImageCarousel from '../components/ImageCarousel';

const HomePage: React.FC = () => {
  return (
  <main className="flex flex-col w-full h-full max-w-full bg-white dark:bg-gray-900">
      <section>
        <HeroSlider />
      </section>
      <section>
        <div className="w-full flex justify-center">
          <CountDown />
        </div>
      </section>
        <section id="articles" className="w-full flex flex-col gap-12 py-12">
          {/* Article 1 */}
          <article className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="w-full md:w-1/2">
              <ImageCarousel
                images={[
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=1200&q=80',
                  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=1200&q=80',
                  'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=compress&w=1200&q=80',
                ]}
                altPrefix="Article 1 image"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Article 1 Title</h2>
              <p className="text-lg text-gray-700">This is a description for the first article. It features an AI-generated image carousel on the left and this text on the right.</p>
            </div>
          </article>
          {/* Article 2 (even, reversed, light gray bg) */}
          <article className="flex flex-col md:flex-row-reverse items-center gap-8 w-full bg-gray-100 py-8 rounded-lg">
            <div className="w-full md:w-1/2">
              <ImageCarousel
                images={[
                  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=compress&w=1200&q=80',
                  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=compress&w=1200&q=80',
                  'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=compress&w=1200&q=80',
                ]}
                altPrefix="Article 2 image"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Article 2 Title</h2>
              <p className="text-lg text-gray-700">This is a description for the second article. The layout is reversed and the background is light gray for even-numbered articles.</p>
            </div>
          </article>
          {/* Article 3 */}
          <article className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="w-full md:w-1/2">
              <ImageCarousel
                images={[
                  'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=compress&w=1200&q=80',
                  'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=compress&w=1200&q=80',
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=1200&q=80',
                ]}
                altPrefix="Article 3 image"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Article 3 Title</h2>
              <p className="text-lg text-gray-700">This is a description for the third article. It features an AI-generated image carousel on the left and this text on the right.</p>
            </div>
          </article>
        </section>
    </main>
  );
};

export default HomePage;
