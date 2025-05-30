"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AdminPage() {
  const route = useRouter();
  return (
    <main className="flex-1 p-6">
      {/* <!-- Header --> */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Admin Page</h2>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative">
            <input type="text" placeholder="Search posts..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center" onClick={() => {
            route.push('/admin/article/create')
          }}>
            <i className="fas fa-plus mr-2"></i>
            <span>Tạo bài viết</span>
          </button>
        </div>
      </header>

      {/* <!-- Stats Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Total Posts</p>
              <h3 className="text-2xl font-bold mt-1">1,248</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-pen text-blue-500"></i>
            </div>
          </div>
          <p className="text-green-500 text-sm mt-2">
            <i className="fas fa-arrow-up mr-1"></i> 12% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Published</p>
              <h3 className="text-2xl font-bold mt-1">856</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check text-green-500"></i>
            </div>
          </div>
          <p className="text-green-500 text-sm mt-2">
            <i className="fas fa-arrow-up mr-1"></i> 8% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Drafts</p>
              <h3 className="text-2xl font-bold mt-1">124</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-edit text-yellow-500"></i>
            </div>
          </div>
          <p className="text-red-500 text-sm mt-2">
            <i className="fas fa-arrow-down mr-1"></i> 3% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Comments</p>
              <h3 className="text-2xl font-bold mt-1">3,456</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-comments text-purple-500"></i>
            </div>
          </div>
          <p className="text-green-500 text-sm mt-2">
            <i className="fas fa-arrow-up mr-1"></i> 15% from last month
          </p>
        </div>
      </div>

      {/* <!-- Posts Table --> */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-lg">Recent Posts</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
              <i className="fas fa-filter mr-1"></i> Filter
            </button>
            <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
              <i className="fas fa-download mr-1"></i> Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categories
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
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
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                      <i className="fas fa-image text-gray-500"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Advanced React Patterns</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Jane Smith</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Frontend
                  </span>
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
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3"><i className="fas fa-edit"></i></a>
                  <a href="#" className="text-red-600 hover:text-red-900"><i className="fas fa-trash"></i></a>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                      <i className="fas fa-image text-gray-500"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Node.js Performance Optimization</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Mike Johnson</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Backend
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 5, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3"><i className="fas fa-edit"></i></a>
                  <a href="#" className="text-red-600 hover:text-red-900"><i className="fas fa-trash"></i></a>
                </td>
              </tr>
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
    </main>
  )
}
