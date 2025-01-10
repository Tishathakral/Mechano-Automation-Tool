"use client"
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/');
  }

  return (
    <div>
      <Button onClick={handleClick} className='flex justify-center items-center'>
        Go to Dashboard <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default Page;
