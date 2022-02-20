/* eslint-disable react-hooks/rules-of-hooks */
import React, { PureComponent } from 'react';
import './BottomBanner.css';
import xbox from './../../images/products/others/xbox-removebg-preview.png';
import ps5 from './../../images/products/others/ps5-removebg-preview.png';

type Props = {}

export default class BottomBanner extends PureComponent<Props> {
	render() {
		return (
			<>
				<section style={{ margin: '50px' }} className="shop-services section home">
					<div className="container">
						<div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 ">
							<div className="bg-white per-service mx-3">
								<i className="fa-regular fa-truck-fast"></i>
								<h4><b>Free shipping</b></h4>
								<p>Orders over $100</p>
							</div>
							<div className="bg-white per-service mx-3">
								<i className="fa-regular fa-sync-alt"></i>
								<h4><b>Free Return</b></h4>
								<p>Within 30 days returns</p>
							</div>
							<div className="bg-white per-service mx-3">
								<i className="fa-regular fa-lock"></i>
								<h4><b>Secure Payment</b></h4>
								<p>100% secure payment</p>
							</div>
							<div className="bg-white lg:mt-2 per-service mx-3">
								<i className="fa-regular fa-tag"></i>
								<h4><b>Best Price</b></h4>
								<p>Guaranteed price</p>
							</div>
						</div>
					</div>
				</section>
				<section className="midium-banner">
					<div className="container mx-auto">
						<div className="grid md:grid-cols-2 lg:grid-cols-2">
							<div className="col">
								<div className="single-banner">
									<div className='lg:pl-40'>
										<img src={xbox} alt="/"></img>
									</div>
									<div className="content">
										<h5>Xbox Microsoft Edition</h5>
										<h3>Color: <span className="span">White</span><br />Up to<span className='span'> 30%</span></h3>
										<a href="/">Shop Now</a>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="single-banner">
									<div className='lg:pl-40'>
										<img src={ps5} alt="/"></img>
									</div>
									<div className="content">
										<h5>Sony Ps5</h5>
										<h3>Premium <span className='span'>edition</span> <br /> up to <span className='span'> 10%</span></h3>
										<a href="/" className="btn">Shop Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}