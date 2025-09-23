import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"]
// })

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"]
// })

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS"
  },
  description: "Trying to learn NextJS as well as we can.",
  keywords: ['JavaScript', 'React', 'Next.js', 'Learning', 'MERN stack', 'Full stack'],
  authors: [{ name: "Walidur Tanjim", url: "https://bespoke-pothos-08eb7a.netlify.app" }],
  creator: "Walidur Tanjim",
  publiser: "Walidur Tanjim"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
