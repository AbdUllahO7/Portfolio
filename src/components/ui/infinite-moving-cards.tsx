"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ChevronRight, Star } from 'lucide-react';
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
    rating?: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "2220s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "2240s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "2280s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-12 w-max flex-nowrap ",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className="group w-[350px] max-w-full relative rounded-xl flex-shrink-0 bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/20 p-1 overflow-hidden md:w-[450px] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative h-full rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm">
              {/* Rating stars if available */}
              {item.rating && (
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={cn(
                        "mr-1",
                        i < item.rating! 
                          ? "fill-amber-400 text-amber-400" 
                          : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                      )} 
                    />
                  ))}
                </div>
              )}
              
              <blockquote className="relative">
                <div className="relative z-10">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-normal mb-6">
                    &quot;{item.quote}&quot;
                  </p>
                  
                  <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                    {item.avatar ? (
                      <div className="mr-4 h-10 w-10 rounded-full overflow-hidden ring-2 ring-violet-500/20">
                        <Image 
                          src={item.avatar || "/placeholder.svg"} 
                          alt={item.name} 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                    ) : (
                      <div className="mr-4 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-medium">
                        {item.name.charAt(0)}
                      </div>
                    )}
                    
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {item.name}
                      </span>
                      <span className="text-xs text-violet-600 dark:text-violet-400 font-medium mt-0.5 flex items-center">
                        {item.title}
                        <ChevronRight size={12} className="ml-1 opacity-70" />
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative quote mark */}
                <div className="absolute -top-1 -left-1 text-7xl font-serif leading-none text-violet-200 dark:text-violet-900/30 opacity-30" aria-hidden="true">
                  &quot;
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/10 to-blue-500/10 blur-xl"></div>
              </blockquote>
            </div>
            
            {/* Card border glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 via-blue-500 to-violet-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
          </li>
        ))}
      </ul>
      
      {/* Modern background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-violet-500 animate-pulse opacity-20"></div>
        <div className="absolute top-3/4 left-1/2 w-3 h-3 rounded-full bg-blue-400 animate-ping opacity-20"></div>
        <div className="absolute top-1/3 left-2/3 w-4 h-4 rounded-full bg-violet-300 animate-pulse opacity-10"></div>
        <div className="absolute top-2/3 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 blur-xl opacity-10"></div>
      </div>
    </div>
  );
};
