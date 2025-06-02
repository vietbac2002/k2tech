
"use client";
import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    // if correct pathname the hover menu
    const navItems = [
        {
            name: "Home",
            redirect: "/"
        },
        {
            name: "Giải pháp",
            redirect: "/solution",
        },
        {
            name: "Giá",
            redirect: "/price"
        },
        {
            name: "Hỗ trợ",
            redirect: "/support"
        },
        {
            name: "Liên hệ",
            redirect: "/contact"
        },
        {
            name: "Blog",
            redirect: "/blog"
        }
    ]
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* <a href="#" className="text-2xl font-bold text-indigo-600 flex items-center">
                            <i className="fas fa-calendar-check mr-2"></i>
                            EventX
                        </a> */}
                        <img
                            loading='lazy'
                            src="/images/logo.jpg"
                            alt="K2Tech Logo"
                            width={70} // optional, you can specify width/height
                            height={40}
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {/* <Link href="/" className="nav-link font-medium hover:text-indigo-600 transition">Home</Link>
                        <Link href="/solutions" className="nav-link font-medium hover:text-indigo-600 transition">Solutions</Link>
                        <Link href="/price" className="nav-link font-medium hover:text-indigo-600 transition">Pricing</Link>
                        <Link href="/support" className="nav-link font-medium hover:text-indigo-600 transition">Support</Link>
                        <Link href="/contact" className="nav-link font-medium hover:text-indigo-600 transition">Contact</Link> */}
                        {
                            navItems.map((item, index) => (
                                <Link key={index} href={item.redirect} className="nav-link font-medium hover:text-indigo-600 transition">
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>

                    <div className="hidden md:flex items-center space-x-4">

                    </div>

                    <button id="mobile-menu-button" className="md:hidden text-gray-600 focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                <div id="mobile-menu" className="mobile-menu md:hidden">
                    <div className="pt-4 pb-2 space-y-2">
                        {/* <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Home</Link>
                        <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Products</Link>
                        <Link href="/solutions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Solutions</Link>
                        <Link href="/support" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Support</Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Contact</Link> */}
                        {
                            navItems.map((item, index) => (
                                <Link key={index} href={item.redirect} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                    {item.name}
                                </Link>
                            ))
                        }
                        {/* <div className="pt-2 border-t border-gray-200">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Login</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}
