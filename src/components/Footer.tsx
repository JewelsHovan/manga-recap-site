import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link href="/recaps" className="hover:text-blue-400">Recaps</Link>
              </li>
              <li>
                <Link href="/manga" className="hover:text-blue-400">Manga</Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-blue-400">Community</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: contact@mangarecap.com</p>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                {/* SVG Icon */}
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                {/* SVG Icon */}
              </Button>
              <Button variant="ghost" size="icon" aria-label="Facebook">
                {/* SVG Icon */}
              </Button>
              <Button variant="ghost" size="icon" aria-label="YouTube">
                {/* SVG Icon */}
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-blue-400">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/copyright" className="hover:text-blue-400">Copyright Notice</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 MangaRecap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;