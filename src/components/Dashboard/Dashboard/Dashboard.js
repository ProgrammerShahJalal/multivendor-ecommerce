import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import './Dashboard.css'


function Dashboard() {
    const [isTrue, setIsTrue] = useState(false)
    const toggleHamBurgerMenu = () => {
        setIsTrue(!isTrue);
    };
    const { user, logout, userDetails } = UseAuth()

    const subMenuToggle = (e) => {
        e.currentTarget.classList.toggle('showMenu');
    }
    return (
        <div>
            <div className={`sidebar ${isTrue ? 'close' : ''}`}>
                <div className="logo-details">

                    <i onClick={toggleHamBurgerMenu} className='bx bx-menu text-white cursor-pointer'></i>
                    <span className="logo_name">
                        <img src='https://i.ibb.co/jk1QcVk/mainlogo.png' alt='Unity Mart' />
                    </span>

                </div>
                <ul className="nav-links" >
                    <li>
                        <Link to={`/dashboard`}>
                            <i className='bx bx-grid-alt'></i>
                            <span className="link_name">Dashboard</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><Link className="link_name" to={`/dashboard/products`}>Products</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={`/dashboard/media`}>
                            <i className="fa-regular fa-folder-image"></i>
                            <span className="link_name">Media</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><Link className="link_name" to={`/dashboard/media`}>Media</Link></li>
                        </ul>

                    </li>
                    <li onClick={subMenuToggle} className="">
                        <div className="iocn-link">
                            <Link to={`/dashboard/blogs-dashboard`}>
                                <i className='bx bx-collection'></i>
                                <span className="link_name">Blogs</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to={`/dashboard/addBlog`}>Blogs</Link></li>
                            <li><Link to={`/dashboard/add-blog`}>Add Blog</Link></li>
                            <li><Link to={`/dashboard/blogs`}>Blogs</Link></li>
                        </ul>

                    </li>
                    {userDetails.email && userDetails.role === 'admin' ? <li onClick={subMenuToggle} className="">
                        <div className="iocn-link">
                            <Link to={`/dashboard/affiliate`}>
                                <i className="fa-regular fa-link"></i>
                                {/* <i className='bx bx-collection'></i> */}
                                <span className="link_name">Affiliate</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to={`/dashboard/affiliate-dashboard`}>Affiliate</Link></li>
                            <li><Link to={`/dashboard/affiliate-dashboard`}>Dashboard</Link></li>
                            <li><Link to={`/dashboard/affiliate-links`}>Affiliate Links</Link></li>
                            {/* <li><Link to={`/dashboard/affiliate-links`}>Withdraw</Link></li> */}
                        </ul>


                    </li> : ''}

                    <li onClick={subMenuToggle} className="">
                        <div className="iocn-link">
                            <Link to={`/dashboard/products`}>
                                <i className="fa-regular fa-shirt"></i>
                                <span className="link_name">Products</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to={`/dashboard/Products`}>Products</Link></li>
                            <li><Link to={`/dashboard/products`}>Products</Link></li>
                            <li><Link to={`/dashboard/addProduct`}>Add Product</Link></li>
                            <li><Link to={`/dashboard/categories`}>Categories</Link></li>
                            <li><Link to={`/dashboard/attributes`}>Attributes</Link></li>
                        </ul>
                    </li>
                    <li >
                        <Link to={`/dashboard/orders`}>
                            <i className="fa-regular fa-arrow-up-square-triangle"></i>
                            <span className="link_name">Orders</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><Link className="link_name" to={`/dashboard/orders`}>Orders</Link></li>
                        </ul>
                    </li>
                    {userDetails.email && userDetails.role === 'admin' ? <li>
                        <Link to={`/dashboard/vendors`}>
                            <i className="fa-light fa-screen-users"></i>
                            <span className="link_name">Vendors</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><Link className="link_name" to={`/dashboard/vendors`}>Vendors</Link></li>
                        </ul>
                    </li> : ''}
                    {userDetails.email && userDetails.role === 'admin' ? <li >
                        <Link to={`/dashboard/users`}>
                            <i className="fa-light fa-users"></i>
                            <span className="link_name">Users</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><Link className="link_name" to={`/dashboard/vendors`}>Users</Link></li>
                        </ul>
                    </li> : ''}
                    <li onClick={() => logout()}>
                        <Link to="/">
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className="link_name">Logout</span>
                        </Link>
                        <ul onClick={() => logout()} className="sub-menu blank">
                            <li><Link className="link_name" to="/">Logout</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content mr-5">
                                <img src={user.photoURL} alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">{user.displayName}</div>
                                <div className="job">{user.email}</div>
                            </div>
                            <i className='bx bx-log-out' onClick={() => logout()}></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <div className='container mx-auto'><Outlet></Outlet>
                    {/* <DataChart/>
                <LineCharts/> */}
                </div>
            </section>

        </div>
    );
}

export default Dashboard;