import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
// import { Outlet, useParams } from "react-router-dom"
// import { ApiUrlForMenu } from "../constants/restaurants";
import ResInfo from "./ResInfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
const Menu=()=>{
    const {id}=useParams();
    const [menuData,setMenuData]= useState([]);
    // const [subMenuData,setSubMenuData]= useState([]);
    const [loading,setLoading]= useState(true);
    useEffect(()=>{
   try {
     (async()=>{
         const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        //  const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER`);
         const json = await response.json();
         console.log("Data filtered",json?.data?.cards);
         setMenuData(json?.data?.cards);
        //  setSubMenuData(json?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
         setLoading(false);
         console.log("Data from Api Menu component:",json);
     })()
   } catch (error) {
        console.log("Error in calling the Menu API",error)
   }

    },[])
    console.log(id);
    if(loading ){
        return <div className="d-flex justify-content-center gap-4 flex-wrap" >
            <Shimmer/>
        </div>
    }

    const Cateogries=menuData[4]?.groupedCard.cardGroupMap.REGULAR.cards;
    const normalMenu=Cateogries.filter((menuCategory)=>{
        return menuCategory.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    const nestedMenu=Cateogries.filter((nestedCategory)=>{
        return nestedCategory.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    })

    console.log("normalMenu",normalMenu);
    console.log("nestedMenu",nestedMenu);

    console.log("menu data",menuData)
    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla,expectationNotifiers}= menuData[2]?.card?.card?.info;
    console.log("name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla,expectationNotifiers",name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla,expectationNotifiers)
    const {slaString,lastMileTravelString}=sla;
    const {enrichedText} =expectationNotifiers[0]
    return(
        <div className="mwnu_container"> 
            <div className="Menu">
            <ResInfo
            name={name} avgRating={avgRating} cuisines={cuisines.join(",")} deliveryTime={slaString} distance={lastMileTravelString} costForTwo={costForTwoMessage} ratingCount={totalRatingsString} 
            remark={enrichedText}  
            //   remark="Test"  
                    />
            </div>

            <div className="p-3">
                {
                    normalMenu.map((normalCategory,index)=>{
                        return(
                            <div>
                                <h6 key={index}>{normalCategory?.card?.card?.title}</h6>
                               {
                                normalCategory?.card?.card?.itemCards.map((dish)=>{
                                 return(
                                    <>
                                    
                                    <MenuSection 
                                    isVeg={dish.card?.info?.isVeg} 
                                    name={dish.card?.info?.name} 
                                    // cost={dish.card?.info?.defaultPrice?dish.card?.info?.defaultPrice/100:dish.card?.info?.price/100} 
                                    cost={dish.card?.info?.defaultPrice/100 || dish.card?.info?.price/100} 
                                    avgRating={dish.card?.info?.ratings?.aggregatedRating?.rating} 
                                    ratingCount={dish.card?.info?.ratings?.aggregatedRating?.ratingCount} 
                                    description={dish.card?.info?.description} 
                                    imgUrl={dish.card?.info?.imageId}    />
                                    <hr/>
                                    </>

                                 )  
                                })
                               
                               } 
                               
                            </div>
                        )
                    })
                
                }
            </div>
            <div className="p-3">
                {
                    nestedMenu.map((category)=>{
                        return(
                            <>
                             <h4>{category?.card?.card?.title}</h4>
                             {
                               category?.card?.card?.categories.map((subCategory)=>{
                                return(
                                    <>
                                    <h5 className="text-primary">{subCategory?.title}</h5>
                                    {
                                        subCategory.itemCards.map((dish)=>{
                                            return(
                                                <>
                                                             <MenuSection 
                                                isVeg={dish.card?.info?.isVeg} 
                                                name={dish.card?.info?.name} 
                                                // cost={dish.card?.info?.defaultPrice?dish.card?.info?.defaultPrice/100:dish.card?.info?.price/100} 
                                                cost={dish.card?.info?.defaultPrice/100 || dish.card?.info?.price/100} 
                                                avgRating={dish.card?.info?.ratings?.aggregatedRating?.rating} 
                                                ratingCount={dish.card?.info?.ratings?.aggregatedRating?.ratingCount} 
                                                description={dish.card?.info?.description} 
                                                imgUrl={dish.card?.info?.imageId}    />
                                                <hr />
                                                </>
                                            )
                                        })
                                    }
                                    </>
                                    // <MenuSection 
                                    // isVeg={dish.card?.info?.isVeg} 
                                    // name={dish.card?.info?.name} 
                                    // // cost={dish.card?.info?.defaultPrice?dish.card?.info?.defaultPrice/100:dish.card?.info?.price/100} 
                                    // cost={dish.card?.info?.defaultPrice/100 || dish.card?.info?.price/100} 
                                    // avgRating={dish.card?.info?.ratings?.aggregatedRating?.rating} 
                                    // ratingCount={dish.card?.info?.ratings?.aggregatedRating?.ratingCount} 
                                    // description={dish.card?.info?.description} 
                                    // imgUrl={dish.card?.info?.imageId}    />
                                )
                               }) 
                             }
                            </>
                        )
                    })
                }
            </div>
        </div>
        
    )
}
export default Menu


// data for 1st part will be in 3 object in datafromAPI.data.cards so it will be datafromAPI.data.cards[2]
// first category data in array of index 4 of above array in that 2 index of cards there will be itemCards  array containing 20 objs of recommended


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