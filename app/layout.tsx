import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Karthick Ganapathy — IT Support & Security";
const description =
  "Portfolio of Karthick Ganapathy, an IT Support & Security professional specializing in Windows/macOS support, network troubleshooting, and vendor security reviews.";

// No metadataBase set: there's no deployed domain yet. Once this is hosted,
// add `metadataBase: new URL("https://your-domain.com")` so social previews
// resolve to absolute URLs instead of relative ones.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Karthick Ganapathy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
