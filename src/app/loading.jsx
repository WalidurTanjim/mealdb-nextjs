import React from 'react';

const loading = () => {
    return (
        <div className='loading'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Loading...</h1>
            </div>
        </div>
    );
};

export default loading;