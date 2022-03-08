import { useState } from "react";
import LottieFaq from "../Lottie/LottieFaq";


const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
              }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className=" sm:text-center">
          <h2 className="text-4xl text-black dark:text-white">Frequently Asked Question</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="text-center grid lg:grid-cols-2 xs:grid-cols-1">
        <div>
          <div>
            <LottieFaq />
          </div>
        </div>
        <div className="space-y-4 text-black dark:text-white">
          <Item className='text-black dark:text-white' title={<b>How can I check my products?</b>}>
            Confirm that the product you have bought are from unityMart. Tilt the carton check the sticker on the carton and scan the QR code using our app.
          </Item>
          <Item className='text-black dark:text-white' title={<b>How to get coupons?</b>}>
            Get coupon code and apply on you purchase for discount. Just go to coupons section than play games and collect coupons.
          </Item>
          <Item className='text-black dark:text-white' title={<b>How to track my orders?</b>}>
            Worried about your orders? Nothing to get worried just go to my orders section then just check the status. If still having confusion contact us.
          </Item>
          <Item className='text-black dark:text-white' title={<b>How to request for refund?</b>}>
            Didn't got the perfect products, you may return it we will refund you. If you just received your order just apply from my order section for refund.
          </Item>
        </div>

      </div>
    </div>
  );
};