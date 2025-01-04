"use client";

import { usePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "./gradient-button";
import { Button } from "@/components/ui/button";

type Props = {};

const AutomationList = (props: Props) => {
  const { paths } = usePaths();
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${paths}/123124123123`}
        className="bg-white dark:bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-gray-300 dark:border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Automation Name
          </h2>
          <p className="text-gray-600 dark:text-[#9B9CA0] text-sm font-light mb-2">
            This is from the comment
          </p>
          {/* Automations Keywords */}
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize text-black dark:text-white",
                (0 + 1) % 1 == 0 &&
                  "bg-green-100 border-2 border-green-400 dark:bg-green-950",
                (1 + 1) % 2 == 0 &&
                  "bg-purple-100 border-2 border-purple-400 dark:bg-purple-950",
                (2 + 1) % 3 == 0 &&
                  "bg-yellow-100 border-2 border-yellow-400 dark:bg-yellow-800",
                (3 + 1) % 4 == 0 &&
                  "bg-red-100 border-2 border-red-400 dark:bg-red-950"
              )}
            >
              get started
            </div>
          </div>
          <div className="rounded-full border-2 border-dashed border-gray-300 dark:border-white/60 mt-3 px-3 py-1">
            <p className="text-sm text-gray-500 dark:text-[#bfc0c3]">
              No keywords
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="capitalize text-sm font-light text-gray-600 dark:text-[#9B9CA0]">
            January 5th 2025
          </p>
          <GradientButton
            type="BUTTON"
            className="w-full bg-gray-200 dark:bg-[#191919] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#1e1e1e]"
          >
            Smart AI
          </GradientButton>
          <Button className="w-full bg-gray-200 dark:bg-[#191919] text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#1e1e1e]">
            Standard
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
