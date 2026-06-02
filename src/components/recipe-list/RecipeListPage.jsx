import SearchForm from "./SearchForm"
import RecipeList from "./RecipeList"
import FavoritesList from "../favorites/FavoritesList"

const TEST_DATA = [ 
    { id: 101, name: "Chicken" },
    { id: 102, name: "Croissant" }
]

export default function RecipeListPage(){

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <SearchForm />
                    <RecipeList />
                </div>
                <div className="col-3">
                    <FavoritesList favList={TEST_DATA} />
                </div>
            </div>
        </div>
    )
}