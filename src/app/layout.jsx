import localFont from "next/font/local";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

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

export const metadata = {
  title: "SnachBurger",
  description: "Best Burger Shop In Faisalabad.We provide different,unique,tasty,delicious Burgers",
  icons: {
    icon: "/images/snach-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <FloatingButtons />
      </body>
    </html>
  );
}
