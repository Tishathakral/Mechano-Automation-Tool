'use client'
import { usePaths } from '@/hooks/user-nav'
import LogoSmall from '@/images/logo-small'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpCircleIcon } from 'lucide-react'
import UpgradeCard from './upgrade'
// import { SubscriptionPlan } from '../subscription-plan'
// import UpgradeCard from './upgrade'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths()

  return (
    <div
      className="w-[250px] 
    border-[1px]
    radial 
    fixed 
    left-0 
    hidden
    lg:inline-block
    border-[#545454] 
    bg-gradient-to-b from-[#768BDD] 
    via-[#171717]
     to-[#768BDD]
     bottom-0 
     top-0 
     m-3 
     rounded-3xl 
     overflow-hidden"
    >
      <div
        className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       
       bg-[#0e0e0e] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
      >
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3">
         <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator
            orientation="horizontal"
            className="bg-[#333336]"
          />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2 items-center">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-2 items-center">
             <HelpCircleIcon className="h-6 w-6 bg-gray-500 rounded-full" />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        {/* <SubscriptionPlan type="FREE"> */}
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCard />
          </div>
        {/* </SubscriptionPlan> */}
      </div>
    </div>
  )
}

export default Sidebar