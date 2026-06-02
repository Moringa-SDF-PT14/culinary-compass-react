import SearchForm from "./SearchForm"
import RecipeList from "./RecipeList"
import FavoritesList from "../favorites/FavoritesList"
import { useState, useEffect } from "react"
import { BASE_URL } from "../../data/config"

const TEST_DATA = [ 
    { id: 101, name: "Chicken" },
    { id: 102, name: "Croissant" }
]

export default function RecipeListPage(){

    const recipeURL = `${BASE_URL}search.php?f=a`
    const [recipes, setRecipes] = useState([])

    const handleRecipes = (mealData) => {
        const modelledRecipes = mealData.meals.map((meal) => {
            return {
                thumbnail: meal.strMealThumb,
                name: meal.strMeal,
                country: meal.strCountry,
                id: meal.idMeal
            }
        })
        setRecipes(() => modelledRecipes)
    }

    useEffect(() => {
        fetch(recipeURL)
        .then(res => res.json())
        .then(data => handleRecipes(data))
    }, [recipeURL])

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <SearchForm />
                    <RecipeList recipes={recipes} />
                </div>
                <div className="col-3">
                    <FavoritesList favList={TEST_DATA} />
                </div>
            </div>
        </div>
    )
}