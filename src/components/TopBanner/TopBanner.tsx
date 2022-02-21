import React, { PureComponent } from 'react';
import './TopBanner.css'
import { Link } from 'react-router-dom';
type Props = {}

export default class TopBanner extends PureComponent<Props> {
	render() {
		return (
			<section className="small-banner z-0">
				<div className="p-5">
					<div className="grid md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3">
						<div className="main-div">

							<div className="sngle-banner grid grid-cols-1 poster-card" data-aos="fade-right"
								data-aos-anchor="#example-anchor"
								data-aos-offset="500"
								data-aos-duration="3000">
								<div className='lg:pl-24'>
									<img className='main-img' style={{ height: '205px', width: '180px', marginTop: '50px', paddingRight: '20px' }} src='https://i.ibb.co/zmwwmbz/nike.png' alt="/"></img>
									<img className='hover-img' style={{ height: '205px', width: '180px', marginTop: '50px', paddingRight: '20px' }} src='https://i.ibb.co/By6d11S/nike.png' alt="/"></img>
								</div>
								<div className="content">
									<h4><b>Nike Shoes</b></h4>
									<h3>Premium<span className="top-span"> Black</span><br />Up to<span className='top-span'> 30%</span> <span className='text-red-700'>Off</span></h3>
									<Link to="/">Shop Now</Link>
								</div>

							</div>
						</div>
						<div className="main-div">
							<div className="sngle-banner grid grid-cols-1 poster-card" data-aos="fade-up"
								data-aos-anchor="#example-anchor"
								data-aos-offset="500"
								data-aos-duration="3000">
								<div className='lg:pl-20'>
									<img className='main-img' style={{ height: '225px', width: '200px', paddingRight: '20px' }} src='https://i.ibb.co/Dp4BGfc/ps5.png' alt="/"></img>
									<img className='hover-img' style={{ height: '205px', width: '170px' }} src='https://i.ibb.co/2NsD1XC/ps5-side.png' alt="/"></img>
								</div>
								<div className="content">
									<h4><b>Sony Ps5</b></h4>
									<h3>Premium <span className='top-span'>edition</span> <br /> up to <span className='top-span'> 10%</span> <span className='text-red-700'>Off</span></h3>
									<Link to="/">Shop Now</Link>
								</div>

							</div>
						</div>
						<div className="main-div">
							<div className="sngle-banner grid grid-cols-1 poster-card" data-aos="fade-left"
								data-aos-anchor="#example-anchor"
								data-aos-offset="500"
								data-aos-duration="3000">
								<div className='lg:pl-24'>
									<img className='main-img' style={{ height: '250px', width: '150px' }} src='https://i.ibb.co/4Mcdtv4/bag.webp' alt="/"></img>
									<img className='hover-img' style={{ height: '250px', width: '150px' }} src='https://i.ibb.co/KrpcY8B/bag-back.webp' alt="/"></img>
								</div>
								<div className="content">
									<h4><b>Stylish Backpack</b></h4>
									<h3>Super <span className='top-span'>Comfort</span> <br /> up to <span className='top-span'> 10%</span> <span className='text-red-700'>Off</span></h3>
									<Link to="/">Shop Now</Link>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

		)
	}
}