"use client";
import React, { useEffect, useState } from 'react'

export default function BlogPage() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const { data } = await response.json();
                setArticles(data);
            } catch (error) {
                console.log(error);
            }
        }
        getArticles();
    }, [])
    console.log(articles);
    
    return (
        <>
            {/* // <!-- Hero Section --> */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">EventX Blog</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Insights, tips, and best practices for event professionals
                        </p>
                    </div>
                </div>

            </div>



            {/* <!-- Main Content --> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* <!-- Featured Post --> */}
                    <div className="md:w-full">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Featured post" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>Event Planning</span>
                                    <span className="mx-2">•</span>
                                    <span>May 15, 2023</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    The Ultimate Guide to Virtual Event Success in 2023
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Discover the latest trends and strategies to make your virtual events stand out this year...
                                </p>
                                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">Read more →</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar --> */}

                </div>




                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kiến thức cơ bản</h2>
                            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create, manage, and grow your events in one place.</p> */}
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="feature-icon bg-indigo-100 text-indigo-600">
                                    <i className="fas fa-ticket-alt text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Ticketing & Registration</h3>
                                <p className="text-gray-600">Sell tickets online with multiple ticket types, discounts, and promo codes. Manage attendees with ease.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="feature-icon bg-purple-100 text-purple-600">
                                    <i className="fas fa-chart-line text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Check-in</h3>
                                <p className="text-gray-600">Get real-time insights into ticket sales, attendee demographics, and event performance metrics.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="feature-icon bg-blue-100 text-blue-600">
                                    <i className="fas fa-envelope-open-text text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Attendee Management</h3>
                                <p className="text-gray-600">Send targeted email campaigns to promote your event and keep attendees engaged.</p>
                            </div>


                        </div>
                    </div>
                </section>

                {/* <!-- Recent Posts Grid --> */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Post 1 --> */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Post image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>Event Marketing</span>
                                    <span className="mx-2">•</span>
                                    <span>May 10, 2023</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    How to Promote Your Event on Social Media
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Effective strategies to boost your event's visibility across all major platforms...
                                </p>
                                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">Read more →</a>
                            </div>
                        </div>

                        {/* <!-- Post 2 --> */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Post image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>Case Study</span>
                                    <span className="mx-2">•</span>
                                    <span>April 28, 2023</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    How Company X Increased Attendance by 300%
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    A deep dive into the strategies that transformed their event marketing...
                                </p>
                                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">Read more →</a>
                            </div>
                        </div>

                        {/* <!-- Post 3 --> */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Post image" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>Hybrid Events</span>
                                    <span className="mx-2">•</span>
                                    <span>April 15, 2023</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    The Future of Hybrid Events: What to Expect
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Emerging trends and technologies shaping the hybrid event landscape...
                                </p>
                                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">Read more →</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Newsletter --> */}
                <div className="mt-16 bg-indigo-50 rounded-lg p-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to our newsletter</h2>
                        <p className="text-gray-600 mb-6">Get the latest event trends and tips delivered to your inbox</p>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
