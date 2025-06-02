"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
type Article = {
    title: string;
    content: string;
    author: string;
    tags: string;
    _id: string;
}

const columns = [
    { name: "Tiêu đề", selector: "title" },
    { name: "Trạng thái", selector: "status" },
    { name: "Ngày tạo", selector: "date" },
    { name: "Chỉnh sửa", selector: "actions" },
];

export default function ArticlePage() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const { data } = await response.json();
                setArticles(data);
            } catch (error) {
                console.log(error);
            }
        }
        getArticles();
    }, [])



    return (
        <div className='flex-1 p-6'>
            <h1 className='text-2xl font-bold text-gray-800 text-center py-4'>Article Management</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {
                                columns.map((column, index) => (
                                    <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {column.name}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            articles.length > 0 ? articles.map((article: Article, index: number) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                                                <i className="fas fa-image text-gray-500"></i>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{article.title}</div>
                                            </div>
                                        </div>
                                    </td>


                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Draft
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        May 10, 2023
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <a href="#" className="text-blue-600 hover:text-blue-900 pr-2">
                                            <i className="fas fa-edit"></i>
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-900">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                        <Link href={`/admin/article/${article._id}`} className="pl-2 text-red-600 hover:text-red-900">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan={6} className="px-6 py-4 whitespace-nowrap"></td>
                            </tr>
                        }
                        {/* <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                                        <i className="fas fa-image text-gray-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">Getting Started with Tailwind CSS</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">John Doe</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    Web Development
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Published
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                May 15, 2023
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <a href="#" className="text-blue-600 hover:text-blue-900 mr-3"><i className="fas fa-edit"></i></a>
                                <a href="#" className="text-red-600 hover:text-red-900"><i className="fas fa-trash"></i></a>
                            </td>
                        </tr> */}




                    </tbody>
                </table>
            </div>

            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                    </a>
                    <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">24</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Previous</span>
                                <i className="fas fa-chevron-left"></i>
                            </a>
                            <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                1
                            </a>
                            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                2
                            </a>
                            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                3
                            </a>
                            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                ...
                            </span>
                            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                8
                            </a>
                            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Next</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
