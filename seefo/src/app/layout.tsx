import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "Seefo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Professional Photography Services | Seefo - ismailia, Egypt."
        />
        <meta
          name="keywords"
          content="professional photography, portrait photographer, wedding photography, event photography, Ismailia photography, Seefo"
        />

        <meta
          property="og:description"
          content="Discover amazing photography services from Seefo. expert in portrait, wedding and event photography in Ismailia, Egypt. Contact us today for a consultation!"
        />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
        <meta property="og:url" content="https://seefo.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/photo-camera.png" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
