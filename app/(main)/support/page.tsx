"use client";
export default function SupportPage() {
    return (
        <>

            <section className="gradient-bg text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">TechSupport Pro Help Center</h1>
                        <p className="text-xl mb-8">Find answers, guides, and resources for our software solutions</p>
                        <div className="relative max-w-2xl mx-auto">
                            {/* <input type="text" placeholder="Search our knowledge base..." className="w-full px-6 py-4 rounded-lg text-gray-800 focus:outline-none search-box"> */}
                            {/* <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"/>
                                    <i className="fas fa-search"></i>
                                </button> */}

                        </div>
                        <p className="mt-4">Popular searches: <a href="#" className="underline">installation guide</a>, <a href="#" className="underline">payment issues</a>, <a href="#" className="underline">device compatibility</a></p>
                    </div>
                </div>
            </section>

            {/* <!-- User Guides Section --> */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">User Guides & Resources</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- PDF Guide 1 --> */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-file-pdf text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Getting Started Guide</h3>
                            </div>
                            <p className="text-gray-600 mb-4">Complete step-by-step manual for setting up and using TechSupport Pro software.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">PDF • 2.4 MB</span>
                                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                    <i className="fas fa-download mr-2"></i> Download
                                </a>
                            </div>
                        </div>

                        {/* <!-- PDF Guide 2 --> */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-file-pdf text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Advanced Features Manual</h3>
                            </div>
                            <p className="text-gray-600 mb-4">Learn about all the advanced capabilities and customization options available.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">PDF • 3.1 MB</span>
                                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                    <i className="fas fa-download mr-2"></i> Download
                                </a>
                            </div>
                        </div>

                        {/* <!-- Video Guide --> */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-video text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Quick Start Video Tutorial</h3>
                            </div>
                            <div className="video-container mb-4 rounded-lg overflow-hidden">
                                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                                <i className="fas fa-play-circle mr-2"></i> Watch more tutorials
                            </a>
                        </div>

                        {/* <!-- PDF Guide 3 --> */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-file-pdf text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Troubleshooting Handbook</h3>
                            </div>
                            <p className="text-gray-600 mb-4">Comprehensive guide to diagnosing and fixing common issues with our software.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">PDF • 1.8 MB</span>
                                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                    <i className="fas fa-download mr-2"></i> Download
                                </a>
                            </div>
                        </div>

                        {/* <!-- PDF Guide 4 --> */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-file-pdf text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Device Compatibility List</h3>
                            </div>
                            <p className="text-gray-600 mb-4">Detailed specifications of all supported devices and system requirements.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">PDF • 1.2 MB</span>
                                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                    <i className="fas fa-download mr-2"></i> Download
                                </a>
                            </div>
                        </div>

                        {/* <!-- Video Guide 2 --> */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-video text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Advanced Configuration Demo</h3>
                            </div>
                            <div className="video-container mb-4 rounded-lg overflow-hidden">
                                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                                <i className="fas fa-play-circle mr-2"></i> Watch more demos
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition">View All Resources</a>
                    </div>
                </div>
            </section>

            {/* <!-- FAQ Section --> */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <i className="fas fa-laptop-code text-blue-600 mr-3"></i> Software Questions
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-blue-600 hover:underline">How do I install the software?</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">What are the system requirements?</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">How to update to the latest version?</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Troubleshooting common errors</a></li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <i className="fas fa-mobile-alt text-blue-600 mr-3"></i> Device Compatibility
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-blue-600 hover:underline">List of supported devices</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Bluetooth connectivity issues</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Optimizing for different OS versions</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Driver installation guide</a></li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <i className="fas fa-credit-card text-blue-600 mr-3"></i> Payment & Licensing
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-blue-600 hover:underline">Accepted payment methods</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Subscription cancellation</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">License transfer between devices</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Refund policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {/* <!-- FAQ Item 1 --> */}
                        <div className="faq-item bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                            <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                                <span className="text-lg font-medium">What operating systems are supported?</span>
                                <i className="fas fa-chevron-down text-blue-600 transition-transform"></i>
                            </button>
                            <div className="faq-answer px-6 pb-6">
                                <p className="text-gray-600">Our software currently supports Windows 10/11 (64-bit), macOS 10.15 and later, and most modern Linux distributions. For mobile devices, we support Android 9.0+ and iOS 14+. Please check our Device Compatibility List for specific version requirements.</p>
                            </div>
                        </div>

                        {/* <!-- FAQ Item 2 --> */}
                        <div className="faq-item bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                            <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                                <span className="text-lg font-medium">How do I renew my subscription?</span>
                                <i className="fas fa-chevron-down text-blue-600 transition-transform"></i>
                            </button>
                            <div className="faq-answer px-6 pb-6">
                                <p className="text-gray-600">Subscriptions automatically renew at the end of each billing period. You can manage your subscription from your account settings. To renew manually, log in to your account, go to Billing, and select "Renew Subscription." We accept all major credit cards and PayPal.</p>
                            </div>
                        </div>

                        {/* <!-- FAQ Item 3 --> */}
                        <div className="faq-item bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                            <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                                <span className="text-lg font-medium">Why is my device not connecting?</span>
                                <i className="fas fa-chevron-down text-blue-600 transition-transform"></i>
                            </button>
                            <div className="faq-answer px-6 pb-6">
                                <p className="text-gray-600">Connection issues can be caused by several factors: ensure Bluetooth is enabled on both devices, check that your device is charged, verify compatibility with our supported devices list, and try restarting both devices. If problems persist, consult our Troubleshooting Handbook or contact support.</p>
                            </div>
                        </div>

                        {/* <!-- FAQ Item 4 --> */}
                        <div className="faq-item bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                            <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                                <span className="text-lg font-medium">How do I transfer my license to a new computer?</span>
                                <i className="fas fa-chevron-down text-blue-600 transition-transform"></i>
                            </button>
                            <div className="faq-answer px-6 pb-6">
                                <p className="text-gray-600">To transfer your license: 1) Deactivate the software on your old computer from the Help menu, 2) Uninstall the software, 3) Install on your new computer, 4) Log in with your account credentials. You can transfer licenses up to 3 times per year. Contact support if you need additional transfers.</p>
                            </div>
                        </div>

                        {/* <!-- FAQ Item 5 --> */}
                        <div className="faq-item bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                            <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                                <span className="text-lg font-medium">What's your refund policy?</span>
                                <i className="fas fa-chevron-down text-blue-600 transition-transform"></i>
                            </button>
                            <div className="faq-answer px-6 pb-6">
                                <p className="text-gray-600">We offer a 30-day money-back guarantee for all purchases. To request a refund, contact our support team with your order details. Refunds are processed within 5-7 business days. After 30 days, we can prorate refunds for annual subscriptions on a case-by-case basis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">See More FAQs</a>
                    </div>
                </div>
            </section>

            {/* <!-- Contact Support --> */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Contact Our Support Team</h2>
                            <p className="text-xl text-gray-600">We're here to help you with any questions or issues</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-phone-alt text-blue-600 text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold">Phone Support</h3>
                                </div>
                                <p className="text-gray-600 mb-2">Available 24/7 for urgent technical issues</p>
                                <p className="text-2xl font-bold text-blue-600 mb-4">+1 (800) 555-0199</p>
                                <p className="text-sm text-gray-500 mb-4">International: +1 (555) 123-4567</p>
                                <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Call Now</a>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-envelope text-blue-600 text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold">Email Support</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Get detailed assistance from our technical team</p>
                                <p className="text-lg font-medium text-blue-600 mb-4">support@techsupportpro.com</p>
                                <p className="text-sm text-gray-500 mb-4">Average response time: 2-4 hours</p>
                                <a href="mailto:support@techsupportpro.com" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Email Us</a>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-comment-dots text-blue-600 text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold">Live Chat</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Instant help from our support agents</p>
                                <p className="text-sm text-gray-500 mb-4">Available Monday-Friday, 8am-8pm EST</p>
                                <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Start Chat</a>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-ticket-alt text-blue-600 text-xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold">Support Ticket</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Submit detailed technical issues</p>
                                <p className="text-sm text-gray-500 mb-4">For complex issues requiring investigation</p>
                                <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Create Ticket</a>
                            </div>
                        </div>

                        <div className="mt-8 bg-white border border-blue-100 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Community Support</h3>
                            <p className="text-gray-600 mb-4">Join our user community to get help from other users and our team members.</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                    <i className="fab fa-discord mr-2"></i> Discord
                                </a>
                                <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                    <i className="fab fa-facebook mr-2"></i> Facebook Group
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
