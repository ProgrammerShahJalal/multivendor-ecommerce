import React, { PureComponent } from 'react'

type Props = {}

export default class Blog extends PureComponent<Props> {
  render() {
    return (
      
        <section>
        <h1 className='text-center text-3xl my-5'><b>Blogs</b></h1>
        <div  className='grid lg:grid-cols-2'>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  my-5">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://blog.ipleaders.in/wp-content/uploads/2019/10/trademarkregistered-598a056768e1a200116dc33a.jpg" alt="Man looking at item at a store"></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Check my products</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">How to confirm the products (For seller)</a>
            <p className="mt-2 text-slate-500">Confirm that the product you have bought are from unityMart. Tilt the carton check the sticker on the carton and scan the QR code using our app.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://www.flycart.org/media/k2/items/cache/938a195f8810cb9b31c6503221891897_XL.jpg" alt="Man looking at item at a store"></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">How to get coupons</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Get coupon codes</a>
            <p className="mt-2 text-slate-500">Get coupon code and apply on you purchase for discount. Just go to coupons section than play games and collect coupons.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  my-5">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://www.mydesignation.com/wp-content/uploads/2020/08/delivery-banner.jpg" alt="Man looking at item at a store"></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">How to track my orders</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Track your order status</a>
            <p className="mt-2 text-slate-500">Worried about your orders? Nothing to get worried just go to my orders section then just check the status. If still having confusion contact us.</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  my-5">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivUFHJ8M6iyFxI1x5DDg62VbweGyITJ9bkQ&usqp=CAU" alt="Man looking at item at a store"></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">How to request for refund</div>
            <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Product problem? get refund</a>
            <p className="mt-2 text-slate-500">Didn't got the perfect products, you may return it we will refund you. If you just received your order just apply from my order section for refund.</p>
          </div>
        </div>
      </div>
      </div>
        </section>
    )
  }
}