"use client"
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // I lost track of this part of the code long ago. It's early in the morning, sorry if this is gross.
    return (
        <section>
            <h2 className="text-xl font-bold">Meal Ideas</h2>
            {ingredient !== "" ? (
                meals !== null && meals.length > 0 ? (
                    <div>
                        <p>Here are some meal ideas using {ingredient}:</p>
                        <ul className="flex flex-col gap-1">
                            {meals.map(meal => (
                                <li className="bg-gray-900 w-96 rounded-xl p-2 hover:bg-gray-800 active:bg-gray-700"
                                    key={meal.idMeal}>{meal.strMeal}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No meals found for {ingredient}</p>
                )
            ) : (
                <p>Select an item to see meal ideas</p>
            )}
        </section>
    );
}