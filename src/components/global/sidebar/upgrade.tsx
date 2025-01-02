import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className='bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3'>
       <span className='text-sm text-white'> Upgrade to {' '}
        <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
          Smart AI
        </span>
        {' '}
        to unlock all features
       </span>
       <p className='text-sm text-[#9B9CA0] font-light'>
        including AI and more 
       </p>
       <PaymentButton />
        </div>
  )
}

export default UpgradeCard