import React from 'react';
import MealSearchInput from './component/MealSearchInput';
import style from "./meals.module.css";
import Link from 'next/link';

const Meals = async ({ searchParams }) => {
    const search = await searchParams;

    // fetch meals
    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search?.search}`);
            const data = await res.json();
            return data?.meals;
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    const meals = await fetchMeals();

    return (
        <div className='meals'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className="text-center text-2xl text-slate-700 font-medium">All Meals</h1>

                <MealSearchInput />

                <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2:md:grid-cols-3 lg:grid-cols-4">
                    {
                        meals?.map(meal => {
                            return (
                                <Link key={meal?.idMeal} href={`/meals/${meal?.idMeal}`}>
                                    <div className='outline-none border border-gray-300 rounded-md p-2 hover:shadow-md'>
                                        <h1 className={`${style.meal_title}`}>{meal?.strMeal}</h1>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Meals;