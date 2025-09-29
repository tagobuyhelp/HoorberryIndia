'use client';

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import { Button } from './button';
import Link from 'next/link';
import Image from 'next/image';

const HeroCarousel = ({ 
  slides = [], 
  autoPlay = true, 
  autoPlayInterval = 6000,
  showDots = true,
  showArrows = true,
  className = ""
}) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval]);

  // Update current slide and count
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index) => {
    api?.scrollTo(index);
  };

  return (
    <div className={`relative ${className}`}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative h-[50vh] sm:h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.backgroundImage}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-2 sm:px-6 text-center text-white">
                  <h1 className="font-playfair text-2xl sm:text-4xl md:text-7xl font-bold mb-3 sm:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-lg md:text-2xl mb-4 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                    <Link href={slide.primaryLink}>
                      <Button 
                        variant="luxury" 
                        size="sm"
                        className="text-xs sm:text-lg px-4 py-2 sm:px-8 sm:py-4 w-full sm:w-auto"
                      >
                        {slide.primaryText}
                      </Button>
                    </Link>
                    {slide.secondaryLink && (
                      <Link href={slide.secondaryLink}>
                        <Button 
                          variant="luxuryOutline" 
                          size="sm"
                          className="text-xs sm:text-lg px-4 py-2 sm:px-8 sm:py-4 w-full sm:w-auto"
                        >
                          {slide.secondaryText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showArrows && (
          <>
            <CarouselPrevious 
              className="left-2 sm:left-8 bg-black/50 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 w-8 h-8 sm:w-12 sm:h-12" 
            />
            <CarouselNext 
              className="right-2 sm:right-8 bg-black/50 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 w-8 h-8 sm:w-12 sm:h-12" 
            />
          </>
        )}
      </Carousel>

      {/* Dots Indicator */}
      {showDots && count > 0 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex gap-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current - 1
                    ? 'bg-gold scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;