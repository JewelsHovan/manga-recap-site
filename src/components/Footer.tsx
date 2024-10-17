import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-white">MangaRecap</h3>
            <p className="text-sm mb-4">Your go-to source for manga recaps and community discussions.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/recaps" className="hover:text-white transition-colors">Recaps</Link></li>
              <li><Link href="/manga" className="hover:text-white transition-colors">Manga</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/copyright" className="hover:text-white transition-colors">Copyright Notice</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 MangaRecap. All rights reserved.</p>
          <p className="mt-2">Contact: contact@mangarecap.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
