export default function SearchForm({ recipe, onRecipeChange, onSearch }){
    return (
        <form onSubmit={onSearch} className="row g-2 row-cols-lg-auto align-items-center p-4 mt-2">
            <div className="col-9">
                <input name="recipe" value={recipe} onChange={onRecipeChange} className="form-control" placeholder="Search for a recipe"></input>
            </div>
            <div className="col-3">
                <button type="submit" className="btn btn-secondary">Search</button>
            </div>
        </form>
    )
}