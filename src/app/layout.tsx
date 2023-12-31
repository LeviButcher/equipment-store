import { Box } from "lucide-react";
import "./globals.css";
import type { Metadata } from "next";
import { Asap } from "next/font/google";
import Link from "next/link";
import { NavLink } from "./nav-link";

const asap = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equipment Store",
  description: "The store of all your equipment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={asap.className}>
        <div className="grid grid-cols-[auto,1fr] h-screen">
          <SideNav />
          <div className="p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}

function SideNav() {
  return (
    <aside className="overflow-hidden p-4 w-64 h-full bg-gray-400">
      <nav className="flex flex-col flex-wrap gap-4 items-stretch text-center">
        <div>
          <Box size={48} className="inline" />
        </div>
        <Link
          className="mb-2 font-mono text-lg rounded hover:bg-blue-200"
          href="/"
        >
          EquipmentStore
        </Link>
        <NavLink href="/locations">Locations</NavLink>
        <NavLink href="/equipments">Equipments</NavLink>
        <NavLink href="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}
