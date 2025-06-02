"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuill from "react-quill-new";

export default function CreateArticle() {
    const router = useRouter();
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        tags: "",
    })

    const createArticle = async () => {
        if (!blog.title || !blog.content || !blog.tags) {
            alert("Please fill all fields");
            return;
        }
        const res = await fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            alert("Article created successfully");
            router.push("/admin/article");
        }
    }
    const handleContentChange = (value: string) => {
        setBlog(prev => ({ ...prev, content: value }));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createArticle()
        // set blog is empty
        setBlog({
            title: "",
            content: "",
            tags: "",
        })

    }
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    {/* <!-- htmlForm Header --> */}
                    <div className="bg-indigo-600 py-4 px-6">
                        <h1 className="text-2xl font-bold text-white">Create a New Blog Post</h1>
                        <p className="text-indigo-200">Share your thoughts with the world</p>
                    </div>

                    {/* <!-- Blog Creation htmlForm --> */}
                    <form className="p-6 space-y-6" onSubmit={handleSubmit}>
                        {/* <!-- Title Field --> */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
                            <input
                                value={blog.title}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                name="title"
                                placeholder="Enter your blog post title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>




                        {/* <!-- Content Editor --> */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                            <ReactQuill theme="snow" value={blog.content} onChange={handleContentChange} placeholder="Write your blog post content here..." />

                        </div>

                        {/* <!-- Tags Input --> */}
                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags (separate with commas)</label>
                            <input
                                type="text"
                                name="tags"
                                value={blog.tags}
                                onChange={(e) => handleChange(e)}
                                placeholder="e.g., web development, design, marketing"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* <!-- SEO Settings (Collapsible) --> */}
                        {/* <div className="border border-gray-200 rounded-md p-4">
                            <button type="button" className="flex justify-between items-center w-full focus:outline-none" >
                                <h3 className="text-lg font-medium text-gray-900">SEO Settings</h3>
                                <svg id="seo-arrow" className="h-5 w-5 text-gray-500 transhtmlForm rotate-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            <div id="seo-section" className="mt-4 space-y-4 hidden">
                                <div>
                                    <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                                    <input
                                        type="text"
                                        id="meta-title"
                                        name="meta-title"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                                    <textarea
                                        id="meta-description"
                                        name="meta-description"
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    ></textarea>
                                </div>
                            </div>
                        </div> */}

                        {/* <!-- htmlForm Actions --> */}
                        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save Draft
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Publish Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}
