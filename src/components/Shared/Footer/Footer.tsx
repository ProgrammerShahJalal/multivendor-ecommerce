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
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                            <div className='mb-5'>
                                <h2 className='text-2xl pb-4'>Unity Mart</h2>
                                <p className='text-gray-500 w-64 text-justify'>A multi-vendor e-commerce website. Our main objective to provide best user experience and best user friendly interface.</p>
                                <p className='text-gray-500  pb-4'>Savar-1342, Dhaka
                                    <br /> <br />
                                    <strong>Phone:</strong>+01303856860 <br /> <br />
                                    <strong>Email:</strong> remote.coder.unity@gmail.com <br /> <br /></p>
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
                            </div>

                        </div>

                    </div>
                </div>
                <hr />
                <div className='w-full bg-gray-900 text-gray-500 px-10'>
                    <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                        <div className='text-center'>
                            <div>
                                © 2022 Unity Mart by  <strong className='text-blue-200'> <Link to="/team">Unity Team</Link> </strong>  All Rights Reserved.
                            </div>
                        </div>
                        <div className='text-center text-xl text-white mb-2'>

                            <span className="cursor-pointer	 w-10 h-10 rounded-full bg-blue-900 hover:bg-rose-900 mx-1 inline-block pt-1" ><i className="fab fa-facebook"></i></span>
                            <span className="cursor-pointer	 w-10 h-10 rounded-full bg-blue-900 hover:bg-rose-900 mx-1 inline-block pt-1" ><i className="fab fa-linkedin"></i></span>
                            <span className="cursor-pointer	 w-10 h-10 rounded-full bg-blue-900 hover:bg-rose-900 mx-1 inline-block pt-1" ><i className="fab fa-twitter"></i></span>
                            <span className="cursor-pointer w-10 h-10 rounded-full bg-blue-900 hover:bg-rose-900 mx-1 inline-block pt-1" ><i className="fab fa-instagram"></i></span>

                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}
