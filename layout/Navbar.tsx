import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* <a href="#" className="text-2xl font-bold text-indigo-600 flex items-center">
                            <i className="fas fa-calendar-check mr-2"></i>
                            EventX
                        </a> */}
                        <Image
                            src="/images/logo.jpg"
                            alt="K2Tech Logo"
                            width={70} // optional, you can specify width/height
                            height={40}
                        />
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="nav-link font-medium hover:text-indigo-600 transition">Home</Link>
                        <Link href="/solutions" className="nav-link font-medium hover:text-indigo-600 transition">Solutions</Link>
                        <Link href="/price" className="nav-link font-medium hover:text-indigo-600 transition">Pricing</Link>
                        <Link href="/support" className="nav-link font-medium hover:text-indigo-600 transition">Support</Link>
                        <Link href="/contact" className="nav-link font-medium hover:text-indigo-600 transition">Contact</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="px-4 py-2 font-medium text-indigo-600 hover:text-indigo-700 transition">Login</Link>
                        <Link href="/signup" className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">Sign Up</Link>
                    </div>

                    <button id="mobile-menu-button" className="md:hidden text-gray-600 focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                <div id="mobile-menu" className="mobile-menu md:hidden">
                    <div className="pt-4 pb-2 space-y-2">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Home</Link>
                        <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Products</Link>
                        <Link href="/solutions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Solutions</Link>
                        <Link href="/support" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Support</Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Contact</Link>
                        <div className="pt-2 border-t border-gray-200">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Login</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
