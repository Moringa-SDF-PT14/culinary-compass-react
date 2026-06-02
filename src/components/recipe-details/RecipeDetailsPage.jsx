export default function RecipeDetailsPage({ recipe }){
    return (
        <div className="container mt-2 p-4">
            <div className="card">
                <div className="card-header">
                    {recipe.name}
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