import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const CardContainer = () => {
  // let {card:{card:{gridElements:{infoWithStyle:{restaurants}}}}}=restaurantList[1]
 const [storedData,setStoredData]=useState([]);
 const [restaurantData,setRestaurantData]=useState([]);
 const [textData,updateTextData]=useState("");
 const [loadingStatus,setLoadingStatus]=useState(true);
  const ApiCall =async()=>{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
     header:{
     "Content-Type:":"application/json; charset=utf-8"
     }
    })
    const data =await response.json();
    console.log(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantData(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setStoredData(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setLoadingStatus(false);
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


  return (
    // <div className="container "style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
    <div>
      <div className="container mb-3 d-flex justify-content-between">
        <div>
          <input type="text" value={textData} onChange={(event)=>{updateTextData(event.target.value)}} onKeyUp={searchData} placeholder="Search.." className="border border-dark p-2 col-md-8" style={{borderRadius:'20px',width:'500px'}} />
          <button className="btn btn-primary btn-sm ms-2" onClick={searchData}>Search</button>
        </div>
        <button className="btn btn-primary btn-sm ms-2" onClick={filterData}>Top Rated</button>
      </div>
      <div className="container d-flex flex-wrap gap-5 ">
       
        {
          loadingStatus?
          new Array(20).fill(0).map((element,index)=>{
            return <Shimmer key={index}/>
          }):
      restaurantData.map((restaurant,index)=>{
            return(
              <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
            )
          })
        }
      </div>
    </div>
  )
}
export default CardContainer