import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karl McClelland Photography | Professional Photographer",
  description: "Professional photography services by Karl McClelland. Specializing in portraits, commercial photography, events, and visual storytelling. Based at karlmcclelland.com",
  keywords: "photography, photographer, portraits, commercial photography, Karl McClelland, professional photography",
  authors: [{ name: "Karl McClelland" }],
  openGraph: {
    title: "Karl McClelland Photography",
    description: "Professional photography services specializing in portraits, commercial work, and visual storytelling",
    url: "https://karlmcclelland.com",
    siteName: "Karl McClelland Photography",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl McClelland Photography",
    description: "Professional photography services specializing in portraits, commercial work, and visual storytelling",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
