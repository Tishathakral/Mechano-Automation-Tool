"use client"
import { usePaths } from '@/hooks/user-nav'
import React from 'react'

type Props = {
    slug: string
}

const Sidebar = (props: Props) => {
    const {page} = usePaths();
  return (
    <div>index</div>
  )
}

export default Sidebar