// import { useState } from "react"
import { useEffect, useRef } from "react";
import MenuSection from "./MenuSection"

const NormalMenu = ({normalCollection,index,show ,showData,setShow})=>{
    const divRef = useRef();
    // debugger
// useEffect(()=>{
//     if(index!=show){
//         return
//     }
//     console.log("divRef",divRef.current);
//     const targetRect = divRef.current.getBoundingClientRect();
//     const targetPosition = targetRect.top + window.pageYOffset;
//     window.scrollTo({

//       top: targetPosition,
//       behavior: 'smooth'
//     });
// })
    return(
        <div  name={`MenuDiv_${index}`} id={`MenuDiv_${index}`} ref={divRef}>
            <a href={`#MenuDiv_${index}`}>
                 <h6 key={index} className="bg-dark text-white p-4 cursor-pointer" onClick={()=>setShow(show!==index?index:-1)}>{normalCollection?.card?.card?.title}</h6>
            </a>
        {/* <h6 key={index} className="bg-secondary p-4 cursor-pointer" >{normalCollection?.card?.card?.title}</h6> */}
        
       {
        normalCollection?.card?.card?.itemCards.map((dish)=>{
            if(!showData){
                return;
            }
         return(
            <div key={dish.card?.info?.id}>
                {
                    // window.location = window.location + "#"+divRef.current.name
                }
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
            {
                //  divRef.current.scrollIntoView({ behavior: 'smooth' })
            }
            </div>
            

         )  
        })
       
       } 
       
    </div>
    )
}

export default NormalMenu