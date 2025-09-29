'use client';

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import { Button } from './button';
import { Play, Pause } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ 
  products = [], 
  autoPlay = true, 
  autoPlayInterval = 4000,
  showDots = true,
  showArrows = true,
  showPlayPause = true,
  slidesToShow = 4,
  className = ""
}) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, isPlaying, autoPlayInterval]);

  // Update current slide and count
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    api?.scrollTo(index);
  };

  // Calculate responsive basis for slides
  const getSlideBasis = () => {
    return "basis-1/2 lg:basis-1/4"; // 2 slides on mobile, 4 slides on desktop
  };

  const slideBasis = getSlideBasis();

  return (
    <div className={`relative px-2 sm:px-4 ${className}`}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4 py-3 px-1">
          {products.map((product, index) => (
            <CarouselItem 
              key={product.id} 
              className={`pl-1 sm:pl-2 md:pl-4 ${slideBasis} h-full`}
            >
              <ProductCard 
                product={product} 
                showAddToCart={true}
                showQuickView={true}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showArrows && (
          <>
            <CarouselPrevious 
              className="left-1 sm:left-2 bg-black/80 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300" 
            />
            <CarouselNext 
              className="right-1 sm:right-2 bg-black/80 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300" 
            />
          </>
        )}
      </Carousel>

      {/* Controls Container */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Play/Pause Button */}
        {showPlayPause && (
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="bg-black/80 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="sr-only">
              {isPlaying ? 'Pause' : 'Play'} carousel
            </span>
          </Button>
        )}

        {/* Dots Indicator */}
        {showDots && count > 0 && (
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current - 1
                    ? 'bg-gold scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;