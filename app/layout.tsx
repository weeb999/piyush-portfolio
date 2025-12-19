import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

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
      <body className="bg-[#0b0b0b] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
