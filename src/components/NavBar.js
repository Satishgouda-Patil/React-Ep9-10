import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const NavBar=()=>{
    const OnlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 items-center h-20">
            <h4><img className="w-16 h-16 rounded-2xl" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG"></img></h4>
            <div>
                <ul className="flex m-4 p-4 text-black">
                    <li className="px-3  text-black">Status {OnlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3 "><Link to="/" className=" text-black">HOME</Link></li>
                    <li className="px-3"><Link to="/about" className=" text-black">ABOUT</Link></li>
                    <li className="px-3"><Link to="/contact" className=" text-black">CONTACT</Link></li>
                    <li className="px-3">CART</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;