import React from 'react'


const basicFeatures = [
    "Hỗ trợ nhập dữ liệu khách mời từ file Excel",
    "Check-in nhanh chóng bằng mã QR",
    "Email support",
]
const advancedFeatures = [
    "Số người tham dự từ 100 đến 500",
    "Hỗ trợ nhập dữ liệu khách mời từ file Excel",
    "Check-in nhanh chóng bằng mã QR",
    "Email support",
]
const professionalFeatures = [
    "Số người tham dự trên 500",
    "Hỗ trợ nhập dữ liệu khách mời từ file Excel",
    "Check-in nhanh chóng bằng mã QR",
    "Email support",
]

export default function PricePage() {
    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto px-4">                    <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mức giá linh hoạt phù hợp với nhu cầu</h1>
                    <p className="text-xl md:text-2xl mb-8">Chọn gói hoàn hảo cho nhu cầu sự kiện của bạn. Không có phí ẩn, hủy bất cứ lúc nào</p>
                </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* <!-- Free Plan --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">K2-Checkin Basic</h3>
                                <p className="text-gray-600 mb-4">Dành cho sự kiện nhỏ dưới 100 người</p>
                                <div className="text-4xl font-bold mb-2">1.000.000 VNĐ</div>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 mb-8">Đăng ký ngay</a>
                            <ul className="space-y-4">
                                {basicFeatures.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}

                                {/* note */}
                                <li className="flex items-start text-gray-500 font-medium">
                                    <span>Lưu ý: Phần mềm không bao gồm thiết bị check-in</span>
                                </li>

                            </ul>
                        </div>

                        {/* <!-- Pro Plan (Popular) --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300 popular-plan relative">
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                POPULAR
                            </div>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">K2-Checkin Advanced</h3>
                                <p className="text-gray-600 mb-4">Dành cho sự kiện từ 100 đến 500 người</p>
                                <div className="text-4xl font-bold mb-2">3.000.000 VNĐ</div>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 mb-8">Đăng ký ngay</a>
                            <ul className="space-y-4">
                                {
                                    advancedFeatures.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* <!-- Professional Plan --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">K2-Checkin Professional</h3>
                                <p className="text-gray-600 mb-4">Dành cho sự kiện trên 500 người</p>
                                <div className="text-4xl font-bold mb-2">{"≥ 5.000.000" + " VNĐ"}</div>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 mb-8">Đăng ký ngay</a>
                            <ul className="space-y-4">
                                {
                                    professionalFeatures.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* <!-- Landing Page Plan --> */}
                        <div className="pricing-card bg-white rounded-xl shadow-sm p-8 transition duration-300 popular-plan relative">
                            <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                Bổ sung
                            </div>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Landing Page</h3>
                                <div className="text-2xl font-bold mb-2">
                                    <span>2.000.000 đến 4.000.000</span> <br />
                                    <span className='text-sm font-normal text-gray-500'>(Phụ thuộc số lượng khách mời)</span>
                                </div>
                            </div>
                            <a href="#" className="block w-full py-3 px-6 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 mb-8">Đăng ký ngay</a>

                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Tạo trang đăng ký sự kiện chuyên nghiệp</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span>Hỗ trợ thiết kế và tối ưu trải nghiệm người dùng</span>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">So sánh các tính năng</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Xem cách các gói chúng tôi với nhau</p>
                    </div>

                    <div className="overflow-x-auto mx-20">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 text-left font-medium">Tính năng</th>
                                    <th className="py-4 text-center font-medium">Basic</th>
                                    <th className="py-4 text-center font-medium">Advanced</th>
                                    <th className="py-4 text-center font-medium">Professional</th>
                                    <th className='py-4 text-center font-medium'>Landing Page</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Nhập dữ liệu Excel</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Check-in mã QR</td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Hỗ trợ sự kiện quy mô lớn</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Tạo trang đăng ký sự kiện</td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                                    <td className="py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 font-medium">Giá (VNĐ)</td>
                                    <td className="py-4 text-center">1.000.000</td>
                                    <td className="py-4 text-center">3.000.000</td>
                                    <td className="py-4 text-center">Từ 5.000.000</td>
                                    <td className="py-4 text-center">2.000.000 - 4.000.000</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
