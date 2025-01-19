"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import LogoSmall from '@/images/logo-small';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

const HomeNavbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 shadow-md z-[9999]">
      <div className="flex items-center">
        <LogoSmall />
      </div>
      <div className="flex items-center">
        <Button onClick={() => router.push('/dashboard')} className="mr-4">
          Go to Dashboard
        </Button>
      <ModeToggle/>
      </div>
    </div>
  );
};

export default HomeNavbar;
