import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Føyner Studio — Photography, Music & Digital Art",
  description:
    "Føyner Studio is a creative space for photography, music, digital art and stories from Bergen, Norway.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
