import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ContactUsTop from '../ContactUsTop/ContactUsTop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Helmet } from 'react-helmet-async';
import OurLocation from '../Pages/OurLocation/OurLocation';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('unitymart', 'unitymart_template', e.target, 'user_RpPZtlvSTQNglgNTC5W3N')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        return (
            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Your message successfully send!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Our team will contact you as soon as possible, Thanks.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        )
    }

    return (
        <>
            <Helmet>
                <title>Contact :: Unity Mart</title>
                <meta
                    name="description"
                    content="Feel free to contact us."
                />
                <link rel="canonical" href="/contact" />
            </Helmet>
            <div>
                <ContactUsTop />
                <div>
                    {/* <Button onClick={handleOpen}>Open modal</Button> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Your message has send successfully!
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Our team member will contact you as soon as possible.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div className="antialiased text-left w-full h-full">
                    <div className='flex w-full min-h-screen justify-center items-center mb-8'>
                        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12  rounded-xl shadow-lg text-white overflow-hidden'>
                            <div className='flex flex-col space-y-8 justify-between'>
                                <div>
                                    <h2 className='font-bold text-4xl tracking-wide'>Contact Us</h2>
                                    <p className='pt-2 text-cyan-100 text-sm'>Thank you for your interest in contacting Unity Mart. You can call us by clicking the phone number. </p>
                                </div>
                                <div className='flex flex-col space-y-6'>
                                    <div className='inline-flex space-x-2 items-center'>

                                        <i className="fa-regular fa-phone text-teal-300 text-xl"></i>
                                        <a href="tel:+8801303856860">+8801303 856 860</a>

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
                                <div className=' relative z-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-gray-600 md:w-100'>
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
                                        <button onClick={handleOpen} type='submit' className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 upperase text-sm'>Send Message</button>
                                    </form>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <OurLocation />
            </div>
        </>

    );
};

export default Contact;