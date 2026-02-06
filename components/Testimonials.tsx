'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Indika Dharmathilaka',
        role: 'Teledrama Director',
        company: 'Independent',
        image: 'ID',
        rating: 5,
        text: 'Frame Falcon Studios transformed our teledrama with exceptional editing and color grading. Their attention to detail and creative vision exceeded our expectations. Highly recommended!',
        color: 'from-blue-500 to-blue-600',
    },
    {
        id: 2,
        name: 'Asanka',
        role: 'Marketing Director',
        company: 'AZK Media',
        image: 'AS',
        rating: 5,
        text: 'The TV commercial they produced for us was outstanding. Professional, creative, and delivered on time. Our brand visibility increased significantly after the campaign.',
        color: 'from-purple-500 to-purple-600',
    },
    {
        id: 3,
        name: 'Prasanna Kumara',
        role: 'Music Artist',
        company: 'Independent',
        image: 'NF',
        rating: 5,
        text: 'Their music video editing and AI music production services are top-notch. They brought my vision to life with stunning visuals and professional quality at an affordable price.',
        color: 'from-pink-500 to-pink-600',
    },
    {
        id: 4,
        name: 'Nishantha',
        role: 'Social Media Manager',
        company: 'MT Center',
        image: 'PJ',
        rating: 5,
        text: 'Frame Falcon created amazing social media content that boosted our engagement by 200%. Their understanding of platform-specific content is impressive.',
        color: 'from-cyan-500 to-cyan-600',
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-white dark:bg-navy-blue">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <span className="text-navy-blue dark:text-blue-500 font-semibold text-sm uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-black text-center">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied clients about their experience working with us
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="card hover:shadow-2xl"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                opacity: 0,
                                animation: 'fadeIn 0.6s ease-out forwards',
                            }}
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <Quote className="w-10 h-10 text-blue-500 opacity-50" />
                            </div>

                            {/* Rating */}
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <span className="text-white font-bold text-lg">{testimonial.image}</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <div className="text-3xl font-bold text-blue-500 mb-2">150+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Creative Concepts</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
