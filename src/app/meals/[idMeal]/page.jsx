import React from 'react';

export const getSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data?.meals[0];
    } catch (err) {
        console.error(err);
        return {}
    }
}

const SingleMeal = async ({ params }) => {
    const mealIdParams = await params;
    const mealId = await mealIdParams?.idMeal;
    const meal = await getSingleMeal(mealId);

    if (meal) {
        return (
            <div className='singleMeal'>
                <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                    <h1 className='text-center text-2xl text-slate-700 font-medium'>Single Meal</h1>

                    <div className="mt-8">
                        <h1 className='text-lg font-medium text-slate-700'><span className='text-slate-600'>Name: </span>{meal?.strMeal}</h1>
                        <p className='text-lg text-slate-700'><span className='font-medium text-slate-600'>Description: </span>{meal?.strInstructions}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default SingleMeal;