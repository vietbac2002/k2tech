"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { convertDate } from '@/utils/convert';
import Link from 'next/link';

type Article = {
    title: string;
    content: string;
    author: string;
    tags: string;
    _id: string;
    createdAt: string;
}

type PaginationMetadata = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

// type Article = {
//     title: string;
//     content: string;
//     author: string;
//     tags: string;
//     _id: string;
//     createdAt: string;
// }

// type PaginationMetadata = {
//     currentPage: number;
//     totalPages: number;
//     totalItems: number;
//     itemsPerPage: number;
// }

export default function BlogPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [metadata, setMetadata] = useState<PaginationMetadata | null>(null);
    const [page, setPage] = useState(0);

    const fetchArticles = async (currentPage: number) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/articles?page=${currentPage}&limit=3`);
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            const { data, metadata } = await response.json();

            if (currentPage === 0) {
                setArticles(data);
            } else {
                setArticles(prev => [...prev, ...data]);
            }
            setMetadata(metadata);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles(0);
    }, []);

    const handleLoadMore = () => {
        if (metadata && page < metadata.totalPages - 1) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchArticles(nextPage);
        }
    };

    return (
        <>
            {/* // <!-- Hero Section --> */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">K2Tech Blog</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ý tưởng, các bài viết và các hướng dẫn tốt nhất cho nhà nghiên cứu sự kiện
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article: Article, index: number) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                            <Image width={800} height={400} src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&w=800&q=75"
                                alt="Post image"
                                className="w-full h-48 object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhQdFB4VFR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                            <div className="flex flex-col p-6 flex-grow">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>{article.tags}</span>
                                    <span className="mx-2">•</span>
                                    <span>{convertDate(article.createdAt)}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {article.title}
                                </h3>
                                <div className="mt-auto pt-4">
                                    <Link href={`/blog/${article._id}`} className="text-indigo-600 font-medium hover:text-indigo-800">Read more</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {metadata && page < metadata.totalPages - 1 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Load More Articles'}
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
