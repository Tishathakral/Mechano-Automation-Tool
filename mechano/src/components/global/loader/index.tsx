import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.ReactNode
    state : boolean
    className?: string
    color?: string
}

const Loader = ({children,state,className,color}: Props) => {
  return state ? (
    <div className={cn(className)}>
        <LoaderCircle className={cn('animate-spin',color)}/>
       </div>
  ) : (
    <>{children}</>
  )
}

export default Loader