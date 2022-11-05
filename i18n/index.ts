import i18n from "i18next";
import BackendFs from "i18next-fs-backend";

i18n.use(BackendFs).init({
  // lng: "ar",
  fallbackLng: "ar",
  supportedLngs: ["ar", "en"],
  fallbackNS: "common",
  ns: ["common"],
  backend: {
    loadPath: "./i18n/{{lng}}/{{ns}}.json",
  },
  // To load sync
  initImmediate: false,
  // debug: process.env.NODE_ENV === "development",
});

export default i18n;
