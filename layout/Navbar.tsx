
"use client";
import React, { useState } from 'react'
import Link from 'next/link'
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

                        <img
                            loading='lazy'
                            src="/images/logo.jpg"
                            alt="K2Tech Logo"
                            width={70} // optional, you can specify width/height
                            height={40}
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">

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
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded-lg"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.redirect}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </header>
    )
}
