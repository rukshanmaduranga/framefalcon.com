'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                });

                setTimeout(() => {
                    setSubmitStatus('idle');
                }, 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => {
                    setSubmitStatus('idle');
                }, 5000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        'Teledrama Editing',
        'TV Commercials',
        'Music Video Editing',
        'Color Grading',
        'Theme Song Production',
        'AI Music Production',
        'Intro Making',
        'Social Media Content',
    ];

    return (
        <section id="contact" className="section-padding bg-white dark:bg-navy-blue">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <span className="text-navy-blue dark:text-blue-500 font-semibold text-sm uppercase tracking-wider">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-black">
                        Let's Create <span className="text-gradient">Together</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8 animate-slideInLeft">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Reach out to us through any of these channels. We're here to help bring your vision to life.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            <div className="card flex items-start space-x-4 hover:shadow-xl">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black dark:text-white mb-1">Email</h4>
                                    <a href="mailto:hello@framefalcon.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                        hello@framefalcon.com
                                    </a>
                                </div>
                            </div>

                            <div className="card flex items-start space-x-4 hover:shadow-xl">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black dark:text-white mb-1">Phone</h4>
                                    <a href="tel:+94123456789" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                        +94 12 345 6789
                                    </a>
                                </div>
                            </div>

                            <div className="card flex items-start space-x-4 hover:shadow-xl">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black dark:text-white mb-1">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Colombo, Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                            <h4 className="font-semibold mb-4 text-lg">Business Hours</h4>
                            <div className="space-y-2 text-blue-100">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-white">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slideInRight">
                        <form onSubmit={handleSubmit} className="card space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-black dark:text-white mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-black dark:text-white mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-black dark:text-white mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="+94 12 345 6789"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-black dark:text-white mb-2">
                                    Service Interested In *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-black dark:text-white mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200">
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
