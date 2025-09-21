import React from 'react';
import MealSearchInput from './component/MealSearchInput';

const Meals = () => {
    return (
        <div className='meals'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className="text-center text-2xl text-slate-700 font-medium">All Meals</h1>

                <MealSearchInput />
            </div>
        </div>
    );
};

export default Meals;