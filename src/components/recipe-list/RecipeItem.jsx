import { Link, NavLink } from "react-router";

export default function RecipeItem({recipe}){
    return (
        <div className="card col-3" style={{width: '18rem'}}>
            <img src={recipe.thumbnail} className="card-img-top object-fit-cover w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.country}</p>
                <div className="row">
                    <div className="col">
                        <Link to={`/details/${recipe.id}`} className="btn btn-primary">Open Details</Link>
                    </div>
                    <div className="col">
                        <NavLink to={'#'} className="btn btn-outline-warning">Favorite</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}