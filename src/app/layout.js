import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Appolon",
  description: "Appolon's portfolio",
  openGraph: {
    title: "Appolon",
    description: "Appolon's portfolio",
    url: "https://appolon.dev",
    siteName: "Appolon",
    images: ["https://appolon.dev/appolon_pfp.png"],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ab0000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
