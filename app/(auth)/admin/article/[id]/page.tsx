
"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const convertDate = (date: string) => {
    const dateParts = date.split("T")[0].split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}


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
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: ""
    })
    useEffect(() => {
        const getArticle = async () => {
            const { id } = await params;
            const res = await fetch(`/api/articles/${id}`);
            const { data } = await res.json();
            setArticle(data);
            // set content to editor
            if (!editor) return;
            editor.commands.setContent(data.content);
        }
        getArticle()
    }, [params, editor])




    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* <!-- Blog Post --> */}
            <article className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* <!-- Featured Image (optional) --> */}
                <Image width={50} height={50} src="https://images.unsplash.com/photo-1553136380-a72e2bd822fe?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog post featured image" className="w-full h-64 object-cover" />

                {/* <!-- Post Content --> */}
                <div className="p-6 md:p-8">
                    {/* <!-- Title --> */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>

                    {/* <!-- Meta Information --> */}
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <span className="mr-4">
                            Posted on <time dateTime="2023-05-15">{convertDate(article.createdAt)}</time>
                        </span>
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
                    <div className="max-w-none">
                        {/* how to show content with tiptap */}
                        {/* <div dangerouslySetInnerHTML={{ __html: article.content }} className="prose prose-lg text-gray-700" /> */}
                        <EditorContent editor={editor} />
                    </div>
                </div>


            </article>
        </main>
    )
}
