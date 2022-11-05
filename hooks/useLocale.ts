"use client";

import { useContext } from "react";
import { localContext } from "../context/locale/Provider";

export default function useLocale() {
  return useContext(localContext);
}
