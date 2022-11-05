"use client";
import { createContext } from "react";

export const localContext = createContext({ locale: "", t: (code: string): string => "" });

const DUMMY_TRANS = {
  ar: {
    hi: "Hi in AR",
  },
  en: {
    hi: "Hi in EN",
  },
};

export default function LocaleProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
  // TODO: make other locale functionality
  const t = (code: string) => {
    // @ts-ignore  temp only
    return DUMMY_TRANS[locale][code] as string;
  };
  return <localContext.Provider value={{ locale, t }}>{children}</localContext.Provider>;
}
