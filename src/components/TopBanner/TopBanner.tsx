import './TopBanner.css';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
type Props = {}

export default class TopBanner extends PureComponent<Props> {
	render() {
		return (
			<section className=" small-banner z-0">
				<div className="p-5 container mx-auto">
					<div className="grid md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3">
						<div className="main-div">

							<div className="sngle-banner text-black dark:text-white grid grid-cols-1 bg-white dark:bg-slate-800 poster-card" data-aos="fade-right"
								data-aos-anchor="#example-anchor"
								data-aos-offset="500"
								data-aos-duration="3000">
								<div className='lg:pl-24'>
									<img className='main-img' style={{ height: '205px', width: '180px', marginTop: '50px', paddingRight: '20px' }} src='https://i.ibb.co/zmwwmbz/nike.png' alt="/"></img>
									<img className='hovering-img' style={{ height: '205px', width: '180px', marginTop: '50px', paddingRight: '20px' }} src='https://i.ibb.co/By6d11S/nike.png' alt="/"></img>
								</div>
								<div className="content">
									<h4 className='text-indigo-600'><b>Nike Shoes</b></h4>
									<h3>Premium<span className="text-indigo-600"> Black</span><br />Up to<span className='text-indigo-600'> 30%</span> <span className='text-indigo-600'>Off</span></h3>
									<Link className=' hover:text-indigo-400' to="/shop">Shop Now</Link>
								</div>

							</div>
						</div>
						<div className="main-div">
							<div className="sngle-banner text-black dark:text-white grid grid-cols-1 bg-white dark:bg-slate-800 poster-card" data-aos="fade-up"
								data-aos-anchor="#example-anchor"
								data-aos-offset="500"
								data-aos-duration="3000">
								<div className='lg:pl-20'>
									<img className='main-img' style={{ height: '225px', width: '200px', paddingRight: '20px' }} src='https://i.ibb.co/Dp4BGfc/ps5.png' alt="/"></img>
									<img className='hovering-img' style={{ height: '205px', width: '170px' }} src='https://i.ibb.co/2NsD1XC/ps5-side.png' alt="/"></img>
								</div>
								<div className="content">
									<h4 className='text-indigo-600'><b>Sony Ps5</b></h4>
									<h3>Premium <span className='text-indigo-600'>edition</span> <br /> up to <span className='text-indigo-600'> 10%</span> <span className='text-indigo-600'>Off</span></h3>
									<Link className=' hover:text-indigo-400' to="/shop">Shop Now</Link>
								</div>

							</div>
						</div>
						<div className="main-div">
							<div className="sngle-banner text-black dark:text-white grid grid-cols-1 bg-white dark:bg-slate-800 poster-card" data-aos="fade-left"
								data-aos-anchor="#example-anchor"
								data-aos-offset="500"
								data-aos-duration="3000">
								<div className='lg:pl-24'>
									<img className='main-img' style={{ height: '250px', width: '150px' }} src='https://i.ibb.co/phB4crn/bag-front.png' alt="/"></img>
									<img className='hovering-img' style={{ height: '250px', width: '180px' }} src='https://i.ibb.co/Lg5nH7r/bag-back.png' alt="/"></img>
								</div>
								<div className="content">
									<h4 className='text-indigo-600'><b>Stylish Backpack</b></h4>
									<h3>Super <span className='text-indigo-600'>Comfort</span> <br /> up to <span className='text-indigo-600'> 10%</span> <span className='text-indigo-700'>Off</span></h3>
									<Link className=' hover:text-indigo-400' to="/shop">Shop Now</Link>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

		)
	}
}