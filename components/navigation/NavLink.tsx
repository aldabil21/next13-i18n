"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import useLocale from "../../hooks/useLocale";

export default function NavLink({
  href,
  children,
}: {
  href: string;

  children: React.ReactNode;
}) {
  const segments = useSelectedLayoutSegments();
  const active = `/${segments[0] || ""}` === href;
  const { locale } = useLocale();

  return (
    <Link href={`/${locale}${href}`} className={active ? "underline" : ""}>
      {children}
    </Link>
  );
}
