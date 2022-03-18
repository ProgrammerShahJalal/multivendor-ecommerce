import React, { PureComponent } from 'react'

type Props = {}

export default class Stats extends PureComponent<Props> {
  render() {
    return (
        <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-white uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-white uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-white uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-white uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
      <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
          <img style={{width:'80%',height:'70%'}} src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" className="h-full xl:w-full lg:w-1/2 w-full " />
      </div>
      <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
          <div className="flex items-stretch mt-12">
              <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
              <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
          </div>
      </div>
  </div>
  {/* <section className="relative overflow-hidden rounded-lg shadow-2xl pb-80 lg:pb-0">
  <div className="p-8 ml-auto text-center lg:w-2/3 sm:p-12">
    <p className="text-sm font-semibold tracking-widest uppercase">
      Run with the pack
    </p>

    <h5 className="mt-6 font-black uppercase">
      <span className="text-5xl font-black sm:text-6xl">Get 20% off</span>
      <span className="block mt-2 text-sm">On your next order over $50</span>
    </h5>

    <a className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black" href="">
      Get Discount
    </a>

    <p className="mt-12 text-xs font-medium text-gray-400 uppercase">
      Offer valid until 24th March, 2021 *
    </p>
  </div>

  <div className="absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3">
    <img
      alt=""
      className="absolute inset-0 object-cover w-full h-full"
      src="https://www.hyperui.dev/photos/shoe-1.jpeg"
    />
  </div>
</section> */}
  </>
    )
  }
}