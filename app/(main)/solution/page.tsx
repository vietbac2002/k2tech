"use client";
import React from 'react'
import Image from "next/image";
export default function SolutionPage() {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Những công dụng và lợi ích dịch vụ chúng tôi mang lại</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Feature 1 --> */}
                        <div className="feature-card  flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-paint-brush text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center">
                                <span>Tổ chức sự kiện nhỏ, vừa, lớn nhanh chóng và hiệu quả</span>
                            </h3>
                        </div>

                        {/* <!-- Feature 2 --> */}
                        <div className="feature-card flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-mobile-alt text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center">
                                <span>Quản lý check-in khách mời chính xác, giảm thiểu sai sót</span>
                            </h3>
                        </div>

                        {/* <!-- Feature 3 --> */}
                        <div className="feature-card flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-ticket-alt text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center">Tạo trang đăng ký chuyên nghiệp, thu hút người tham dự</h3>
                        </div>

                        {/* <!-- Feature 4 --> */}
                        <div className="feature-card  flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-palette text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Tiết kiệm thời gian check-in</h3>
                        </div>

                        {/* <!-- Feature 5 --> */}
                        <div className="feature-card flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quản lý khách mời toàn diện</h3>
                        </div>

                        {/* <!-- Feature 6 --> */}
                        <div className="feature-card flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-globe text-indigo-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Nâng cao trải nghiệm sự kiện</h3>
                        </div>
                    </div>
                </div>
            </section>





            {/* <!-- Testimonials Section --> */}
            <section className="py-20 bg-indigo-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Khách hàng nói gì về chúng tôi</h2>
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
                            <p className="text-gray-600 mb-6">{"The K2Tech website builder saved us countless hours. We created a professional conference website in one afternoon that would have taken weeks with a developer."}</p>
                            <div className="flex items-center">
                                <Image width={100} height={50} loading='lazy' className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" />
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
                            <p className="text-gray-600 mb-6">{"Our ticket sales increased by 40% after switching to K2Tech. The mobile-friendly design and seamless checkout process made all the difference."}</p>
                            <div className="flex items-center">
                                <Image width={100} height={50} loading='lazy' className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" />
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
                            <p className="text-gray-600 mb-6">{"As a nonprofit, we needed an affordable solution that still looked professional. K2Tech delivered beyond our expectations for our annual fundraiser."}</p>
                            <div className="flex items-center">
                                <Image width={100} height={50} loading='lazy' className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez" />
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
                        <p className="text-xl mb-8">Join thousands of event organizers who trust K2Tech to power their events.</p>
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
