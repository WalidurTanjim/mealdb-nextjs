"use client";
import React from 'react';

const AddProductForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
    }

    return (
        <form className='add_product_form' onClick={handleSubmit}>
           <input type="text" name="userName" id="userName" required autoComplete='off' placeholder='Full Name' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3' /> 
           <input type="email" name="userEmail" id="userEmail" required autoComplete='off' placeholder='Email Address' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3' /> 
           <input type="text" name="userPhoto" id="userPhoto" required autoComplete='off' placeholder='Photo URL' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3' /> 

           <button type='submit' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3 bg-gray-100 hover:bg-gray-200 text-center font-medium text-slate-800'>Add Product</button>
        </form>
    );
};

export default AddProductForm;