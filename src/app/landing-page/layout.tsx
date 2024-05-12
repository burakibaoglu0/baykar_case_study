import Header from "@/views/header";
import Footer from "@/views/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAYKAR Teknoloji | Landing Page",
  description: "Generated for Baykar Job Application",
};

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
