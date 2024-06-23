import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom"
import { ApiUrlForMenu } from "../constants/restaurants";
const Menu=()=>{
    const id=useParams();
    useEffect(()=>{
    (async()=>{
        const response= await fetch(ApiUrlForMenu);
        const data = await response.json();
        console.log("Data from Api Menu component:",data);
    })()

    },[])
    console.log(id);
    return(
        <div className="Menu">
            This Is menu page
        </div>
    )
}
export default Menu

// To use children in menu as well we will use outlets
// import { useEffect } from "react";
// import { Outlet, useParams } from "react-router-dom"
// const Menu=()=>{
//     const id=useParams();
//     useEffect(()=>{

//     },[])
//     console.log(id);
//     return(
//         <div className="Menu">
//             This Is menu page<br/>
//             <Outlet/>
//         </div>
//     )
// }
// export default Menu