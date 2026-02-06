'use client';

import { Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Contact', href: '#contact' },
        ],
        services: [
            { name: 'Teledrama Editing', href: '#services' },
            { name: 'TV Commercials', href: '#services' },
            { name: 'Music Videos', href: '#services' },
            { name: 'Color Grading', href: '#services' },
        ],
        support: [
            { name: 'FAQ', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Support', href: '#contact' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-600' },
    ];

    return (
        <footer className="bg-navy-blue dark:bg-gray-950 text-white">
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/94717342424"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group animate-pulse"
                aria-label="Contact us on WhatsApp"
                style={{ animationDuration: '2s' }}
            >
                <MessageCircle className="w-8 h-8 text-white fill-white" strokeWidth={2} />
                <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    Chat with us on WhatsApp
                </span>
                {/* Ping animation ring */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
            </a>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white dark:bg-gray-700">
                                <img
                                    src="/falcon-logo.png"
                                    alt="Frame Falcon Studios Logo"
                                    className="w-full h-full object-contain p-1"
                                    onError={(e) => {
                                        // Fallback to gradient with FF text if image not found
                                        e.currentTarget.style.display = 'none';
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            parent.className = 'w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center';
                                            parent.innerHTML = '<span class="text-white font-bold text-lg">FF</span>';
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl">Frame Falcon</span>
                                <span className="text-xs text-gray-400">Studios</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Professional video and audio production services. Transforming creative visions into cinematic reality with cutting-edge technology and artistic excellence.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Frame Falcon Studios. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
