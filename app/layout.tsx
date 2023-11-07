import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "app/(shared)/NavBar";
import Footer from "app/(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next.js with AI generated content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
