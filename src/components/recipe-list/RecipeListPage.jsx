import SearchForm from "./SearchForm"
import RecipeList from "./RecipeList"
import FavoritesList from "../favorites/FavoritesList"
import { useState, useEffect } from "react"
import { BASE_URL } from "../../data/config"
import { useNavigate } from "react-router"

const TEST_DATA = [ 
    { id: 101, name: "Chicken" },
    { id: 102, name: "Croissant" }
]

export default function RecipeListPage(){

    const [recipeURL, setRecipeURL] = useState(`${BASE_URL}search.php?f=a`)
    const [recipes, setRecipes] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState("")

    const navigate = useNavigate()

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

        // If only one item is present on the list, just open details
        if(modelledRecipes.length === 1){
            const id = modelledRecipes[0].id
            navigate(`/details/${id}`)
        }

    }

    const handleRecipeChange = (event) => {
        const value = event.target.value
        setCurrentRecipe(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRecipeURL(`${BASE_URL}search.php?s=${currentRecipe}`)
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
                    <SearchForm recipe={currentRecipe} onRecipeChange={handleRecipeChange} onSearch={handleSubmit} />
                    <RecipeList recipes={recipes} />
                </div>
                <div className="col-3">
                    {/* TODO: Finalize favorites using localStorage */}
                    <FavoritesList favList={TEST_DATA} />
                </div>
            </div>
        </div>
    )
}