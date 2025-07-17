import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">KMD Hills</div>
            <p className="text-gray-400 mb-6">
              Welcome to KMD Hills, where luxury meets comfort. Our commitment to providing exceptional hospitality ensures an unforgettable experience for every guest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/cancel-policy" className="text-gray-400 hover:text-white transition-colors">Cancellation & Refund Policy</Link></li>
              <li><Link href="/house-rules" className="text-gray-400 hover:text-white transition-colors">Policies & House Rules</Link></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/villas" className="text-gray-400 hover:text-white transition-colors">Villas</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                Awas, Post - Sasawane, Alibag, Raigad, Maharashtra - 402201
              </p>
              <p>
                <a href="tel:+918828593140" className="text-gray-400 hover:text-white transition-colors">
                  (+91) 8828593140
                </a>
              </p>
              <p>
                <a href="mailto:Info@kmdhills.com" className="text-gray-400 hover:text-white transition-colors">
                  Info@kmdhills.com
                </a>
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Connect with Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/kmdhills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 by KMD Hills
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://wa.me/918828593140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
