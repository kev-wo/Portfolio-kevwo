"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/types";

// Keeps <html lang> in sync with the active locale (html lives in the root layout).
export function LangSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
