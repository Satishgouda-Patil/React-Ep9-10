import { useEffect,useState} from "react";

userestoMenu=(restaurantId)=> {
    const [menu, setMenu] = useState(null)
    useEffect(()=>{
        feachData();
    },[])
    feachData=async ()=>{
        data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+restaurantId)
        const jsonData=await data.json()
        setMenu(jsonData)
    }

    return menu;
}
export default userestoMenu;
