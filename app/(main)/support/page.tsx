"use client";
const softwareQuestions = [
    "Cách cài đặt phần mềm chúng tôi",
    "Hệ thống yêu cầu những gì",
    "Cách cập nhật phiên bản mới nhất",
    "Khắc phục các lỗi phổ biến",
]

const deviceCompatibility = [
    "Danh sách các thiết bị tương thích",
    "Các bảo mật Bluetooth",
    "Cách bật tính năng kiểm tra tính năng",
    "Lỗi kết nối thiết bị",
]
const paymentIssues = [
    "Cách xác nhận thanh toán",
    "Các hợp đồng thanh toán",
    "Cách chuyển đổi tài khoản",
    "Lỗi chuyển đổi tài khoản",
]

export default function SupportPage() {
    return (
        <>
            <section className="gradient-bg text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Trung tâm trợ giúp</h1>
                        <p className="text-xl mb-8">Tìm hiểu các câu hỏi thường gặp, hướng dẫn và tài liệu cho các phần mềm chúng tôi</p>

                        <p className="mt-4">Tìm kiếm phổ biến: <a href="#" className="underline">hướng dẫn cài đặt</a>, <a href="#" className="underline">lỗi thành toán</a>, <a href="#" className="underline">thiết bị tương thích</a></p>
                    </div>
                </div>
            </section>

            {/* <!-- User Guides Section --> */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Hướng dẫn và tài liệu</h2>

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
                    <h2 className="text-3xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <i className="fas fa-laptop-code text-blue-600 mr-3"></i> Câu hỏi phần mềm
                            </h3>
                            <ul className="space-y-3">
                                {
                                    softwareQuestions.map((item, index) => (
                                        <li key={index}><a href="#" className="text-blue-600 hover:underline">{item}</a></li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <i className="fas fa-mobile-alt text-blue-600 mr-3"></i> Thiết bị tương thích
                            </h3>
                            <ul className="space-y-3">
                                {
                                    deviceCompatibility.map((item, index) => (
                                        <li key={index}><a href="#" className="text-blue-600 hover:underline">{item}</a></li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <i className="fas fa-credit-card text-blue-600 mr-3"></i> Thanh toán & Bảo mật
                            </h3>
                            <ul className="space-y-3">
                                {
                                    paymentIssues.map((item, index) => (
                                        <li key={index}><a href="#" className="text-blue-600 hover:underline">{item}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- Contact Support --> */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Liên hệ với đội ngũ của chúng tôi</h2>
                            <p className="text-xl text-gray-600">{"We're here to help you with any questions or issues"}</p>
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

                        </div>

                       
                    </div>
                </div>
            </section>
        </>
    )
}
