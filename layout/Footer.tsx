import React from 'react'
import Image from "next/image"
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2">
                        <a href="#" className="text-2xl font-bold text-white flex items-center mb-4">
                            <Image
                                src="/images/logo-footer.png"
                                alt="K2Tech Logo"
                                width={70} // optional, you can specify width/height
                                height={40}
                                // how to remove background image
                                className="background-none"
                            />
                        </a>
                        <p className="text-gray-400 mb-4">The all-in-one platform for creating and managing successful events.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Updates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">© 2023 EventX. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
