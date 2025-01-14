import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from 'next/font/google'; // Correct import for Google fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dheeraj P Girish",
  description: "",
};
const montserrat = Montserrat({
  weight: ['400', '600', '700'],  // Specify the weights you need
  subsets: ['latin'],  // Choose the subsets you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
