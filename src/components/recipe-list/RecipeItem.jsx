export default function RecipeItem({recipe}){
    return (
        <div className="card col-3" style={{width: '18rem'}}>
            <img src={recipe.thumbnail} className="card-img-top object-fit-cover w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.country}</p>
                <div className="row">
                    <div className="col">
                        <a href="#" className="btn btn-primary">Open Details</a>
                    </div>
                    <div className="col">
                        <a href="#" className="btn btn-outline-warning">Favorite</a>
                    </div>
                </div>
            </div>
        </div>
    )
}