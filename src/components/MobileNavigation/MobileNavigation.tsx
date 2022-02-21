import { Link, useLocation } from 'react-router-dom';
import './MobileNavigation.css'




export default function MobileNavigation() {

    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (<>
        <div className="top-mobile-navigation">
            <div id="mobileNav">
                <input type="checkbox" id="top-nav" />
                <span className="hamburgerspan"></span>
                <span className="hamburgerspan"></span>
                <span className="hamburgerspan"></span>
                <div id="menu-cont-1">
                    <ul className="menu-ul">
                        <li className="m-nav-item"> item 1</li>
                        <li className="m-nav-item sub-menu"> item 2
                            <input type="checkbox" id="menu-1" />
                            <div id="menu-cont-2">
                                <ul className="menu-ul">
                                    <label className="menu-label" htmlFor="menu-1">Item 2</label>
                                    <li className="m-nav-item">item 2-1</li>
                                    <li className="m-nav-item">item 2-2</li>
                                    <li className="m-nav-item">item 2-3</li>
                                    <li className="m-nav-item">item 2-4</li>
                                </ul>
                            </div>
                        </li>
                        <li className="m-nav-item"> item 3</li>
                        <li className="m-nav-item"> item 4</li>
                        <li className="m-nav-item"> item 5</li>
                    </ul>
                </div>
            </div>
            <div className="mobile-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png" alt="logo" width={100} />
            </div>

        </div>
        <div className="m-search">

            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>

        </div>



        <div className='mobile-navigation'>
            <ul>
                <li className={splitLocation[1] === "" ? "active m-list" : "m-list"}>

                    <Link to="/">
                        <span className='m-icon'><i className="fa-solid fa-house"></i></span>
                        <span className='m-text'>Home</span>
                    </Link>
                </li>

                <li className={splitLocation[1] === "shop" ? "active m-list" : "m-list"} >
                    <Link to="/shop">
                        <span className='m-icon'><i className="fa-solid fa-shop"></i></span>
                        <span className='m-text'>Shop</span></Link>
                </li>

                <li className={splitLocation[1] === "vendors" ? "active m-list" : "m-list"}>
                    <Link to="/vendors"><span className='m-icon'><i className="fa-solid fa-store"></i></span>
                        <span className='m-text'>Vendors</span></Link>
                </li>
                <li className={splitLocation[1] === "about" ? "active m-list" : "m-list"}>
                    <Link to="/about"><span className='m-icon'><i className="fa-solid fa-address-card"></i></span>
                        <span className='m-text'>About us</span></Link>
                </li>
                <li className={splitLocation[1] === "contact" ? "active m-list" : "m-list"}>
                    <Link to="/contact"><span className='m-icon'><i className="fa-solid fa-headset"></i></span>
                        <span className='m-text'>Contact Us</span></Link>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    </>);
}