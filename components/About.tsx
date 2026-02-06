'use client';

import { Sparkles, Users, Target, Zap } from 'lucide-react';

export default function About() {
    const features = [
        {
            icon: Sparkles,
            title: 'Premium Quality',
            description: 'Recognized excellence in video and audio production with a commitment to premium quality and client satisfaction.',
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Talented professionals with years of experience in film, television, and music production.',
        },
        {
            icon: Target,
            title: 'Client-Focused',
            description: 'Your vision is our priority. We work closely with you to exceed expectations every time.',
        },
        {
            icon: Zap,
            title: 'Cutting-Edge Tech',
            description: 'Latest equipment and AI-powered tools for efficient, high-quality production workflows.',
        },
    ];

    return (
        <section id="about" className="section-padding bg-white dark:bg-navy-blue">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    {/* Left Content */}
                    <div>
                        <span className="text-navy-blue dark:text-blue-500 font-semibold text-sm uppercase tracking-wider">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-blue">
                            Crafting Stories Through <span className="text-gradient">Visual Excellence</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                Frame Falcon Studios is a premier video and audio production company dedicated to bringing creative visions to life.
                                With over a decade of experience, we've established ourselves as industry leaders in teledrama editing, commercial
                                production, and innovative music creation.
                            </p>
                            <p>
                                Our team combines traditional filmmaking expertise with cutting-edge AI technology to deliver exceptional results.
                                From color grading that sets the perfect mood to AI-powered music production that's both affordable and professional,
                                we're committed to excellence in every frame.
                            </p>
                            <p>
                                We believe in the power of storytelling through visual media. Whether it's a compelling TV commercial, an emotional
                                teledrama, or a viral social media campaign, we approach each project with creativity, precision, and passion.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                            </div>
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">150+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                            </div>
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                            </div>
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">100+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Creative Concepts</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Features */}
                    <div className="space-y-6 animate-slideInRight">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="card flex items-start space-x-4 hover:shadow-xl"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CTA */}
                        <div className="pt-4">
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
                </div>
            </div>
        </section>
    );
}
