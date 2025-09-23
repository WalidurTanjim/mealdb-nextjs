import React from 'react';

const AuthenticationLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='side_nav col-span-3 w-full h-screen bg-green-100'>
                <h1 className='text-center text-2xl text-slate-700 font-medium py-8'>Side Navigation</h1>
            </div>

            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default AuthenticationLayout;