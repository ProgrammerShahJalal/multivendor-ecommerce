import React, { PureComponent } from 'react';
import './BottomBanner.css'
import xbox from './../../images/products/others/xbox-removebg-preview.png';
import ps5 from './../../images/products/others/ps5-removebg-preview.png';

type Props = {}

export default class BottomBanner extends PureComponent<Props> {
  render() {
    return (
        <>
        <section style={{backgroundColor:'/f7f7f7',	margin: '20px'}} className="shop-services section home">
		<div className="container">
			<div className="grid md:grid-cols-4 lg:grid-cols-4">
				<div className="per-service">
					<div className="single-service">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
</svg>
						<h4>Free shipping</h4>
						<p>Orders over $100</p>
					</div>
				</div>
				<div className="per-service">
					<div className="single-service">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>
						<h4>Free Return</h4>
						<p>Within 30 days returns</p>
					</div>
				</div>
				<div className="per-service">
					<div className="single-service">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
						<h4>Secure Payment</h4>
						<p>100% secure payment</p>
					</div>
				</div>
				<div className="per-service">
					<div className="single-service">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
</svg>
						<h4>Best Price</h4>
						<p>Guaranteed price</p>
					</div>
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
							<h3>Color: <span className="span">White</span><br/>Up to<span className='span'> 30%</span></h3>
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
							<h3>Premium <span className='span'>edition</span> <br/> up to <span className='span'> 10%</span></h3>
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