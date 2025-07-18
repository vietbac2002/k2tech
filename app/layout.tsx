import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K2Tech - Giải pháp sự kiện toàn diện",
  description: "Generated by create next app",
  keywords: [
    "K2Tech",
    "giải pháp sự kiện",
    "sự kiện trực tuyến",
  ],
  icons: {
    icon: [
      { url: "/images/logo-footer.png", type: "image/png", sizes: "32x32" }
    ],
    shortcut: [
      { url: "/images/logo-footer.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [
      { url: "/images/logo-footer.png", type: "image/png", sizes: "180x180" }
    ]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
      </head>
      <Provider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main>
            {children}
          </main>

        </body>
      </Provider>
    </html>
  );
}
