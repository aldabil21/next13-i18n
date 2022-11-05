import i18n from "@i18next";

export default async function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl pb-6">{i18n.t("common:hi")}</h1>
    </div>
  );
}
