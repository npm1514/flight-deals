import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flight Deals",
  description: "Look for the best deals for your upcoming flight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-10 flex items-center justify-center bg-lime-100 text-center">header</header>
        <main className='m-auto text-center min-h-[85vh] mt-4'>{children}</main>
        <footer className="w-full h-10 flex items-center justify-center bg-lime-100 text-center">footer</footer>
      </body>
    </html>
  );
}
