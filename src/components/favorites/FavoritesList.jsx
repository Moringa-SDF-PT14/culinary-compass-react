import FavoriteItem from "./FavoriteItem"

export default function FavoritesList({ favList, onDeleteFav }){

    const favItems = favList.map((favItem) => 
        <li className="list-group-item">
            <FavoriteItem favItem={favItem} onDelete={onDeleteFav} key={favItem.id} />
        </li>
    )

    return (
        <div className="col p-4 mt-2">
            <h5>Favorites</h5>
            <ul className="list-group">
                {favItems}
            </ul>
        </div>
    )
}