import React from 'react'

export default function page() {
    return (
        <>
            <section className="gradient-bg text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
                        <p className="text-xl mb-8">Chúng tôi sẽ giúp bạn với bất cứ câu hỏi hoặc hỗ trợ bạn nếu có thể</p>
                       
                    </div>
                </div>
            </section>


            <section id="contact-htmlForm" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Liên hệ</h2>
                            <p className="text-xl text-gray-600">Điền vào biểu mẫu dưới đây và chúng tôi sẽ trả lời bạn sớm nhất có thể</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Họ và tên <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input type="text" id="name" name="name" required
                                            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none input-highlight transition"
                                            placeholder="John Smith" />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i className="fas fa-user text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input type="email" id="email" name="email" required
                                            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none input-highlight transition"
                                            placeholder="john@example.com" />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i className="fas fa-envelope text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Số điện thoại</label>
                                    <div className="relative">
                                        <input type="tel" id="phone" name="phone"
                                            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none input-highlight transition"
                                            placeholder="(123) 456-7890" />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i className="fas fa-phone text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Subject</label>
                                    <div className="relative">
                                        <select id="subject" name="subject"
                                            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none input-highlight transition appearance-none">
                                            <option value="" defaultValue={""}>Chọn một lĩnh vực</option>
                                            <option value="support">Technical Support</option>
                                            <option value="sales">Sales Inquiry</option>
                                            <option value="billing">Billing Question</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <i className="fas fa-chevron-down text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Lời nhắn của bạn <span className="text-red-500">*</span></label>
                                <textarea id="message" name="message" rows={6} required
                                    className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none input-highlight transition"
                                    placeholder="Tôi có thể giúp bạn như thế nào?"></textarea>
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" id="consent" name="consent" required
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                                <label htmlFor="consent" className="ml-2 text-gray-700">
                                    I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and <a href="#" className="text-blue-600 hover:underline">terms of service</a>
                                </label>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                                    <i className="fas fa-paper-plane mr-3"></i> Gửi tin nhắn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            <section id="contact-info" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Thông tin liên hệ của chúng tôi</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* <!-- Office Address --> */}
                        <div className="contact-card bg-white p-8 rounded-xl shadow-sm transition">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-building text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Headquarters</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-blue-600 mt-1 mr-3"></i>
                                    <p className="text-gray-600">
                                        123 Tech Park Avenue<br />
                                        Suite 500<br />
                                        San Francisco, CA 94107<br />
                                        United States
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-clock text-blue-600 mr-3"></i>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Hours:</span> Mon-Fri, 9am-5pm PST
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <a href="#map" className="inline-flex items-center text-blue-600 hover:underline">
                                        <i className="fas fa-directions mr-2"></i> Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Phone Contacts --> */}
                        <div className="contact-card bg-white p-8 rounded-xl shadow-sm transition">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-phone-alt text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Phone Support</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-headset text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">Technical Support</p>
                                        <p className="text-xl font-bold text-blue-600">+1 (800) 555-0199</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-user-tie text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">Sales & Consulting</p>
                                        <p className="text-xl font-bold text-blue-600">+1 (800) 555-0200</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-globe text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">International</p>
                                        <p className="text-xl font-bold text-blue-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <a href="tel:+18005550199" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        <i className="fas fa-phone mr-2"></i> Call Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Email Contacts --> */}
                        <div className="contact-card bg-white p-8 rounded-xl shadow-sm transition">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold">Email Contacts</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-life-ring text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">Support Team</p>
                                        <a href="mailto:support@techsupportpro.com" className="text-blue-600 hover:underline">support@techsupportpro.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-chart-line text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">Sales & Consulting</p>
                                        <a href="mailto:sales@techsupportpro.com" className="text-blue-600 hover:underline">sales@techsupportpro.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-file-invoice-dollar text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">Billing Questions</p>
                                        <a href="mailto:billing@techsupportpro.com" className="text-blue-600 hover:underline">billing@techsupportpro.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-users text-blue-600 mr-3"></i>
                                    <div>
                                        <p className="text-gray-600 font-medium">Partnerships</p>
                                        <a href="mailto:partners@techsupportpro.com" className="text-blue-600 hover:underline">partners@techsupportpro.com</a>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <a href="#contact-form" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        <i className="fas fa-envelope mr-2"></i> Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Google Maps Section --> */}
                    <div id="map" className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                        <h3 className="text-xl font-bold p-6 border-b border-gray-200 flex items-center">
                            <i className="fas fa-map-marked-alt text-blue-600 mr-3"></i>
                            Our Location
                        </h3>
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.138053261403!2d-122.41941592401008!3d37.77492997189797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1689876543210!5m2!1sen!2s"
                               allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="p-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <h4 className="font-bold mb-2">TechSupport Pro Headquarters</h4>
                                <p className="text-gray-600">123 Tech Park Avenue, Suite 500<br />San Francisco, CA 94107</p>
                            </div>
                            <a href="https://goo.gl/maps/example" target="_blank" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                                <i className="fas fa-directions mr-2"></i> Open in Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
