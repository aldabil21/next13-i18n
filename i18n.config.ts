const defaultLocale = "ar" as const;

const locales = ["ar", "en"] as const;

const dir = {
  ar: "rtl",
  en: "ltr",
} as Record<typeof locales[number], "rtl" | "ltr">;

export const i18n = {
  defaultLocale,
  locales,
  dir: function (locale: typeof locales[number]) {
    if (!dir[locale]) {
      return dir[defaultLocale];
    }

    return dir[locale];
  },
};
