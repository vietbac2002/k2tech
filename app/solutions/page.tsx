import React from 'react'

export default function SolutionPage() {
    return (
        <>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Your Event Website</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">From registration to promotion, we've got you covered</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Feature 1 --> */}
                        <div className="feature-card bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-paint-brush text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Drag-and-Drop Builder</h3>
                            <p className="text-gray-600">Easily create beautiful event websites with our intuitive drag-and-drop editor. No coding skills required.</p>
                        </div>

                        {/* <!-- Feature 2 --> */}
                        <div className="feature-card bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-mobile-alt text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mobile-Optimized</h3>
                            <p className="text-gray-600">Your event website will look great on any device, with responsive designs that adapt to all screen sizes.</p>
                        </div>

                        {/* <!-- Feature 3 --> */}
                        <div className="feature-card bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-ticket-alt text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Integrated Registration</h3>
                            <p className="text-gray-600">Seamless ticket sales and attendee registration directly from your event website.</p>
                        </div>

                        {/* <!-- Feature 4 --> */}
                        <div className="feature-card bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-palette text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Custom Branding</h3>
                            <p className="text-gray-600">Match your event website to your brand with custom colors, fonts, and logos.</p>
                        </div>

                        {/* <!-- Feature 5 --> */}
                        <div className="feature-card bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Built-in Analytics</h3>
                            <p className="text-gray-600">Track visitor behavior, conversion rates, and other key metrics to optimize your event marketing.</p>
                        </div>

                        {/* <!-- Feature 6 --> */}
                        <div className="feature-card bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-globe text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Multilingual Support</h3>
                            <p className="text-gray-600">Create event websites in multiple languages to reach a global audience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Templates Section --> */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stunning Templates for Every Event Type</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from professionally designed templates that convert</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* <!-- Template 1 --> */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <img src="https://via.placeholder.com/400x250?text=Conference" alt="Conference Template" className="w-full" />
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Conference</h3>
                                <p className="text-gray-600 text-sm">Professional design for business events</p>
                            </div>
                        </div>

                        {/* <!-- Template 2 --> */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <img src="https://via.placeholder.com/400x250?text=Music+Festival" alt="Music Festival Template" className="w-full" />
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Music Festival</h3>
                                <p className="text-gray-600 text-sm">Vibrant design for entertainment events</p>
                            </div>
                        </div>

                        {/* <!-- Template 3 --> */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <img src="https://via.placeholder.com/400x250?text=Wedding" alt="Wedding Template" className="w-full" />
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Wedding</h3>
                                <p className="text-gray-600 text-sm">Elegant design for personal celebrations</p>
                            </div>
                        </div>

                        {/* <!-- Template 4 --> */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <img src="https://via.placeholder.com/400x250?text=Charity" alt="Charity Template" className="w-full" />
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Charity</h3>
                                <p className="text-gray-600 text-sm">Compassionate design for fundraisers</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition">View All Templates</a>
                    </div>
                </div>
            </section>

            {/* <!-- How It Works Section --> */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create your event website in just a few simple steps</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <div className="space-y-8">
                                {/* <!-- Step 1 --> */}
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">1</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Choose Your Template</h3>
                                        <p className="text-gray-600">Select from our collection of professionally designed templates tailored for different event types.</p>
                                    </div>
                                </div>

                                {/* <!-- Step 2 --> */}
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">2</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Customize Your Design</h3>
                                        <p className="text-gray-600">Use our drag-and-drop editor to personalize colors, fonts, images, and content to match your brand.</p>
                                    </div>
                                </div>

                                {/* <!-- Step 3 --> */}
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">3</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Add Event Details</h3>
                                        <p className="text-gray-600">Input your event information, dates, location, and any other relevant details for attendees.</p>
                                    </div>
                                </div>

                                {/* <!-- Step 4 --> */}
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">4</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Publish & Share</h3>
                                        <p className="text-gray-600">Go live with one click and share your event website via email, social media, and other channels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="https://via.placeholder.com/600x400?text=Website+Builder+Interface" alt="Website Builder Interface" className="w-full rounded-xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Testimonials Section --> */}
            <section className="py-20 bg-indigo-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from event organizers like you</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Testimonial 1 --> */}
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">"The EventX website builder saved us countless hours. We created a professional conference website in one afternoon that would have taken weeks with a developer."</p>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" />
                                <div>
                                    <h4 className="font-bold">Sarah Johnson</h4>
                                    <p className="text-gray-500 text-sm">Event Director, TechConf 2023</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Testimonial 2 --> */}
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">"Our ticket sales increased by 40% after switching to EventX. The mobile-friendly design and seamless checkout process made all the difference."</p>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" />
                                <div>
                                    <h4 className="font-bold">Michael Chen</h4>
                                    <p className="text-gray-500 text-sm">Marketing Manager, MusicFest Inc.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Testimonial 3 --> */}
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">"As a nonprofit, we needed an affordable solution that still looked professional. EventX delivered beyond our expectations for our annual fundraiser."</p>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez" />
                                <div>
                                    <h4 className="font-bold">Emily Rodriguez</h4>
                                    <p className="text-gray-500 text-sm">Director, Hope Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- CTA Section --> */}
            <section className="gradient-bg text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Event Website?</h2>
                        <p className="text-xl mb-8">Join thousands of event organizers who trust EventX to power their events.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition">Start Free Trial</a>
                            <a href="#" className="px-8 py-4 bg-transparent border-2 border-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition">Schedule a Demo</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
