'use client';

import { useEffect, useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-blue-900 to-blue-800 dark:from-navy-blue dark:via-gray-900 dark:to-navy-blue">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-4 md:space-y-6 animate-slideInLeft text-center md:text-left">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium border border-white/20">
                                🎬 Professional Video & Audio Production
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Frame Falcon
                            <span className="block text-blue-300">Studios</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                            Transforming visions into cinematic reality. From teledrama editing to AI-powered music production,
                            we bring your creative dreams to life with cutting-edge technology and artistic excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="btn-primary inline-flex items-center justify-center space-x-2 group w-full sm:w-auto"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>

                            <a
                                href="#portfolio"
                                className="btn-secondary inline-flex items-center justify-center space-x-2 group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-navy-blue w-full sm:w-auto"
                            >
                                <Play className="w-5 h-5" />
                                <span>View Portfolio</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
                            <div className="text-center md:text-left">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-300">150+</div>
                                <div className="text-xs sm:text-sm text-gray-300">Projects Done</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-300">50+</div>
                                <div className="text-xs sm:text-sm text-gray-300">Happy Clients</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-300">3+</div>
                                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Enhanced Visual Element */}
                    <div ref={videoRef} className="relative opacity-0">
                        <div className="relative">
                            {/* Main Visual - Professional Production Theme */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <div className="aspect-video bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                                    {/* Animated Background Pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                                    </div>

                                    {/* Grid Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10" style={{
                                        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
                                        backgroundSize: '50px 50px'
                                    }}></div>

                                    {/* Content */}
                                    <div className="text-center text-white p-8 relative z-10">
                                        {/* Camera/Video Icon Illustration */}
                                        <div className="relative mx-auto mb-6">
                                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-300">
                                                <Play className="w-16 h-16 text-white drop-shadow-lg" />
                                            </div>
                                            {/* Recording Indicator */}
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                            {/* Accent Dots */}
                                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                                            <div className="absolute top-1/2 -right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Professional Production</h3>
                                        <p className="text-blue-100 text-sm">Cinematic Quality • Expert Team • Latest Technology</p>

                                        {/* Feature Icons */}
                                        <div className="flex justify-center gap-4 mt-6">
                                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                                                <span className="text-xl">🎬</span>
                                            </div>
                                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                                                <span className="text-xl">🎵</span>
                                            </div>
                                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                                                <span className="text-xl">🎨</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full filter blur-2xl opacity-50 animate-float"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500 rounded-full filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>

                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 -left-4 w-20 h-20 border-4 border-blue-400 rounded-lg transform -rotate-12 opacity-30"></div>
                            <div className="absolute bottom-1/4 -right-4 w-16 h-16 border-4 border-cyan-400 rounded-full opacity-30"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
