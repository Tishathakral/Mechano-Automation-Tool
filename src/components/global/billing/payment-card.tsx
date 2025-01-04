import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheckIcon } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

function PaymentCard({ current, label, landing }: Props) {
  return (
    <div
      className={cn(
        label !== current
          ? "bg-in-active dark:bg-gray-800"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "p-[2px] rounded-xl overflow-hidden"
      )}
    >
      <div
        className={cn(
          landing && "radial--gradient--pink",
          "flex flex-col pl-5 py-5 pr-10 rounded-xl bg-white dark:bg-gray-900"
        )}
      >
        {landing ? (
          <h2 className="text-2xl text-gray-900 dark:text-gray-100">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl text-gray-900 dark:text-gray-100">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </h2>
        )}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
          This is what your plan includes for automations and AI features.
        </p>
        {label === "PRO" ? (
          <span className="bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 font-bold to-pink-500 bg-clip-text text-transparent">
            Smart AI
          </span>
        ) : (
          <p className="font-bold mt-2 text-gray-600 dark:text-gray-400">
            Standard
          </p>
        )}
        {label === "PRO" ? (
          <p className="mb-2">
            <b className="text-xl text-gray-900 dark:text-gray-100">$99</b>
            /month
          </p>
        ) : (
          <p className="mb-2">
            <b className="text-xl text-gray-900 dark:text-gray-100">$0</b>
            /month
          </p>
        )}

        {PLANS[label === "PRO" ? 1 : 0].features.map((feature, index) => (
          <p
            key={index}
            className="mt-2 text-gray-600 dark:text-gray-400 flex gap-4"
          >
            <CircleCheckIcon className="h-4 w-4 text-indigo-500" />
            {feature}
          </p>
        ))}
         {landing ? (
          <Button
            className={cn(
              'rounded-full mt-5',
              label === 'PRO'
                ? 'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500'
                : 'bg-background-80 text-white hover:text-background-80'
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
            className="rounded-full mt-5 bg-background-80 text-white hover:text-background-80"
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
  );
}

export default PaymentCard;
