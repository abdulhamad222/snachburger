import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import {Caveat} from "next/font/google";


export const metadata = {
  title: "SnachBurger",
  description: "Best Burger Shop In Faisalabad.We provide different,unique,tasty,delicious Burgers",
  icons: {
    icon: "/images/snach-logo.jpg",
  },
};

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={caveat.className}
      >
        {children}

        <FloatingButtons />
      </body>
    </html>
  );
}
