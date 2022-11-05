import Header from "@components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Could choose total different layout - this just example*/}
      <Header mini />
      {children}
    </>
  );
}
