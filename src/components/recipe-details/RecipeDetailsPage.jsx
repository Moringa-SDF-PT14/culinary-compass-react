import { useParams } from "react-router"

export default function RecipeDetailsPage({ recipe }){

    const { recipe_id } = useParams()

    // TODO: Use recipe_id to query the API and render the details on the screen

    return (
        <div className="container mt-2 p-4">
            <div className="card">
                <div className="card-header">
                    {recipe.name} {recipe_id}
                </div>
                <div className="card-body">
                    <figure>
                    <blockquote className="blockquote">
                        <p>{recipe.instructions}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Commonly found in <cite title="Source Title">{recipe.country}</cite>
                    </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}