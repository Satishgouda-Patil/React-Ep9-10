import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import userestoMenu from "../utils/userestoMenu";
const Restaurant=()=>{
    const restaurantId=useParams().id;
    const restoMenu=userestoMenu(restaurantId);
    if(restoMenu===null){
        return(
            <Shimmer/>
        )
    }

    const {name,costForTwoMessage} =restoMenu?.data?.cards[2]?.card?.card?.info;
    const cuisines=restoMenu?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")
    // const costForTwoMessage=restoMenu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage;
    const {itemCards,title}=restoMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log("hi",itemCards)
    return(
        <div className="container-sm">
            <h1>{name}</h1>
            <p>cuisines are - {cuisines}</p>
            <p>cost For Two Message - {costForTwoMessage}</p>
            <ul className="menu-list">
                <h2>{title}</h2>
                 {itemCards ? (
                    itemCards.map( (card) =>(
                        <li key={card.card.info.id}>
                            <div className="img">
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+card.card.info.imageId}></img>
                            </div>
                            <p className="title">{card.card.info.name}</p>
                            <p>&#x20B9; {card.card.info.defaultPrice/100 || card.card.info.price/100}</p>
                            <p>{card.card.info.ratings.aggregatedRating.rating} stars</p>
                            <p>{card.card.info.description}</p>
                        </li>
                    )

                    )
                 ) :(
                    <p>not found</p>
                 )
                }
            </ul>
        </div>
    )
}

export default Restaurant;