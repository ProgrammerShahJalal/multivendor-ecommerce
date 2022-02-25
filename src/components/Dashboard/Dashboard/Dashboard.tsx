import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <div className={isActive ? "sidebar active" : "sidebar"} >
                <div className="logo_content">
                    <div className="logo">
                        <div className="logo_name">Unity Mart</div>
                    </div>
                    <i className='fa-solid fa-bars' id="btn" onClick={toggleClass}></i>
                </div>
                <ul className="nav_list">

                    {/* <li>
                        <Link to={`/dashboard/media`}>
                            <i className="fa-solid fa-users"></i>
                            <span className="links_name">Media</span>
                        </Link>
                        <span className="tooltip">Media</span>
                    </li> */}
                    <li>
                        <Link to={`/dashboard/my-blog`}>
                            <i className="fa-solid fa-users"></i>
                            <span className="links_name">Users</span>
                        </Link>
                        <span className="tooltip">Users</span>
                    </li>
                    <li>
                        <Link to={`/dashboard/addBlog`}>
                            <i className="fa-solid fa-store"></i>
                            <span className="links_name">Vendors</span>
                        </Link>
                        <span className="tooltip">Vendors</span>
                    </li>

                    <li>
                        <Link to={`/dashboard/order-details`}>
                            <i className="fa-brands fa-blogger"></i>
                            <span className="links_name">Orders</span>
                        </Link>
                        <span className="tooltip">All Blogs</span>
                    </li>

                    <li>
                        <Link to={`/dashboard/allBlogs`}>
                            <i className="fa-brands fa-blogger"></i>
                            <span className="links_name">All Blogs</span>
                        </Link>
                        <span className="tooltip">All Blogs</span>
                    </li>
                    <li>
                        <Link to={`/dashboard/allBlogs`}>
                            <i className="fa-solid fa-plus"></i>
                            <span className="links_name">Add Blog</span>
                        </Link>
                        <span className="tooltip">Add Blog</span>
                    </li>
                    <li>
                        <Link to={`/dashboard/products`}>
                            <i className="fa-solid fa-box"></i>
                            <span className="links_name">Products</span>
                        </Link>
                        <span className="tooltip">Products</span>
                    </li>
                    {/* <li>
                        <Link to={`/dashboard/categories`}>
                            <i className="fa-solid fa-plus"></i>
                            <span className="links_name">Categories </span>
                        </Link>
                        <span className="tooltip">Categories </span>
                    </li>
                    <li>
                        <Link to={`/dashboard/attributes`}>
                            <i className="fa-solid fa-plus"></i>
                            <span className="links_name">Attributes </span>
                        </Link>
                        <span className="tooltip">Attributes </span>
                    </li> */}
                    <li>
                        <Link to={`/dashboard/addProduct`}>
                            <i className="fa-solid fa-plus"></i>
                            <span className="links_name">Add Product</span>
                        </Link>
                        <span className="tooltip">Add Product</span>
                    </li>

                    <li>
                        <Link to={`/dashboard/make-admin`}>
                            <i className="fa-solid fa-user-secret"></i>
                            <span className="links_name">Make Admin</span>
                        </Link>
                        <span className="tooltip">Make Admin</span>
                    </li>
                    <li>
                        <Link to={`/dashboard/approval`}>
                            <i className="fa-solid fa-check-to-slot"></i>
                            <span className="links_name">Approval</span>
                        </Link>
                        <span className="tooltip">Approval</span>
                    </li>



                    <li>
                        <Link to=''>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span className="links_name">Logout</span>
                        </Link>
                        <span className="tooltip">Logout</span>
                    </li>

                </ul>
                <div className="content">
                    <div className="user">
                        <div className="user_details">
                            {/* <img src="images/profile.jpg" alt="" /> */}
                            <div className="name_job">
                                <div className="name">Fathe Karim</div>
                                <div className="job">fathekarim3@gmail.com</div>
                            </div>
                        </div>
                        <i className='fa-solid fa-arrow-right-from-bracket' style={{ cursor: 'pointer' }} id="log_out" ></i>
                    </div>
                </div>
            </div>
            <div className="home_content">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;