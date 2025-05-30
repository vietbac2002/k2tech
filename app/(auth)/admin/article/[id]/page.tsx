
"use client";
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill-new';
const formatContent = (text: string) => {
    // Split by double newlines to get paragraphs
    const paragraphs = text.split(/\n\s*\n/);

    return paragraphs.map((paragraph, index) => {
        // Split each paragraph by single newlines for <br> tags
        const lines = paragraph.split('\n');

        return (
            <p key={index} className="mb-4">
                {lines.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                        {lineIndex > 0 && <br />}
                        {line}
                    </React.Fragment>
                ))}
            </p>
        );
    });
};


export default function ArticleDetail({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const [article, setArticle] = useState({
        title: "",
        content: "",
        createdAt: "",
        tags: ""
    });
    useEffect(() => {
        const getArticle = async () => {
            const { id } = await params;
            const res = await fetch(`/api/articles/${id}`);
            const data = await res.json()
            setArticle(data.data)
        }
        getArticle()
    }, [])
    console.log(article);

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* <!-- Blog Post --> */}
            <article className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* <!-- Featured Image (optional) --> */}
                <img src="https://images.unsplash.com/photo-1553136380-a72e2bd822fe?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog post featured image" className="w-full h-64 object-cover" />

                {/* <!-- Post Content --> */}
                <div className="p-6 md:p-8">
                    {/* <!-- Title --> */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>

                    {/* <!-- Meta Information --> */}
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <span className="mr-4">
                            Posted on <time dateTime="2023-05-15">{article.createdAt ?? ""}</time></span>
                        <span>5 min read</span>
                    </div>

                    {/* <!-- Tags --> */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {
                            article.tags.split(",").map((tag: string, index: number) => (
                                <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">{tag}</span>
                            ))
                        }

                    </div>

                    {/* <!-- Content --> */}
                    <div className="prose max-w-none text-gray-700">
                        <ReactQuill
                            value={article.content}
                            readOnly={true}
                            theme={"bubble"}
                        />
                    </div>
                </div>

                {/* <!-- Author Info (optional) --> */}
                <div className="border-t border-gray-200 px-6 py-4 md:px-8 bg-gray-50">
                    <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author avatar" />
                        <div>
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-sm text-gray-500">Web Developer & Blogger</p>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}
