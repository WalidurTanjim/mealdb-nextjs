"use client";
import React from 'react';

const AddProductForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userPhoto = form.userPhoto.value;
        const role = "user";
        const badge = "bronze";
        const payload = { userName, userEmail, userPhoto, role, badge };

        const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        });
        const {result} = await res.json();

        if(result?.insertedId){
            form.reset();
            alert("User added successfully");
        }
    }

    return (
        <form className='add_product_form' onSubmit={handleSubmit}>
           <input type="text" name="userName" id="userName" required autoComplete='off' placeholder='Full Name' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3' /> 
           <input type="email" name="userEmail" id="userEmail" required autoComplete='off' placeholder='Email Address' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3' /> 
           <input type="text" name="userPhoto" id="userPhoto" required autoComplete='off' placeholder='Photo URL' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3' /> 

           <button type='submit' className='w-full px-5 py-1.5 outline-none border border-gray-300 rounded focus:ring-3 ring-gray-200 mb-3 bg-gray-100 hover:bg-gray-200 text-center font-medium text-slate-800'>Add Product</button>
        </form>
    );
};

export default AddProductForm;