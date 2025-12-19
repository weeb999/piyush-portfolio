import "./globals.css";
import type { Metadata } from "next";

import TopTabs from "./components/TopTabs";
import FloatingContact from "./components/FloatingContact";

export const metadata: Metadata = {
  title: "Piyush Gadiya | Software Developer",
  description: "Portfolio of Piyush Gadiya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 scroll-smooth">
        {/* Fixed Top Navigation */}
        <TopTabs />

        {/* Page Content */}
        {children}

        {/* Floating Contact Bar */}
        <FloatingContact />
      </body>
    </html>
  );
}

