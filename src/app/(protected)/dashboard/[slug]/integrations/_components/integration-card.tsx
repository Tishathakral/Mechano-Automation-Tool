import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    title: string
    description: string
    icon: React.ReactNode 
    strategy: 'INSTAGRAM' | 'CRM'
}

function IntegrationCard({description,icon,strategy,title}: Props) {
  return (
    <div className='border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center justify-between'>
       {icon}
        <div className='flex flex-col flex-1'>
            <h3 className='text-xl'>{title}</h3>
            <p className='text-gray-500 text-base w-full md:10/12 xl:w-8/12 2xl:w-6/12'>{description}</p>
            </div>
     <Button
    //  onClick={onInstaOAuth}
    //  disabled={integrated?.name === strategy}
     className='bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100 ease-in-out'
     >
        {/* {integrated ? 'Connected' : 'Connect'} */}
        Connect
     </Button>

    </div>

  )
}

export default IntegrationCard