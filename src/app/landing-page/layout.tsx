import Header from "@/views/header";
import Footer from "@/views/footer";

export default function LandingPageLayout(
  { children }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
