"use client";
import useLocale from "@hooks/useLocale";

export default function Home() {
  const { t } = useLocale();
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl pb-6">Root Page</h1>
      <h2>{t("hi")}</h2>
    </div>
  );
}
