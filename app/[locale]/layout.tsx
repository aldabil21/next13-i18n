import "@styles/globals.css";
import i18n from "@i18next";

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (params.locale !== i18n.language) {
    i18n.changeLanguage(params.locale);
  }

  return (
    <html lang={params.locale} dir={i18n.dir(params.locale)}>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

// export function generateStaticParams() {
//   return (i18n.options.supportedLngs as string[]).map((locale) => ({ locale }));
// }
