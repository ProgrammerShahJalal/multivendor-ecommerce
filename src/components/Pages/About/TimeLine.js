import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import { StarIcon } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimeLine = () => {
    return (
        <div>
            <h2 className='text-pink-600 text-center text-4xl font-bold py-4 hover:text-sky-700'>Unity Mart Help Line Infomation</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Register/Login"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="text-2xl font-bold">To use our site an user must be register and login.</h3>
                    <h4 className="font-bold">* Without login users can search and see product.</h4>
                    <h4 className="font-bold">
                        * But they can't be able to see more product and product details, to use our site properly and buy any product.
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(16, 204, 82)' }}
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="text-2xl font-bold">After register and login </h3>
                    <h4 className="text-xl font-bold">User can see product details</h4>
                    <h4 className="text-xl font-bold">
                        And add product to wishlist or directly add to cart.
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="text-2xl font-bold">If users wants to buy our product before they must be paid using our payment getway mehod</h3>
                    {/* <h4 className="font-bold">User can see product details</h4>
                    <h4 className="font-bold">
                        And add product to wishlist or directly add to cart.
                    </h4> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="text-2xl font-bold">After adding product to cart users have to give their details information. To complete the payment they need to checkout.</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(16, 204, 82)' }}
                    date="April 2013"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="text-2xl font-bold"> After completing the payment, order will be successful and get a successfull message.</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="text-2xl font-bold">If users are logged in they can go to the dashboard and get more services.</h3>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="text-2xl font-bold">If users want to sell their products, they can do using our vendor services</h3>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine;