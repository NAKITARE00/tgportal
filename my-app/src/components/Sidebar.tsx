"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { name: "Stations", href: "/stations" },
  { name: "Gadgets", href: "/gadgets" },
  { name: "Issues", href: "/issues" },
  { name: "SpareParts", href: "/spareparts" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-6">
      <nav className="space-y-4 mt-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-md transition ${
              pathname.startsWith(link.href) // Changed to startsWith
                ? "bg-gray-700 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
