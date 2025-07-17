'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVillasDropdownOpen, setIsVillasDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { 
      href: '/villas', 
      label: 'Villas on Rent', 
      hasDropdown: true,
      dropdownItems: [
        { href: '/villas/cassia', label: 'Cassia Villa' },
        { href: '/villas/magnolia', label: 'Magnolia Villa' }
      ]
    },
    { href: '/contact', label: 'Contact' }
  ];

  const handleEnquireNow = () => {
    // This will trigger the enquire popup (to be implemented later)
    console.log('Open enquire popup');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              KMD Hills
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsVillasDropdownOpen(true)}
                    onMouseLeave={() => setIsVillasDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`text-gray-700 hover:text-blue-600 transition-colors flex items-center ${
                        pathname === link.href ? 'text-blue-600 font-medium' : ''
                      }`}
                    >
                      {link.label}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {isVillasDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                              pathname === item.href ? 'text-blue-600 bg-blue-50' : ''
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-gray-700 hover:text-blue-600 transition-colors ${
                      pathname === link.href ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleEnquireNow}
              className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              Enquire Now
            </button>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-gray-700 hover:text-blue-600 transition-colors block ${
                      pathname === link.href ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`text-gray-600 hover:text-blue-600 transition-colors block text-sm ${
                            pathname === item.href ? 'text-blue-600 font-medium' : ''
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button
                  onClick={handleEnquireNow}
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium block w-full text-left"
                >
                  Enquire Now
                </button>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium inline-block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
