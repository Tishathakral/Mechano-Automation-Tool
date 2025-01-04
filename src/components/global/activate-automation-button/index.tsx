import { Button } from '@/components/ui/button'
import { IoIosRadio } from "react-icons/io";

import React from 'react'
import Loader from '../loader'
import { Loader2 } from 'lucide-react'
// import { useQueryAutomation } from '@/hooks/user-queries'
// import { useMutationData } from '@/hooks/use-mutation-data'
// import { activateAutomation } from '@/actions/automations'
// import { ActiveAutomation } from '@/icons/active-automation'

type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
//   const { data } = useQueryAutomation(id)
//   const { mutate, isPending } = useMutationData(
//     ['activate'],
//     (data: { state: boolean }) => activateAutomation(id, data.state),
//     'automation-info'
//   )

  return (
    <Button
    //   disabled={isPending}
    //   onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
        <Loader state={false} color='white' className="mr-2">
        <IoIosRadio className='h-4 w-4'/>
      <p className="lg:inline hidden">
        Activate
        {/* {data?.data?.active ? 'Disable' : 'Activate'} */}
      </p>
      </Loader>
    </Button>
  )
}
export default ActivateAutomationButton