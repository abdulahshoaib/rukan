import type { Metadata } from "next";
import "./globals.css";
import ToasterProvider from "@/components/ToasterProvider";

export const metadata: Metadata = {
  title: "Rukan Construction | Estimating and General Contracting in DFW and Houston",
  description: "Texas general contractor and estimating partner serving DFW and Houston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F9F4EC" />
      </head>
      <body className="bg-brandcream text-slate-900">
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
