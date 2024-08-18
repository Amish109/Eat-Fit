import { useContext, useEffect, useState } from "react"
import { UserContext } from "../utils/UserContext";
import { HostUrl } from "../constants/restaurants"

const Carousel=()=>{
    const {carousalData,setCarousalData} = useContext(UserContext);
    const [tempdata,setTempData] = useState([]);
    // let nextClicked=0;
    // let prevClicked=0;
    const [nextClicked,setNextClicked] = useState(0);
    const [prevClicked,setPrevClicked] = useState(0);
    const updateTempData = () => {
        if (carousalData) {
          const newWidth = Math.floor(window.innerWidth / 150) - 1; // Calculate based on window width
          setTempData(carousalData.slice(0, newWidth));
        }
      };
    useEffect(()=>{
        updateTempData();
        window.addEventListener('resize', updateTempData);
        setNextClicked(0);
        setPrevClicked(0);
        return () => {
          window.removeEventListener('resize', updateTempData);
        };
    },[carousalData])
    const handlePreviousClick = () =>{
        // setNextClicked(nextClicked-1);
        setPrevClicked((prev)=>{
            let newPrevClicked = prev - 1;
            if (newPrevClicked >= 0) {
                setNextClicked(next => next - 1);
                const newTempData = carousalData.slice( newPrevClicked, Math.floor(document.body.scrollWidth / 150) - 1 + newPrevClicked);
                console.log("from to",newPrevClicked,Math.floor(document.body.scrollWidth / 150) - 1 - newPrevClicked)
                setTempData(newTempData);
              } else{
                newPrevClicked = prev
              }
        
              return newPrevClicked; 
        });
        // if(prevClicked>=0){

        //     setTempData(carousalData.slice(0-prevClicked,Math.floor(document.body.scrollWidth/150)-1-prevClicked))
        // }
    }
    const handleNextClick = () =>{
        // setNextClicked(nextClicked+1);
        // setPrevClicked(prevClicked+1);
        setNextClicked((prev)=>{
            let newNextClicked = prev+1
        if(newNextClicked<=carousalData.length-tempdata.length){
            setPrevClicked(prevClicked+1);
            setTempData(carousalData.slice(0+newNextClicked,Math.floor(document.body.scrollWidth/150)-1+newNextClicked))
        } else{
            newNextClicked =prev
        }
        return newNextClicked
        });

        // if(nextClicked<=carousalData.length-tempdata.length){

        //     setTempData(carousalData.slice(0+nextClicked,Math.floor(document.body.scrollWidth/150)-1+nextClicked))
        // }
    }    
    return(
       <>
       <div className="text-end me-2">
       <button className="btn btn-outline-primary btn-sm" onClick={handlePreviousClick}>Previous</button>
       <button className="btn btn-outline-primary btn-sm m-2" onClick={handleNextClick}>Next</button>
       </div>
        <div className="d-flex pb-3 mb-2 flex-wrap justify-content-center">
        {
         tempdata.map((element,index)=>{
            // alert("data")
            //    if(index<Math.floor(window.screen.width/150)-1) {
                return (
                    <div className="" style={{width:"150px"}} key={element.imageId}>
                        <img src={HostUrl+element.imageId} style={{width:"100%"}}/>
                    </div>
                   )
            //    }
            })
        }
        {
            // console.log("tempCarousalData",tempCarousalData,carousalData.slice(0,Math.floor(window.screen.width/150)))
        }
            {/* <p className="text-center">This is Carousel</p> */}
            
        </div>
       </>
    )
}

export default Carousel