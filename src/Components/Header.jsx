import logo from "../Assets/Images/Logo.png"
import eaifit from "../Assets/Images/EatFit.png"
const Header=()=>{
   // let logo=`https://in.images.search.yahoo.com/images/view;_ylt=Awrx_e1WtUhmyU8uhoq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgxZDk4OTAwOTg0YjM5MjI3YzNjNWUxM2FlZDNlMWE2BGdwb3MDNDMEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogo%2Brelated%2Bto%2Beat%2Bfit%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D43&w=1500&h=1500&imgurl=lookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D446612994160454&rurl=https%3A%2F%2Fwww.facebook.com%2Featfit.tn%2F&size=30.1KB&p=logo+related+to+eat+fit&oid=81d98900984b39227c3c5e13aed3e1a6&fr2=piv-web&fr=mcafee&tt=Eat%26Fit+%7C+La+Soukra&b=0&ni=21&no=43&ts=&tab=organic&sigr=G3DLv4dOu9AK&sigb=4TgQcvssawc4&sigi=KKE2SVS4Lk6G&sigt=5K3conZGF2fP&.crumb=oVioWVyBe.y&fr=mcafee&fr2=piv-web&type=E211IN714G0`
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid px-2">
                <a className="navbar-brand" href="#"><img src={eaifit} style={{width:"100px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                    <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link">About</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link">Contact Us</a>
                    </li>  
                    <li className="nav-item ">
                    <a className="nav-link">Cart🛒</a>
                    </li>  
                    {/* <li className="nav-item  dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item">Link</a></li>
                        <li><a className="dropdown-item">Another link</a></li>
                        <li><a className="dropdown-item">A third link</a></li>
                    </ul>
                    </li> */}
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Header