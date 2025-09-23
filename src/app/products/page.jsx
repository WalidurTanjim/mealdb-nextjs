import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
    title: "All Products",
    description: "Here user can see product he or she wants"
}

const Products = async () => {
        const res = await fetch('http://localhost:3000/api/items', { cache: 'force-cache' });
        const { result } = await res.json();

        if(result.length > 10){
            redirect('/');
        }

    return (
        <div className='products'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>All Products</h1>

                <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        result?.map(user => {
                            return (
                                <div key={user?._id} className='border border-gray-300 rounded px-2 hover:shadow-md cursor-pointer'>
                                    <h1><span className='font-medium text-slate-700'>Name:</span> {user?.userName}</h1>
                                    <h1><span className='font-medium text-slate-700'>Email:</span> {user?.userEmail}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;