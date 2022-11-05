import Header from "@components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Could choose total different layout - this just example*/}
      <Header mini />
      {children}
    </section>
  );
}
