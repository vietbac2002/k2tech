
"use client";
import React, { useEffect, useState } from 'react'
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Img from '@/components/Img';
const convertDate = (date: string) => {
    const dateParts = date.split("T")[0].split("-");
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}


export default function BlogDetailPage({
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
        content: "",
        editable: false,
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
        <main className="w-full sm:px-6 lg:px-8 py-8">
            {/* <!-- Blog Post --> */}
            <article className="bg-white shadow-md overflow-hidden rounded-lg">
                <Img url='https://images.unsplash.com/photo-1553136380-a72e2bd822fe?auto=format&w=800&q=75' />
                {/* <!-- Post Content --> */}
                <div className="p-6 md:p-8">
                    {/* <!-- Title --> */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>

                    {/* <!-- Meta Information --> */}
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <span className="mr-4">
                            Ngày đăng <time dateTime="2023-05-15">{convertDate(article.createdAt)}</time>
                        </span>
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
                        <EditorContent editor={editor} />
                    </div>
                </div>

            </article>
        </main>
    )
}
