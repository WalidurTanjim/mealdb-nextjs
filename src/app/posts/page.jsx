import Link from 'next/link';
import React from 'react';

export const fetchPosts = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return []
    }
}

export const metadata = {
    title: "All Posts",
    description: "Loading Posts from jsonplaceholder using server components"
}

const Posts = async () => {
    const posts = await fetchPosts();

    return (
        <div className='posts'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>All Posts</h1>

                <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        posts?.map(post => {
                            return (
                                <Link key={post?.id} href={`/posts/${post?.id}`}>
                                    <div className='border border-gray-300 rounded p-2 hover:shadow-md hover:cursor-pointer'>
                                        <h1><span className='font-medium text-slate-700'>ID:</span> {post?.id}</h1>
                                        <h1><span className='font-medium text-slate-700'>Title:</span> {post?.title}</h1>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Posts;