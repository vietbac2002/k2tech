import React from 'react'

export default function PricePage() {
    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto px-4">                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Simple, Transparent Pricing</h1>
                        <p className="text-xl md:text-2xl mb-8">Choose the perfect plan for your event needs. No hidden fees, cancel anytime.</p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* <!-- Free Plan --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Free</h3>
                                <p className="text-gray-600 mb-4">Perfect for small events and getting started</p>
                                <div className="text-4xl font-bold mb-2">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
                                <p className="text-gray-500 text-sm">Free forever</p>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 mb-8">Get Started</a>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Up to 100 attendees</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Basic ticketing</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Email support</span>
                                </li>
                                <li className="flex items-start text-gray-400">
                                    <i className="fas fa-times mt-1 mr-2"></i>
                                    <span>No analytics dashboard</span>
                                </li>
                                <li className="flex items-start text-gray-400">
                                    <i className="fas fa-times mt-1 mr-2"></i>
                                    <span>No custom branding</span>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Pro Plan (Popular) --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300 popular-plan relative">
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                POPULAR
                            </div>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Pro</h3>
                                <p className="text-gray-600 mb-4">For growing events and businesses</p>
                                <div className="text-4xl font-bold mb-2">$29<span className="text-lg font-normal text-gray-500">/month</span></div>
                                <p className="text-gray-500 text-sm">Billed annually at $348</p>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 mb-8">Start Free Trial</a>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Up to 1,000 attendees</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Advanced ticketing</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Priority email support</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Basic analytics</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Custom branding</span>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Enterprise Plan --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                                <p className="text-gray-600 mb-4">For large events and organizations</p>
                                <div className="text-4xl font-bold mb-2">$99<span className="text-lg font-normal text-gray-500">/month</span></div>
                                <p className="text-gray-500 text-sm">Billed annually at $1,188</p>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 mb-8">Contact Sales</a>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Unlimited attendees</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Premium ticketing</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>24/7 phone support</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>White-label options</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Feature Comparison --> */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Features</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how our plans stack up against each other</p>
                    </div>

                    <div className="overflow-x-auto mx-20">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 text-left font-medium">Feature</th>
                                    <th className="py-4 text-center font-medium">Free</th>
                                    <th className="py-4 text-center font-medium">Pro</th>
                                    <th className="py-4 text-center font-medium">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Attendee Limit</td>
                                    <td className="py-4 text-center">100</td>
                                    <td className="py-4 text-center">1,000</td>
                                    <td className="py-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Ticket Types</td>
                                    <td className="py-4 text-center">1</td>
                                    <td className="py-4 text-center">5</td>
                                    <td className="py-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Custom Branding</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Analytics Dashboard</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center">Basic</td>
                                    <td className="py-4 text-center">Advanced</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Check-in App</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Email Support</td>
                                    <td className="py-4 text-center">Standard</td>
                                    <td className="py-4 text-center">Priority</td>
                                    <td className="py-4 text-center">24/7</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Phone Support</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">API Access</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center">Limited</td>
                                    <td className="py-4 text-center">Full</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
