import SearchForm from "./SearchForm"
import RecipeList from "./RecipeList"

export default function RecipeListPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <SearchForm />
                    <RecipeList />
                </div>
                <div className="col-3">
                    Favorites
                </div>
            </div>
        </div>
    )    
}