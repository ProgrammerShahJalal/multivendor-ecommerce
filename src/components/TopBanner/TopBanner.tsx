import React, { PureComponent } from 'react';
import './TopBanner.css'
import ps5 from './../../images/products/others/ps5-removebg-preview.png';
import bag from './../../images/products/others/images-removebg-preview.png';
import shoes from './../../images/products/others/nike-removebg-preview.png';
import { Link } from 'react-router-dom';
type Props = {}

export default class TopBanner extends PureComponent<Props> {
  render() {
    return (
		<section className="small-banner z-0">
		<div className="p-5">
			<div className="grid md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3">
				<div className="">
					<div className="sngle-banner poster-card">
						<div className='lg:pl-16'>
						<img style={{height:'225px',width:'200px'}} src={shoes} alt="/"></img>
						</div>
						<div className="content">
							<h4><b>Nike Shoes</b></h4>
							<h3>Premium<span className="span"> Black</span><br/>Up to<span className='span'> 30%</span> <span className='text-red-600'>Off</span></h3>
							<Link to="/">Shop Now</Link>
						</div>
					</div>
				</div>
				<div className="">
					<div className="sngle-banner poster-card">
					<div className='lg:pl-16'>
						<img style={{height:'225px',width:'200px'}} src={ps5} alt="/"></img>
						</div>
						<div className="content">
							<h4><b>Sony Ps5</b></h4>
							<h3>Premium <span className='span'>edition</span> <br/> up to <span className='span'> 10%</span> <span className='text-red-600'>Off</span></h3>
							<Link to="/">Shop Now</Link>
						</div>
					</div>
				</div>
        <div className="">
					<div className="sngle-banner poster-card">
					<div className='lg:pl-16'>
						<img style={{height:'225px',width:'200px'}} src={bag} alt="/"></img>
						</div>
						<div className="content">
							<h4><b>Stylish Backpack</b></h4>
							<h3>Super <span className='span'>Comfort</span> <br/> up to <span className='span'> 10%</span> <span className='text-red-600'>Off</span></h3>
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