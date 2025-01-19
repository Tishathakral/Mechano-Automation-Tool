"use client"
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const HeroSection = () => {



  return (
    <div>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    
        <div className="flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-[#833ab4] to-[#fd1d1d] dark:from-[#fd1d1d] dark:to-[#833ab4] text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Automate Your Instagram Experience, <br /> Effortlessly Engage with Your Audience.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Streamline your DMs, comments, and interactions with Mechano. 
          </p>
          <Button className="mt-4 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
    </BackgroundLines>
    </div>
  );
};

export default HeroSection;


