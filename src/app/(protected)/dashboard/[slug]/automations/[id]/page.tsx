import Trigger from "@/components/global/automations/trigger";
import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automations";
import React from "react";
import { PiSealWarning } from "react-icons/pi";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  return (
    <div className=" flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={params.id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-x-2 items-center">
         <PiSealWarning className="h-5 w-5 text-indigo-600"/>
          When...
        </div>
        <Trigger/>
      </div>
    </div>
  );
};

export default Page;
