"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = {};

export default function CustomTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
