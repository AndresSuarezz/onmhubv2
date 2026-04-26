import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMN HUB — Recapacitar al mundo con tecnología e IA",
  description: "Formamos y transformamos la vida de las personas con discapacidad a través de tecnología accesible y planes de igualdad efectivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=jetbrains-mono@400,500&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
