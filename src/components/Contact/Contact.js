import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ContactUsTop from '../ContactUsTop/ContactUsTop'
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('unitymart', 'unitymart_template', e.target, 'user_RpPZtlvSTQNglgNTC5W3N')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <div>
            <ContactUsTop />
            <div className="antialiased text-left w-full h-full">
                <div className='flex w-full min-h-screen justify-center items-center mb-8'>
                    <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12  rounded-xl shadow-lg text-white overflow-hidden'>
                        <div className='flex flex-col space-y-8 justify-between'>
                            <div>
                                <h2 className='font-bold text-4xl tracking-wide'>Contact Us</h2>
                                <p className='pt-2 text-cyan-100 text-sm'>Thank you for your interest in contacting Wikipedia. Before proceeding, some important disclaimers. </p>
                            </div>
                            <div className='flex flex-col space-y-6'>
                                <div className='inline-flex space-x-2 items-center'>

                                    <i className="fa-regular fa-phone text-teal-300 text-xl"></i>
                                    <span>+(880) 1763849023</span>

                                </div>
                                <div className='inline-flex space-x-2 items-center'>
                                    <i className="fa-regular fa-envelope text-teal-300 text-xl"></i><span>info@unityMart.com</span>

                                </div>
                                <div className='inline-flex space-x-2 items-center'>


                                    <i className="fa-regular fa-location-check text-teal-300 text-xl"></i>
                                    <span>24/7 Mohammadpur, Dhaka</span>

                                </div>
                            </div>
                            <div className='flex space-x-4 text-lg'>
                                <Link to="/"><i className="fab fa-facebook"></i></Link>
                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                <Link to="/"><i className="fab fa-linkedin"></i></Link>
                            </div>

                        </div>
                        <div className='relative'>
                            <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-20 '></div>
                            <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-28 '></div>
                            <div className=' relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100'>
                                <form onSubmit={sendEmail} className='flex flex-col space-y-4'>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Your Name</label>

                                        <input name='name' type="text" required={true} placeholder='Enter Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2  outline-none focus:ring-2 focus:ring-teal-300 ' />
                                    </div>
                                    <div>
                                        <label className='text-sm'>Your Email</label>

                                        <input type="email" name='user_email' required={true} placeholder='Enter Your Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
                                    </div>
                                    <div>
                                        <label className='text-sm'>Message</label>
                                        <textarea rows={4} placeholder='Write Your Comments' name='message' required={true} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
                                    </div>
                                    <button type='submit' className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 upperase text-sm'>Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>

    );
};

export default Contact;