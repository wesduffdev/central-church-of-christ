import React, { useEffect, useState } from 'react';

type ImageCarouselProps = {
  images: string[];
  altPrefix?: string;
  className?: string;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix = 'Carousel image', className = '' }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (idx: number) => setCurrent(idx);

  // Auto-advance with pause on hover
  useEffect(() => {
    if (!images || images.length <= 1 || paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images, paused]);

  return (
    <div
      className={`w-full ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Image Carousel"
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg select-none">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              current === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-4 h-4 md:w-3 md:h-3 rounded-full mx-1 ${current === i ? '!bg-[#e57368]' : 'bg-gray-700'}`}
            style={{ padding: 0, marginRight: '0.5rem' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
