import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageFadeIn from "@/components/PageTransition/PageFadeIn"; 
import PageTransitionOverlay from "@/components/PageTransition/PageTransitionOverlay";
import { TransitionProvider } from "./TransitionContext";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Nexzell | Ecommerce Without Limits",
  description: "Everything you need to build, run and grow online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <TransitionProvider>
      <PageTransitionOverlay />
      <main>
        <Header />
        <PageFadeIn>{children}</PageFadeIn>
        <Footer />
      </main> 
      </TransitionProvider>
      </body >
    </html >
  );
}