import SearchForm from "./SearchForm"

export default function RecipeListPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <SearchForm />
                </div>
                <div className="col-3">
                    Favorites
                </div>
            </div>
        </div>
    )    
}