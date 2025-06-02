"use client";

import React from 'react'

const product = [
    {
        name: "Features",
        link: "/solution"
    },
    {
        name: "Pricing",
        link: "/price"
    },
    {
        name: "Integrations",
        link: "/"
    },
   
]

const resources = [
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Help Center",
        link: "/support"
    },
    {
        name: "Community",
        link: "/"
    }
]
const company = [
    {
        name: "About Us",
        link: "/"
    },
    {
        name: "Contact",
        link: "/contact"
    },
    {
        name: "Partners",
        link: "/"
    }
]
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2">
                        <a href="#" className="text-2xl font-bold text-white flex items-center mb-4">
                            <img
                                loading='lazy'
                                src="/images/logo-footer.png"
                                alt="K2Tech Logo"
                                width={70} // optional, you can specify width/height
                                height={40}
                                className="background-none"
                            />
                        </a>
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
                           {
                               product.map((item, index) => (
                                   <li key={index}><a href={item.link} className="text-gray-400 hover:text-white">{item.name}</a></li>
                               ))
                           }
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {
                                resources.map((item, index) => (
                                    <li key={index}><a href={item.link} className="text-gray-400 hover:text-white">{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            {
                                company.map((item, index) => (
                                    <li key={index}><a href={item.link} className="text-gray-400 hover:text-white">{item.name}</a></li>
                                ))
                            }

                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">© 2025 K2Tech. All rights reserved.</p>
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
