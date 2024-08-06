import { useEffect, useRef } from "react";
import MenuSection from "./MenuSection";

const NestedMenu = ({category,index,showNested ,showData,setShowNested}) => {
    const nestedDivRef = useRef();
    // useEffect(()=>{
    //     if(index!=showNested){
    //         return
    //     }
    //     console.log("divRef",nestedDivRef.current);
    //     const targetRect = nestedDivRef.current.getBoundingClientRect();
    //     const targetPosition = targetRect.top + window.pageYOffset;
    //     window.scrollTo({
    //       top: targetPosition,
    //       behavior: 'smooth'
    //     });
    // })
  return (
    <div name={`NestedMenuDiv_${index}`} id={`NestedMenuDiv_${index}`} ref={nestedDivRef} >
        <a href={`#NestedMenuDiv_${index}`} className="text-decoration-none text-dark">
         <h4 className="bg-secondary p-4" onClick={()=>setShowNested(showNested!==index?index:-1)}>{category?.card?.card?.title}</h4>
        </a>
        {
        category?.card?.card?.categories.map((subCategory)=>{
            if(!showData){
                return;
            }   
        return(
            <div >
            <h5 className="text-primary">{subCategory?.title}</h5>
            {
                subCategory.itemCards.map((dish)=>{
                    return(
                        <>
                            <MenuSection 
                        isVeg={dish?.card?.info?.isVeg} 
                        name={dish?.card?.info?.name} 
                        // cost={dish?.card?.info?.defaultPrice?dish?.card?.info?.defaultPrice/100:dish?.card?.info?.price/100} 
                        cost={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100} 
                        avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating} 
                        ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount} 
                        description={dish?.card?.info?.description} 
                        imgUrl={dish?.card?.info?.imageId}    />
                        <hr />
                        </>
                    )
                })
            }
            </div>
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
    </div>
  )
}

export default NestedMenu
