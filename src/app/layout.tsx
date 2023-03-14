import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";

import Provider from "./provider";

export const metadata = {
  // title: 'Create Next App',
  description: "七域动漫协会是大连理工大学下属动漫交流社团，一起来玩！",
  applicationName: "七域动漫协会",
  authors: [
    {
      name: "七域动漫协会",
    },
  ],
  generator: "SevenRealms Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
