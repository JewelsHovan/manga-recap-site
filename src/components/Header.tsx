"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, User, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-gray-900/90 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://wqxsmnozuhqykoqzlzyw.supabase.co/storage/v1/object/public/title_images/recap-logo.webp"
            alt="MangaRecap Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white">MangaRecap</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/recaps", label: "Recaps" },
            { href: "/manga", label: "Manga" },
            { href: "/content-creators", label: "Creators" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg transition-colors duration-200 ${
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          ) : (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="User"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
