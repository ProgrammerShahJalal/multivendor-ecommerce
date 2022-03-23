import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
    public render() {
        return (
            <footer className=' text-white '>
                <div className='bg-blue-700 text-white text-center'>Be Clever! Get more info from our blog. <strong className="underline"><HashLink smooth to="/#blog">view details</HashLink></strong></div>
                <div className='p-10 bg-gray-900 text-gray-200 text-left'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1'>
                            <div className='mb-5'>
                                <img className='w-64' src="https://i.ibb.co/jk1QcVk/mainlogo.png" alt="" />
                                <p className='text-gray-500 w-64 text-justify text-sm'>A multi-vendor e-commerce website. Our main objective to provide best user experience and best user friendly interface.</p>
                                <p className='text-gray-500  pb-4'>Savar-1342, Dhaka
                                    <br />
                                    <strong>Phone:</strong>+01303856860 <br />
                                    <strong>Email:</strong> remote.coder.unity@gmail.com <br /></p>
                            </div>
                            <div className='mb-5'>
                                <h4 className='text-2xl pb-4'>Information</h4>
                                <hr className='mb-4 w-1/3' />
                                <div className='text-gray-500' >
                                    <div className="cursor-pointer footer-link hover:text-blue-200  pb-4"> <i className='fa fa-chevron-right text-blue-200'></i> <Link to="/home">Home</Link></div>
                                    <div className="cursor-pointer footer-link hover:text-blue-200  pb-4"> <i className='fa fa-chevron-right text-blue-200'></i><Link to="/about"> About Us</Link></div>
                                    <Link to="/team">
                                        <div className="cursor-pointer footer-link hover:text-blue-200  pb-4"> <i className='fa fa-chevron-right text-blue-200'></i> Our Team</div>
                                    </Link>
                                    <div className="cursor-pointer footer-link hover:text-blue-200  pb-4"> <i className='fa fa-chevron-right text-blue-200'></i> <Link to="/contact">Contact Us</Link></div>
                                </div>

                            </div>
                            <div className="mb-5">
                                <h4 className='text-2xl pb-4'> Our Services</h4>
                                <hr className='mb-4 w-1/3' />
                                <div className='text-gray-500'>
                                    <Link to='/offer'>
                                        <div className="cursor-pointer footer-link pb-4 hover:text-blue-200"> <i className='fa fa-chevron-right text-blue-200'></i> Special Offers</div>
                                    </Link>
                                    <Link to='/privacy-policy'>
                                        <p className="cursor-pointer footer-link hover:text-blue-200  pb-4"> <i className='fa fa-chevron-right text-blue-200'></i> Privacy & Policy</p>
                                    </Link>
                                    <Link to='/customer-service'>
                                        <p className="cursor-pointer footer-link hover:text-blue-200  pb-4"> <i className='fa fa-chevron-right text-blue-200'></i> Customer Service</p>
                                    </Link>

                                    <Link to='/terms&condition'><p className="cursor-pointer footer-link hover:text-blue-200  pb-4">  <i className='fa fa-chevron-right text-blue-200'></i> Terms & Conditions</p></Link>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img className='select-none' src="https://i.ibb.co/m9vtPBZ/ssl-commerce-1d268dce.png" alt="" />
                                <img className='select-none mt-3 rounded-xl' src="https://i.ibb.co/tM6DD0M/strip.png" alt="" />
                            </div>

                        </div>

                    </div>
                </div>
                <hr />
                <div className='w-full bg-gray-900 text-gray-500 px-10'>
                    <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                        <div className='text-center'>
                            <div>
                                © 2022 Unity Mart by  <strong className='text-blue-200'> <Link to="/team">Remote Coder Unity Team</Link> </strong>  All Rights Reserved.
                            </div>
                        </div>
                        <div className='text-center text-xl text-white'>

                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/Unity-Mart-A-Multi-vendor-E-commerce-Website-104774475481224">
                                <span className="cursor-pointer w-10 h-10 rounded-full text-blue-500 my-auto mx-1 inline-block pt-1" ><i className="fab fa-facebook p-1 my-auto"></i></span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ProgrammerShahJalal/">
                                <span className="cursor-pointer w-10 h-10 rounded-full text-blue-700 my-auto mx-1 inline-block pt-1" ><i className="fab fa-linkedin p-1 my-auto"></i></span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://twitter.com/mdshahjalal01">
                                <span className="cursor-pointer w-10 h-10 rounded-full text-blue-600 my-auto mx-1 inline-block pt-1" ><i className="fab fa-twitter p-1 my-auto"></i></span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com">
                                <span className="cursor-pointer w-10 h-10 rounded-full text-pink-600 my-auto mx-1 inline-block pt-1" ><i className="fab fa-instagram p-1 my-auto"></i></span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.youtube.com">
                                <span className="cursor-pointer w-10 h-10 rounded-full text-red-600 my-auto mx-1 inline-block pt-1" ><i className="fab fa-youtube p-1 my-auto"></i></span>
                            </a>

                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}