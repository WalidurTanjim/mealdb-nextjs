import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='not_found'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8 text-center">
                <h1 className='text-slate-700 font-medium text-2xl mb-2'>Page Not Found.</h1>
                <Link href={`/`} className='inline-block'><p className='px-5 py-1 border border-gray-300 rounded hover:bg-slate-100 text-sm font-medium'>Go back</p></Link>
            </div>
        </div>
    );
};

export default NotFound;