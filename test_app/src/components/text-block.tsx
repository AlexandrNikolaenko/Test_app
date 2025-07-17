"use client";

import { ReactNode } from "react";

export default function TextBlock({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2 items-start">{children}</div>;
}
