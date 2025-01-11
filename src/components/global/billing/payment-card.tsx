import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
  label: string
  current: 'PRO' | 'FREE'
  landing?: boolean
}

const PaymentCard = ({ current, label, landing }: Props) => {
  return (
    <div
      className={cn(
        label !== current
          ? 'bg-in-active dark:bg-gray-800'
          : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
        'p-[2px] rounded-xl overflow-hidden'
      )}
    >
      <div
        className={cn(
          landing && 'radial--gradient--pink',
          'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90 dark:bg-gray-900 h-full'
        )}
      >
        {landing ? (
          <h2 className="text-2xl text-gray-900 dark:text-white">
            {label === 'PRO' && 'Premium Plan'}
            {label === 'FREE' && 'Standard'}
          </h2>
        ) : (
          <h2 className="text-2xl text-gray-900 dark:text-white">
            {label === current
              ? 'Your Current Plan'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </h2>
        )}
        <p className="text-text-secondary dark:text-gray-400 text-sm mb-2">
          This is what your plan covers for automations and AI features
        </p>
        {label === 'PRO' ? (
          <span className="bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 font-bold to-pink-500 bg-clip-text text-transparent">
            Smart AI
          </span>
        ) : (
          <p className="font-bold mt-2 text-text-secondary dark:text-gray-400">
            Standard
          </p>
        )}
        {label === 'PRO' ? (
          <p className="mb-2 dark:text-white">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2 dark:text-white">Free</p>
        )}

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
          <p
            key={i}
            className="mt-2 text-muted-foreground dark:text-gray-400 flex gap-2"
          >
            <CircleCheck className="text-indigo-500 dark:text-indigo-600" />
            {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              'rounded-full mt-5',
              label === 'PRO'
                ? 'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500'
                : 'bg-background-80 dark:bg-gray-800 text-white hover:text-background-80 dark:hover:text-gray-800'
            )}
          >
            {label === current
              ? 'Get Started'
              : current === 'PRO'
              ? 'Free'
              : 'Get Started'}
          </Button>
        ) : (
          <Button
            className={cn(
              'rounded-full mt-5',
              'bg-background-80 dark:bg-gray-800 text-white hover:text-background-80 hover:text-blue-700',
              { 'opacity-50 cursor-not-allowed': label === current }
            )}
            disabled={label === current}
          >
            {label === current
              ? 'Active'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PaymentCard
