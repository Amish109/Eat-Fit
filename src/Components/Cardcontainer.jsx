import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
const CardContainer = () => {
  // let {card:{card:{gridElements:{infoWithStyle:{restaurants}}}}}=restaurantList[1]
 const [storedData,setStoredData]=useState([]);
 const [restaurantData,setRestaurantData]=useState([]);
 const [textData,updateTextData]=useState("");
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
          // console.log(restaurants);
        }
        {
          //justify-content-center
      //   console.log(restaurants)
      restaurantData.map((restaurant,index)=>{
            return(
              <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
              // <Restaurantcard imageURL={restaurant.imageURL} title={restaurant.title} starRating={restaurant.starRating} deliveryTime={restaurant.deliveryTime} cuisine={restaurant.cuisine} address={restaurant.address}/>
            )
          })
        }
      </div>
    </div>
  )
}
export default CardContainer


// import RestaurantCard from "./RestaurantCard"

// const CardContainer = () => {
// const restaurantArray=[
//   {
//     imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
//     title:"Chinese Wok",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fs5k6cq12pa0rnhaxvi3",
//     title:"Moninis",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c3ba5f77ce2ce09b1aa34d7af539bd64",
//     title:"Good Flippin' Burgers",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t6av3q7weumzdozcmowp",
//     title:"Thambbi",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y0ssisttf1abijyrwelp",
//     title:"Hare Krishna",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s8hzsexomoadr8dvdzzl",
//     title:"Sawali Restaurant",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/a7b8d129-1c29-458b-8b7d-bb7fab0bb0f9_391195%20SS.jpg",
//     title:"Everything Rice",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/efi2fsfk7iicilqxw9ly",
//     title:"Banglore lyagar Bakery",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/3e78644b-935a-4ddf-b244-b3b83fdb7382_19344.jpg",
//     title:"Mr Garam & Mr Grills",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/3e78644b-935a-4ddf-b244-b3b83fdb7382_19344.jpg",
//     title:"Deluxe Restaurant",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
//   {
//      imageURL:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/2b87f140-6851-4415-b0ec-a6222aacb53c_35521.JPG",
//     title:"Sweet Truth",
//     starRating:"4.5",
//     deliveryTime:"25-39 min",
//     cuisine:"Chinesse,Asian,Dessert",
//     address:"Santacruz",
//   },
// ]
//   return (
//     <div className="container d-flex flex-wrap gap-5 justify-content-center">
//       {
//         restaurantArray.map((restaurant,index)=>{
//           return(
//             <RestaurantCard {...restaurant}/>
//             // <Restaurantcard imageURL={restaurant.imageURL} title={restaurant.title} starRating={restaurant.starRating} deliveryTime={restaurant.deliveryTime} cuisine={restaurant.cuisine} address={restaurant.address}/>
//           )
//         })
//       }
//         {/* <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/> */}
//     </div>
//   )
// }

// export default CardContainer
