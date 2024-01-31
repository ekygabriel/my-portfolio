import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.scss";
import Navigation from "./components/navigation/Navigation";

const montserrat = Montserrat({ subsets: ["latin"] });
export const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - EkomObong Udo-Affah",
    default: "EkomObong Udo-Affah",
  },
  description:
    "I'm a multifaceted designer specializing in UX, architecture, and graphics. Passionate about human-centered design, I'm on a journey to become Nigeria's top UX Designer. Explore my portfolio to see where creativity meets functionality in design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          montserrat.className + " flex flex-col min-h-[100vh] relative"
        }
      >
        <Navigation />
        <main className="pt-14 flex-1">{children}</main>
        <div id="modal"></div>
        <div id="backdrop"></div>
      </body>
    </html>
  );
}
