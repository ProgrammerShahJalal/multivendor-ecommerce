import * as React from 'react';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
        <footer className=' text-white '>
        <div className='bg-rose-900 text-white text-center'>Win a contest! Get this limited-edition <strong className="underline">view details</strong></div>
        <div className='p-10 bg-gray-900 text-gray-200 text-left'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='mb-5'>
                        <h2 className='text-2xl pb-4'>Unity Mart</h2>
                        <p className='text-gray-500 hover:text-yellow-500  pb-4'>24/7 Mohammadpur, Dhaka
                            <br /> <br />
                            <strong>Phone:</strong>+01763849023 <br /> <br />
                            <strong>Email:</strong> info@unityMart.com <br /> <br /></p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Information</h4>
                        <hr className='mb-4 w-1/3'/>
                        <p className='text-gray-500' >
                            <p className="footer-link hover:text-yellow-500  pb-4"> <i className='fa fa-chevron-right text-yellow-500'></i>Home</p>
                            <p className="footer-link hover:text-yellow-500  pb-4"> <i className='fa fa-chevron-right text-yellow-500'></i>About Us</p>
                            <p className="footer-link hover:text-yellow-500  pb-4"> <i className='fa fa-chevron-right text-yellow-500'></i>Delivery Information</p>
                            <p className="footer-link hover:text-yellow-500  pb-4"> <i className='fa fa-chevron-right text-yellow-500'></i>Contact Us</p>
                        </p>



                    </div>
                    <div className="mb-5">
                        <h4 className='text-2xl pb-4'> Our Services</h4>
                        <hr className='mb-4 w-1/3'/>
                        <p className='text-gray-500'>
                            <p className="footer-link pb-4 hover:text-yellow-500"> <i className='fa fa-chevron-right text-yellow-500'></i>Discount Returns</p>
                            <p className="footer-link hover:text-yellow-500  pb-4"> <i className='fa fa-chevron-right text-yellow-500'></i>Private & Policy</p>
                            <p className="footer-link hover:text-yellow-500  pb-4"> <i className='fa fa-chevron-right text-yellow-500'></i>Customer Service</p>
                            <p className="footer-link hover:text-yellow-500  pb-4">  <i className='fa fa-chevron-right text-yellow-500'></i>Terms & Conditions</p>
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className='text-2xl pb-4'>Join Our Newsletter</h4>
                        <hr className='mb-4 w-2/3' />
                        <p className='text-gray-500 pb-4'>Get instant about our new <br /> products and special promos!</p>
                        <form className='flex flex-row flex-wrap'>
                            <input className='text-gray-500 w-2/3 p-2 focus:border-yellow-500' type="text" placeholder='Enter your email' />
                            <button className='p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600'>Send</button>

                        </form>

                    </div>

                </div>

            </div>
            </div>
            <hr />
            <div className='w-full bg-gray-900 text-gray-500 px-10'>
                <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                    <div className='text-center'>
                        <div>
                            © 2022 Unity Mart by  <strong className='text-yellow-500'>Unity Team</strong> All Rights Reserved.
                        </div>
                    </div>
                    <div className='text-center text-xl text-white mb-2'>
                        
                            <span className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fab fa-facebook"></i></span>
                            <span className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fab fa-linkedin"></i></span>
                            <span className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fab fa-twitter"></i></span>
                            <span className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fab fa-instagram"></i></span>
                        
                    </div>
                   
                </div>
            </div>

        

        
    </footer>
    );
  }
}
