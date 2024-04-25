import "~/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CasadoCanto",
  description: "Site Casa do Canto",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav(){
  return(
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Galeria</div>
      <div>Sign In</div>
    </nav>
  )
}

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
