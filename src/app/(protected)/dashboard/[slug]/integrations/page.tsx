import { INTEGRATION_CARDS } from "@/constants/integrations";
import React from "react";
import IntegrationCard from "./_components/integration-card";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-y-5 w-full lg:w-10/12 xl:w-8/12">
      {INTEGRATION_CARDS.map((card, key) => (
        <IntegrationCard 
        key={key}
        {...card}
        />
      ))}
      </div>
    </div>
  );
}

export default Page;
