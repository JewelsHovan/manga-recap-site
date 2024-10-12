import { Button } from "@/components/ui/button";
import { Search, User, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-gray-900/75 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="MangaRecap Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">MangaRecap</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/recaps" className="hover:text-blue-400">Recaps</Link>
          <Link href="/manga" className="hover:text-blue-400">Manga</Link>
          <Link href="/community" className="hover:text-blue-400">Community</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

