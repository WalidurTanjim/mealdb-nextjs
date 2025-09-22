import React from 'react';

export const fetchSinglePost = async(id) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        return data || {};
    }catch(err){
        console.error(err);
        return {};
    }
}

const SinglePost = async({ params }) => {
    const idParams = await params;
    const id = await idParams?.id;
    const post = await fetchSinglePost(id);

    return (
        <div className='singlePost'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Single Post</h1>

                <div className='mt-8'>
                    <p><span className='font-medium text-slate-700'>ID:</span> {post?.id}</p>
                    <p><span className='font-medium text-slate-700'>Title:</span> {post?.title}</p>
                    <p><span className='font-medium text-slate-700'>Body:</span> {post?.body}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;