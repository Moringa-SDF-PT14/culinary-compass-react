export default function FavoriteItem({ favItem, onDelete }){
    return (
        <div className="">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-9 justify-content-center">
                        <p>{favItem.name}</p>
                    </div>
                
                    <button 
                        className="btn btn-danger col-3" 
                        onClick={() => onDelete(favItem.id)}>
                    DEL
                    </button>
                    
                </div>
            </div>
        </div>
    )
}