import "./globals.css";
import TopTabs from "./components/TopTabs";
import FloatingContact from "./components/FloatingContact";

export const metadata = {
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
      <body className="
        bg-gray-50 text-gray-900
        dark:bg-slate-900 dark:text-gray-100
        transition-colors duration-300
      ">
        <TopTabs />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
