"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    type: "image",
    image: "/graphics/slide1_3d.png",
    video: "/videos/slide1.mp4",
    titlePrimary: "Statutory",
    titleSecondary: "Compliance",
    subtitle: "Ensure statutory compliance, financial transparency, and accurate reporting through statutory compliance services under one roof.",
    buttonLabel: "Our Services",
    buttonHref: "/services/compliance"
  },
  {
    type: "image",
    image: "/graphics/slide3_3d.png",
    video: "/videos/slide3.mp4",
    titlePrimary: "Audit &",
    titleSecondary: "Assurance",
    subtitle: "Comprehensive verification of financial documents and secure future planning through our audit and assurance services.",
    buttonLabel: "Our Services",
    buttonHref: "/services/assurance-services"
  },
  {
    type: "image",
    image: "/graphics/slide2_3d.png",
    video: "/videos/slide2.mp4",
    titlePrimary: "Tax & Advisory",
    titleSecondary: "Services",
    subtitle: "Expert financial and tax advisory to help your growing business navigate complex regulations and grow sustainably.",
    buttonLabel: "Our Services",
    buttonHref: "/services/taxation"
  }
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-[#EAE7DC] to-[#116466] border-b">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full w-full m-0 p-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[80vh] min-h-[500px] w-full pl-0 m-0 bg-transparent">
              <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-24">
                
                {/* Left Side: Graphic / Video */}
                <div className="relative flex items-center justify-center p-8" style={{ perspective: '1000px' }}>
                  <div className="relative w-full max-w-lg aspect-square animate-float">
                    {slide.type === "video" ? (
                      <video 
                        src={slide.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={slide.image}
                        className="w-full h-full object-contain mix-blend-multiply rounded-2xl"
                      />
                    ) : (
                      <img
                        src={slide.image}
                        alt={`${slide.titlePrimary} ${slide.titleSecondary}`}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    )}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-center items-start space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="text-[#111439] block mb-2 drop-shadow-md">{slide.titlePrimary}</span>
                    <span className="text-white drop-shadow-md">{slide.titleSecondary}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed mix-blend-screen drop-shadow-sm font-medium">
                    {slide.subtitle}
                  </p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-10 py-6 text-base font-semibold transition-transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Link href={slide.buttonHref}>
                        {slide.buttonLabel}
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-primary z-20 shadow-md" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-primary z-20 shadow-md" />
      </Carousel>
    </section>
  );
}
