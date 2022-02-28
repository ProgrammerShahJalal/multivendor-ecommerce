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
            <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                  <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Invoice</a>
                  </li>
            </ul>
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