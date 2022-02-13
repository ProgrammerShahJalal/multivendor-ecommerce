import MobileNavigation from '../MobileNavigation/MobileNavigation';
import './Navigation.css'


const Navigation = () => {




    const dropDown = () => {
        const menuWrapper = document.querySelector('.wrapper') as HTMLElement
        menuWrapper.classList.toggle("show")
    }

    const subMenu = () => {
        const menuBar = document.querySelector('.menu-bar') as HTMLElement
        const settingDrop = document.querySelector('.setting-drop') as HTMLElement
        menuBar.style.marginLeft = '-300px'
        setTimeout(() => {
            settingDrop.style.display = "block"
        }, 100)

    }

    const subMenu2 = () => {
        const menuBar = document.querySelector('.menu-bar') as HTMLElement
        const helpDrop = document.querySelector('.help-drop') as HTMLElement
        menuBar.style.marginLeft = '-300px'
        setTimeout(() => {
            helpDrop.style.display = "block"
        }, 100)

    }

    const backSettingBtn = () => {
        const menuBar = document.querySelector('.menu-bar') as HTMLElement
        const settingDrop = document.querySelector('.setting-drop') as HTMLElement
        menuBar.style.marginLeft = '0px'
        settingDrop.style.display = "none"
    }

    const backHelpBtn = () => {
        const menuBar = document.querySelector('.menu-bar') as HTMLElement
        const helpDrop = document.querySelector('.help-drop') as HTMLElement
        menuBar.style.marginLeft = '0px'
        helpDrop.style.display = "none"
    }




    return (
        <>
            <div className="container">
                <header>
                    <div className='top-bar'>
                        <p>+8801731085996</p>
                        <p>info@unityMart.com</p>
                    </div>
                    <div className="middle-bar">
                        <div className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png" alt="logo" width={100} />
                        </div>

                        <div className="search">
                            <button className="button-search"><i className="fas fa-search"></i></button>
                            <input type="text" placeholder="What are you looking for?" className="input-search" />
                        </div>

                        <div className='user'>
                            <i className="fas fa-user-circle"></i>
                            <div>
                                <p>Hello, Sign in</p> <br />
                                <p className='create-account'>Create account</p>
                            </div>
                        </div>
                        <div className='wishlist'>
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className='cart'>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div className="bottom-bar">

                        <div className="categories">
                            <div className="nav">
                                <div onClick={() => dropDown()} className="drop-btn">
                                    Categories <span className="fas fa-caret-down"></span>
                                </div>
                                <div className="wrapper">
                                    <ul className="menu-bar" >
                                        <li><a href="/"><div className="icon"><span className='fas fa-home'></span></div>Homemade</a></li>
                                        <li className='setting-item' onClick={() => subMenu()}>
                                            <a href="#"><div className="icon"><span className='fa-solid fa-baby'></span></div>Baby <i className="fas fa-angle-right"></i> </a>
                                        </li>
                                        <li className='help-item' onClick={() => subMenu2()}>
                                            <a href="#"><div className="icon"><span className='fa-solid fa-shirt'></span></div>Clothes <i className="fas fa-angle-right"></i> </a>
                                        </li>
                                        <li><a href="/"><div className="icon"><span className='fa-solid fa-shield'></span></div>Security</a></li>
                                    </ul>
                                    {/* Settings & Privacy Menu items */}
                                    <ul className="setting-drop">
                                        <li onClick={() => backSettingBtn()} className='arrow back-help-btn'><span className="fas fa-arrow-left"></span>Baby</li>
                                        <li><a href="/"><div className="icon"><span className='fas fa-user'></span></div>Personal Info</a></li>
                                        <li>
                                            <a href="/"><div className="icon"><span className='fas fa-lock'></span></div>Password </a>
                                        </li>
                                        <li>
                                            <a href="/"><div className="icon"><span className='fas fa-address-book'></span></div>Activity log</a>
                                        </li>
                                        <li><a href="/"><div className="icon"><span className='fas fa-globe-asia'></span></div>Languages</a></li>
                                        <li><a href="/"><div className="icon"><span className='fas fa-sign-out'></span></div>Sign Out</a></li>
                                    </ul>
                                    {/* Help & support menu items */}
                                    <ul className="help-drop">
                                        <li onClick={() => backHelpBtn()} className='arrow back-help-btn'><span className="fas fa-arrow-left"></span>Clothes</li>
                                        <li><a href="/"><div className="icon"><span className='fas fa-question-circle'></span></div>Help center</a></li>
                                        <li>
                                            <a href="/"><div className="icon"><span className='fas fa-lock'></span></div>Password </a>
                                        </li>

                                        <li><a href="/"><div className="icon"><span className='fas fa-globe-asia'></span></div>Languages</a></li>
                                        <li><a href="/"><div className="icon"><span className='fas fa-sign-out'></span></div>Sign Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pages">
                            <ul>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Vendors</li>
                                <li>About us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </header>
                {/* Mobile navigation */}
                <MobileNavigation></MobileNavigation>
            </div>
        </>
    );
};

export default Navigation;