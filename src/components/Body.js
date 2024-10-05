import Cards from "./Cards";
// import dataLists from "../utils/swiggyApi"; 
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
  const [dataLists, setdataLists]=useState([]);
  let [filterdLists, setfilterdDataList]=useState([]);
  let [searchItem, setsearchItem]=useState("");
  useEffect(()=>{
    fetchApi()
  },[])
  fetchApi=async ()=>{
     data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     const jsondata=await data.json()
     setdataLists(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
     setfilterdDataList(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  if(dataLists.length===0){
    return(
      <div className="flex flex-wrap">
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
      </div>
    )
  }
    return(
        <div className="ml-8">
            <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="rounded-md">
                    <label className="search-icon">&#128270;</label>
                    <input className="bg-gray-50  m-2 p-2 border-2 border-black rounded-md" placeholder="Search your dish" value={searchItem}/*the value field isn.t neccesary */ onChange={(e)=>{setsearchItem(e.target.value)}}></input>
                    <button className="bg-orange-400 m-2 p-2 rounded-md" onClick={()=>{
                    let variable=dataLists.filter((res)=>res.info.name.toLowerCase().includes(searchItem.toLowerCase()));
                    setfilterdDataList(variable)  
                  }
                  } type="click">Search</button>
                  </div>
                </div>
                <button className="bg-orange-400  p-2 rounded-md mr-12" onClick={()=>{
                  let filteredData=dataLists.filter(x=>(x.info.avgRating)>=4.5)
                  console.log(filteredData)
                  setfilterdDataList(filteredData)
                }} type="click">Click to filter</button>

            </div>
           <div className="flex flex-wrap">
              {
                filterdLists.map(resto=>(
                  <Link key={resto.info.id} to={"/restaurant/"+resto.info.id }><Cards resData={resto}/></Link>
                ))
              }
           </div>
        </div>
    )
}

export default Body;