import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CasadoCanto",
  description: "Site Casa do Canto",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TopNav />
        {children}
        </body>
    </html>
  );
}
