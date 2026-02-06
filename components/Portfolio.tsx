'use client';

import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const portfolioItems = [
    {
        id: 1,
        title: 'Epic Teledrama Series',
        category: 'Teledrama Editing',
        description: 'Complete post-production for a 100-episode drama series with advanced color grading and sound design.',
        image: 'teledrama',
        color: 'from-purple-500 via-pink-500 to-purple-600',
        icon: '🎭',
    },
    {
        id: 2,
        title: 'Brand Commercial Campaign',
        category: 'TV Commercials',
        description: 'High-impact commercial series for leading brands with cinematic quality and compelling storytelling.',
        image: 'commercial',
        color: 'from-blue-500 via-cyan-500 to-blue-600',
        icon: '📺',
    },
    {
        id: 3,
        title: 'Chart-Topping Music Video',
        category: 'Music Video',
        description: 'Creative music video production with stunning visuals and innovative editing techniques.',
        image: 'music-video',
        color: 'from-orange-500 via-red-500 to-pink-500',
        icon: '🎵',
    },
    {
        id: 4,
        title: 'Cinematic Color Grading',
        category: 'Color Grading',
        description: 'Professional color grading services that transformed raw footage into cinematic masterpieces.',
        image: 'color-grading',
        color: 'from-green-500 via-teal-500 to-cyan-500',
        icon: '🎨',
    },
    {
        id: 5,
        title: 'Theme Song Production',
        category: 'Theme Songs',
        description: 'Original theme songs for popular teledramas with memorable melodies and professional production.',
        image: 'theme-song',
        color: 'from-indigo-500 via-purple-500 to-pink-500',
        icon: '🎤',
    },
    {
        id: 6,
        title: 'TV Programme Editing',
        category: 'TV Programme',
        description: 'Professional editing for television programmes with seamless transitions and engaging storytelling.',
        image: 'tv-programme',
        color: 'from-violet-500 via-purple-500 to-fuchsia-500',
        icon: '📡',
    },
    {
        id: 7,
        title: 'Professional Product Graphic Design',
        category: 'Graphic Design',
        description: 'Stunning product graphics and visual designs that elevate brand identity and marketing materials.',
        image: 'graphic-design',
        color: 'from-amber-500 via-orange-500 to-red-500',
        icon: '🎯',
    },
    {
        id: 8,
        title: 'Social Media Post Design',
        category: 'Social Media Design',
        description: 'Eye-catching social media post designs that capture attention and drive engagement across all platforms.',
        image: 'social-post',
        color: 'from-cyan-500 via-blue-500 to-indigo-500',
        icon: '✨',
    },
    {
        id: 9,
        title: 'Social Media Campaign',
        category: 'Social Media',
        description: 'Viral social media content that drove engagement and brand awareness across platforms.',
        image: 'social-media',
        color: 'from-pink-500 via-rose-500 to-red-500',
        icon: '📱',
    },
];

const categories = ['All', 'Teledrama Editing', 'TV Commercials', 'Music Video', 'Color Grading', 'Theme Songs', 'TV Programme', 'Graphic Design', 'Social Media Design', 'Social Media'];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fadeIn">
                    <span className="text-navy-blue dark:text-blue-500 font-semibold text-sm uppercase tracking-wider">
                        Our Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-white">
                        Featured <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our diverse range of projects showcasing our expertise in video and audio production
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer animate-scaleIn"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="card overflow-hidden p-0 h-full">
                                {/* Enhanced Image/Video Thumbnail with Visual Elements */}
                                <div className="relative aspect-video overflow-hidden bg-gray-900">
                                    {/* Base Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-500 ${hoveredItem === item.id ? 'scale-110' : 'scale-100'
                                        }`}>
                                        {/* Pattern Overlay */}
                                        <div className="absolute inset-0 opacity-10" style={{
                                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}></div>

                                        {/* Animated Background Orbs */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full filter blur-3xl animate-pulse"></div>
                                            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                                        </div>

                                        {/* Project-Specific Visual Elements */}
                                        <div className="absolute inset-0 flex items-center justify-center p-6">
                                            {/* Film Strip for Video Projects */}
                                            {(item.category === 'Teledrama Editing' || item.category === 'TV Commercials' || item.category === 'Music Video' || item.category === 'TV Programme') && (
                                                <div className="absolute inset-0 opacity-20">
                                                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/30 flex justify-around items-center px-2">
                                                        {[...Array(8)].map((_, i) => (
                                                            <div key={i} className="w-4 h-6 bg-white/40 rounded-sm"></div>
                                                        ))}
                                                    </div>
                                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/30 flex justify-around items-center px-2">
                                                        {[...Array(8)].map((_, i) => (
                                                            <div key={i} className="w-4 h-6 bg-white/40 rounded-sm"></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Color Palette for Color Grading */}
                                            {item.category === 'Color Grading' && (
                                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                                    <div className="grid grid-cols-4 gap-2">
                                                        <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-green-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-yellow-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-purple-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-pink-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-cyan-500 rounded-lg"></div>
                                                        <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Waveform for Music/Audio */}
                                            {(item.category === 'Theme Songs' || item.category === 'Music Video') && (
                                                <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-around px-4 opacity-30">
                                                    {[...Array(20)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-1 bg-white rounded-full"
                                                            style={{ height: `${Math.random() * 100}%` }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Design Grid for Graphic Design */}
                                            {item.category === 'Graphic Design' && (
                                                <div className="absolute inset-0 opacity-20" style={{
                                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                                                    backgroundSize: '30px 30px'
                                                }}></div>
                                            )}

                                            {/* Social Media Icons */}
                                            {item.category === 'Social Media' && (
                                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div className="w-10 h-10 bg-white/40 rounded-lg"></div>
                                                        <div className="w-10 h-10 bg-white/40 rounded-full"></div>
                                                        <div className="w-10 h-10 bg-white/40 rounded-lg"></div>
                                                        <div className="w-10 h-10 bg-white/40 rounded-full"></div>
                                                        <div className="w-10 h-10 bg-white/40 rounded-lg"></div>
                                                        <div className="w-10 h-10 bg-white/40 rounded-full"></div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Social Media Post Design - Post Frames */}
                                            {item.category === 'Social Media Design' && (
                                                <div className="absolute inset-0 flex items-center justify-center opacity-25 p-4">
                                                    <div className="grid grid-cols-2 gap-3 w-full">
                                                        {/* Post Frame 1 */}
                                                        <div className="bg-white/30 rounded-lg p-2 backdrop-blur-sm border border-white/40">
                                                            <div className="w-full h-16 bg-white/40 rounded"></div>
                                                            <div className="flex gap-1 mt-2">
                                                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                            </div>
                                                        </div>
                                                        {/* Post Frame 2 */}
                                                        <div className="bg-white/30 rounded-lg p-2 backdrop-blur-sm border border-white/40">
                                                            <div className="w-full h-16 bg-white/40 rounded"></div>
                                                            <div className="flex gap-1 mt-2">
                                                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Sparkles */}
                                                    <div className="absolute top-4 right-4 text-2xl animate-pulse">✨</div>
                                                    <div className="absolute bottom-4 left-4 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
                                                </div>
                                            )}

                                            {/* Main Icon and Content */}
                                            <div className="text-center text-white relative z-10">
                                                {/* Large Icon */}
                                                <div className="text-6xl mb-4 transform transition-transform duration-300 hover:scale-110 drop-shadow-lg">
                                                    {item.icon}
                                                </div>

                                                {/* Play Button */}
                                                <div className={`w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 ${hoveredItem === item.id ? 'scale-110 bg-white/30' : 'scale-100'
                                                    }`}>
                                                    <Play className="w-8 h-8 fill-white" />
                                                </div>
                                                <p className="text-sm font-medium opacity-90">{item.category}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-navy-blue/95 to-blue-900/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="text-center text-white p-6">
                                            <ExternalLink className="w-10 h-10 mx-auto mb-3 animate-pulse" />
                                            <p className="text-lg font-semibold">View Project Details</p>
                                            <p className="text-xs text-blue-200 mt-2">Click to explore</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="text-sm text-blue-500 font-semibold mb-2">
                                        {item.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Want to see more of our work? Get in touch to discuss your project.
                    </p>
                    <a
                        href="#contact"
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <span>Start Your Project</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
