'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-navy-blue/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
      style={{
        backgroundColor: scrolled
          ? isDark
            ? 'rgba(10, 22, 40, 0.9)'
            : 'rgba(255, 255, 255, 0.9)'
          : 'transparent',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden ${scrolled ? 'bg-white dark:bg-gray-800' : 'bg-white/90 backdrop-blur-sm'}`}>
              <img
                src="/falcon-logo.png"
                alt="Frame Falcon Studios Logo"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // Fallback to gradient with FF text if image not found
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.className = 'w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105';
                    parent.innerHTML = '<span class="text-white font-bold text-xl">FF</span>';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}>
                Frame Falcon
              </span>
              <span className={`text-xs ${scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-300'}`}>
                Studios
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 relative group hover:text-blue-500 dark:hover:text-blue-400 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                  }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${scrolled
                ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white'
                }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className={`w-5 h-5 ${scrolled ? 'text-yellow-500' : 'text-yellow-300'}`} />
              ) : (
                <Moon className={`w-5 h-5 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled
                ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white'
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-white' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-3 bg-white dark:bg-navy-blue rounded-xl shadow-xl mt-2 p-4 border border-gray-100 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
