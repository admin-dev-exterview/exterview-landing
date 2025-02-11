import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smaya - AI Recruitment Agent | Hire Smarter & Faster",
  description:
    "Automate your recruitment process with Smaya, the AI-powered agent that sources, screens, interviews & onboards candidates. Hire top talent faster!",
  openGraph: {
    title: "Smaya - AI Recruitment Agent | Hire Smarter & Faster",
    description:
      "Automate your recruitment process with Smaya, the AI-powered agent that sources, screens, interviews & onboards candidates. Hire top talent faster!",
    url: "Exterview.in",
    siteName: "Exterview",
    images: [{ url: "/smaya-logo.png", width: "50", height: "50" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/smaya-logo.png" />
        <title>Smaya - AI Recruitment Agent | Hire Smarter & Faster</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
