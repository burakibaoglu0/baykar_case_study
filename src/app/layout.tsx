import { StoreProvider } from "./StoreProvider";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/globals.scss"

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Baykar | Case Study",
  description: "Generated for Baykar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
