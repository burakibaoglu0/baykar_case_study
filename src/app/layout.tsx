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
  title: "BAYKAR Teknoloji | Case Study",
  description: "Generated for Baykar Job Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="icon" type="image/svg+xml" href="https://cdn.baykartech.com/static/assets/img/favicon.png" />
        </head>
        <body className={roboto.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
