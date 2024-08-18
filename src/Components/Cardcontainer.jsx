import Restaurantcard from "./RestaurantCardNew";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { UserContext } from "../utils/UserContext";
const CardContainer = () => {
  const {carousalData,setCarousalData} = useContext(UserContext);
  // let {card:{card:{gridElements:{infoWithStyle:{restaurants}}}}}=restaurantList[1]
 const [storedData,setStoredData]=useState([]);
 const [restaurantData,setRestaurantData]=useState([]);
 const [textData,updateTextData]=useState("");
 const [loadingStatus,setLoadingStatus]=useState(true);
 const [error,setError]=useState(false);
  const ApiCall =async()=>{
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
       header:{
       "Content-Type:":"application/json; charset=utf-8"
       }
      })
     
      const data =await response.json();
      console.log("response from Api",response);
      console.log("data from Api",data);
      setCarousalData(data?.data?.cards[0].card?.card?.imageGridCards?.info);
      console.log(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestaurantData(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setStoredData(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoadingStatus(false);
    } catch (error) {
      setError(true)
    }
  }
  // let {card:{card:{gridElements:{infoWithStyle:{restaurants}}}}}=restaurantList[1];
  const filterData=()=>{
    const filteredData=restaurantData.filter((restaurant)=>{
      return restaurant.info.avgRating>=4.5
    })
    setRestaurantData(filteredData);
    console.log(filteredData)

  }
  const searchData=()=>{
    const searchData=storedData.filter((element,index)=>element.info.name.toLowerCase().includes(textData.toLowerCase()));
    setRestaurantData(searchData);
  }
  // ApiCall()
  useEffect(()=>{
    ApiCall()
  },[])
  //  or we can even make an if else condition here and make an alternate return statement for onloading
// Test on shimmer effect animation
// New
if(error){
  return(
    <h1 style={{color:"red",height:"50.66dvh"}}>Something Went Wrong..</h1>
  )
}
  return (
    // <div className="container "style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
    <div className="CardContainer">
      <div className="container mb-3 d-flex justify-content-between">
        <div>
          <input type="text" value={textData} onChange={(event)=>{updateTextData(event.target.value)}}  placeholder="Search.." className="border border-dark p-2 col-md-8" style={{borderRadius:'20px',width:'500px'}} />
          <button className="btn btn-primary btn-sm ms-2" onClick={searchData}>Search</button>
        </div>
        <button className="btn btn-primary btn-sm ms-2" onClick={filterData}>Top Rated</button>
      </div>
      <div className="container divContainer d-flex flex-wrap gap-2 p-0 justify-content-center">
       
        {
          loadingStatus?
          <div className="d-flex justify-content-center gap-4 flex-wrap ">
            <Shimmer/>
          </div>
      
        :
      restaurantData?restaurantData.map((restaurant,index)=>{
            return(
              <Restaurantcard key={restaurant.info.id} {...restaurant.info}/>
            )
          }):""
        }
      </div>
    </div>
  )
}
export default CardContainer