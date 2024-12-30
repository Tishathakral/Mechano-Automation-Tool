import { Sidebar_menu } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  page: string;
  slug: string;
};

function Items({ page, slug }: Props) {
  return Sidebar_menu.map((item) => (
    <Link
      key={item.id}
      href={`/dashboard/${slug}/${item.label === "home" ? "/" : item.label}`}
      className={cn(
        "capitalize flex gap-x-2 white rounded-full p-3 items-center justify-start text-sm font-medium transition-colors hover:bg-gray-600 hover:text-black",
        page === item.label ? "bg-gray-600 text-black" : "text-white",
        page === slug && item.label === "home"
          ? "bg-white text-black"
          : "text-gray-400"
      )}
    >
      {item.icon}
      {item.label}
    </Link>
  ));
}

export default Items;
