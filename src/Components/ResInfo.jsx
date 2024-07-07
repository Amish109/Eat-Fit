const ResInfo=({name,avgRating,cuisines,deliveryTime,distance,costForTwo,ratingCount,remark})=>{
    return(
        <div className="info_container p-3">
            <h1>{name}</h1>
            <p>⭐{avgRating} {ratingCount}{costForTwo}</p>
            <p>{cuisines}</p>
            <p>{deliveryTime}</p>
            <p>{distance}| {remark.replace(/<b>(.*?)<\/b>/,"")}</p>
            {/* <p>{distance}| {remark.replace(/<\/?b>/g,"")}</p> */}
        </div>
    )
}

export default ResInfo
