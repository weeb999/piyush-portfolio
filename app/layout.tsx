import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import SectionTabs from "./components/SectionTabs";

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
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
  
<body>
  <SectionTabs />
  {children}
</body>
}