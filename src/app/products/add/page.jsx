import React from 'react';
import AddProductForm from './components/AddProductForm';

export const metadata = {
    title: "Add Product",
    description: "Here user can add product he or she wants"
}

const ProductAdd = () => {
    return (
        <div className='proudct_add'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-slate-700 text-2xl font-medium'>Add Product</h1>

                <div className="mt-8">
                    <AddProductForm />
                </div>
            </div>
        </div>
    );
};

export default ProductAdd;