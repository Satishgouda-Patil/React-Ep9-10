const Cards=(props)=>{
    let {resData}=props;
    let {name,cuisines,avgRating,devTime,cloudinaryImageId}=resData?.info;
    return(
    <div className=" max-w-80   p-2 m-2 border border-black-50 rounded-md break-all hover:shadow-2xl">
        <img alt="img" className="w-80 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
        <div className="text-black no-underline">
            <h5 className="card-title ">{name}</h5>
            <p> {cuisines.join(",") }</p>
            <a href="#" class="btn btn-primary">{avgRating} Stars  & {devTime} Mins to Delivery</a>
        </div>
    </div>
    )
}

export default Cards;