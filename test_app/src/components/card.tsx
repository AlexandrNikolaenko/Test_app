"use client";

import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[15px] items-start p-[15px] h-full rounded-[10px] bg-white shadow-base">
      {children}
    </div>
  );
}
