'use client';

import { Film, Tv, Music, Palette, Mic, Sparkles, Video, Share2 } from 'lucide-react';

const services = [
    {
        icon: Film,
        title: 'Teledrama Editing',
        description: 'Professional editing services for teledramas with cinematic quality and storytelling excellence.',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: Tv,
        title: 'TV Commercials',
        description: 'Create compelling TV commercials that captivate audiences and drive results for your brand.',
        color: 'from-blue-600 to-indigo-600',
    },
    {
        icon: Video,
        title: 'Music Video Editing',
        description: 'Transform your music into visual masterpieces with creative editing and stunning effects.',
        color: 'from-indigo-500 to-purple-600',
    },
    {
        icon: Palette,
        title: 'Color Grading',
        description: 'Professional color grading to enhance mood, atmosphere, and visual storytelling.',
        color: 'from-purple-500 to-pink-600',
    },
    {
        icon: Mic,
        title: 'Theme Song Production',
        description: 'Create memorable teledrama theme songs that resonate with your audience.',
        color: 'from-pink-500 to-red-600',
    },
    {
        icon: Sparkles,
        title: 'AI Music Production',
        description: 'Affordable, cutting-edge AI-powered music production for modern content creators.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Play,
        title: 'Intro Making',
        description: 'Eye-catching intros that set the perfect tone for your videos and productions.',
        color: 'from-cyan-500 to-teal-500',
    },
    {
        icon: Share2,
        title: 'Social Media Content',
        description: 'Engaging videos and posts optimized for social media platforms to boost your presence.',
        color: 'from-teal-500 to-green-500',
    },
];

function Play({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

export default function Services() {
    return (
        <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <span className="text-navy-blue dark:text-blue-500 font-semibold text-sm uppercase tracking-wider">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-white">
                        What We <span className="text-gradient">Offer</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive video and audio production services tailored to bring your creative vision to life
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="card group cursor-pointer hover:shadow-2xl"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: 0,
                                    animation: 'fadeIn 0.6s ease-out forwards',
                                }}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover Effect */}
                                <div className="mt-4 flex items-center text-navy-blue dark:text-blue-400 font-medium transition-colors duration-300">
                                    <span className="text-sm">Learn More</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-md">
                            Let's discuss how we can bring your creative vision to life with our professional services.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
