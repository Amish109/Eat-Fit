const Restaurantcard=()=>{
    return(
        <div className="Restaurantcard mb-4">
            <div className="image">
                {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="" className="w-100" style={{height:"250px"}}/> */}
                <h1>ITEMS AT ₹179</h1>
            </div>
            <div className="content px-2">
                <h4>Chinese Wok</h4>
                <div className="d-flex justify-content-between"><span>⭐4.3</span> <span>25-30 mins</span></div>
                <div>Chinese, Asian, Tibetan, Desserts</div>
                <p>Santacruz East</p>
            </div>
        </div>
    )
}
export default Restaurantcard