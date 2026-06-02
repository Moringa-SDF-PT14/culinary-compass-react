import RecipeItem from "./RecipeItem"

export default function RecipeList({ recipes }){

    const recipeJSX = recipes.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)

    return (
        <div className="p-4 mt-2 row gap-4">
            {recipeJSX}
        </div>
    )
}