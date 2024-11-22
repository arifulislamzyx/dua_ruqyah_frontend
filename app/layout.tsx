import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import DashNav from "@/components/layout/DashNav";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Dua & Ruqyah || All Duas Collection",
  description: "All Duas Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-background h-[100dvh] overflow-hidden`}>
        <div className="h-full p-10 flex items-stretch gap-[30px]">
          <Sidebar />
          <div className="flex-1 flex flex-col space-y-6">
            <DashNav />
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </div>

        <Toaster richColors duration={10000} />
      </body>
    </html>
  );
}
