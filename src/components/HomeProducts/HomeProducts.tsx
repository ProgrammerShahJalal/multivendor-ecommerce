import React, { PureComponent } from 'react';
import './HomeProducts.css';
type Props = {}

export default class HomeProducts extends PureComponent<Props> {
  render() {
    return (
      <div>
          <div className='container'>
    <div className="my-20 ">
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-3xl">Men's Collection</h2>
        <a href="/" className="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/lTDvq3NrTjAqXtDeg7XrQPx1LKJYA7HNR_lan4Pc5widKTkMq7GfHTfhnpOld7wfLAOJUC3pYUpD5oakY3rc36Rkr6kdGfiH4VeDMolHx6MCfwL51kLxRLQ5yuAiEWqVjaZ3zOks71PFdJCru0GprJKFh1_XjxmLR72Zd_ETyXPhiOmWhnQp1Xlxtaf5Lw4r6-j8lbRzdZFKpji9OJ_vJszHJZxcBXqcIfbJSS-nFW4WxrqgIcNq3TxEEKP7vqfLPJcPk8pjqRirTKC_9tmsMgB8VRqFGYwPlcSa_RXv8xLAKQgLkl0UFvK9l7OU0-xys5aI4lGDw-yG9QU1MeX6ZAaUVsDDtmYjQJNlUJ-jzzdrtKvOa09JlZcAmUZt0pFGomaGQqBqKVwKxH5XzkMpF9hH9WAuSbyEiaTfqpsjIGpnLq47263WzFRn54i476iiiWsf4-YiWcDU3K6491zJzyIgHABblg4cjVilFpcpJ1CfjR3kXNz5xGALqMVHHplnvUIZw-57_orIaha6tjjUupNRhuF8C5WVQzYLxchgqjMhA5LsNGUT5JgIWM_yYa3wWWiigdVW5JHb31QgV9kul_tsVKbqakid8IrEZXpVTXVjr5ZkMt-SS-pocIbfFPap28aW_kRD4a1_j2Elmp5XLy9N7ZZHgjoLHPlg_T_UPwKXCAK6k-phXJuCzs13HH63urzgYGLmXo2dLiVcEpSJe0z-=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">Mens T-Shirt</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/aFfS4c0BH4nwmN0UkRpppN47w9Gq_Y_4gsHR--bRgQlhMyvPI3H-6wKvbDXBkd6AWT6dOedfud6w290GHLllZe8WCgvz8TB3CEPGEDSATO-iaDxINOgmMAWz3qfadr8twnQrG_sd2Ta3lq4ULf3uPaJ8oGrYuCe1uJ5B2Hq81MjXZeeX0fTEghL1nTk0J1ZTpfCZAuBF22cYqIKHge-UY_tbQBwFGmgq5tAVd3lWrfBsQJOhLujesW1FPY8qCSD4TxDW4NV7qPtTH5B0JFos7dLeBwMegVrIddJLCQq0hkCiNbWoNiz9KMLQIkYkl01iB3lUB9iXL28Z_kMWLNtC2lqbz0ppFdjoKxTgfbbytGxwWFrrLAddsYoawzuCb_fVh2guHg76DRw0GCqDQ3yDZq4GPRS23dZNBnhSQUHredVGN0J4WFr5LN-h954pkx3TKzn4ZmvBG2ajOmc-FAsfEPlxL09jGJlGy4HFRBfbYZeEz0Rz1cDPlDkJXZO99qrmRN8w-N9wtpTgdrWwmScbhdydFcc3wsRz5_LcAS1UWqK4Eb6IdBOoFmAP-AtzaT04sVwTkC4b2346JuX2vRcW_sXIvbWxMNZM2Gucuz_bQ4j1_RlovyNYK8rj6L6yPKs6x-DWfDLlWcwOtSDNH2Ay_tIVUo-88N7Jr7CMP5VGenSFewrVYiRTfkB88XBQOyini_gSR6wuqivlhfFMveR6Jxrr=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">Slim Khaki Trousers</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/RB3g2kpv0OdtEnpH09_mS4hJlSACvRUiF7qzZnRNKe3B0LCkmEMz2jkl1cQVCyUWD6EbFOktlVOcMMcEsyYNBDuIn7CNr_kE4boOb6jskjUHuJM_FxDrQxMC4ap-gKC2Mk8ccM3f6FpJpgs5L0TYgdcOpmeGETbQZok6P8fjgvgvMxWvS2iATh6ZmODaTF0CxlF0JFvqjsBWMpKMbd-56bLnatYp0DFKrP4HQy6pKDEwEITcBvNvrSp7yC0hw0npVKT8Ij9XHWQroxAqZ6LoZ4s2qekgbcPuJh27xoeoYRpRweatGG0H-EhcYbbT27YvDPqabI_jw0_gL0MQ32QE7tCXHc5lGCA2eqJ8I_AKgAg7Bs9LFrkPlvGxb92Lzpob3lJAzizGn_pPU2oxYfNcjnrx-7qWDncq7ZM108ADuGRHcmWUJVaUeP0HcWyZbME3WCBzt2vQ8BxUaf_pGj2whjbV6B-6M83j2bpeR9gTjTVZw3VzsPZ_ktVnyyae-4bxGMWpAKRDuIDNCvgJEfQsvZmLbU7IdneJLbQ1LhkAL1GywlGiRivIXjbkFVmKRCVQzXLKL3K-RhxPtZW8-iH70DrbZ2Q94i1xp_NdYj_Un-0-k6s9bA0acjtwLohAG21-jbULNxg8pEKVflPxI7ZF9dTqM7v36RgG9hvywEgQiXG4jaFlIRI3SKQwqv4bXMwvlpx9sH9rrEXIyCRwkuURw1EK=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">Nike Shoes</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/aa0wIdkYzeB_khRO0iZKIP08dnnq8eFwqeYnoi4KWDz9nkAUKjNsq4LkNUwHImpje0d1PzpLgvkdx2_xFf3tbGRPuIHb0HCUWzWO9JEMKM0NioEqH-Vk9syMwQxSh0DMQynZ_5DEs_OC-mjrersmKHiqFK26WSxrP4laI1saKwTDHtIo7HtJc-SYnEawIJEz4ghP7Z5e5WLflQPxeJIFAWb0MN0BuRMXkj9r6ck-NtxriSGZ4he3OOoRDsD6cZX1-yVUFEZK09pO4wBp-Mc7PayG-_70S3F0bkfbsNPlVtH2z0y8Hl1l_p059LUYmRhLgr1Ry-p7rOQClYMDZv5fESrRPDCOiufY5YuoLFgZEaGOpnRdAj1ucp-xDQQ9HDJS6x7lB6xwTEt7EuCkieLL7qip8hNou_tRW8OySN1qSF_2g4UG_RfVGnjEXfH_O9c5yeSf1C8QFnOjod1rD5ZyVzPv4H3-upqSpLff4JpdaVYNqjn5O8GHdEg3tohZJ82cVMvLA47YphKF-78ZKh8exMFuwjY6O6-uS9vdqHJNN0jWOtooIt7g6YNXoPdD_H0wLQmbXsfjXStGG8tOwlTTJCadE3QhZIlbQIqcmuX1s7MMRKB7yWZaVhAu7zBa_hxpvm18-p1vKawgj0-DTm1bfqHPAkooIwXPQqS95QOjBl-36bW5TbTG5w4rBHsohnNsApxV3pA9w0JCG06_PCaChK-H=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">Wirst Watch</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>


    <div className="my-20 ">
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-3xl">Women's Collection</h2>
        <a href="/" className="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/f_lH0VxchfaEiLfEk-2nsKpitpNSjzJMbbHZ2xbyFVRLkx3pOjjat01flEAPUNGJkHmsJtyOuG6gx6SBS8QzE6bV5GEuoAOlw6mCq0r1y44ZpgifIF3hNcMarpek27v80EBqATUR4bhPGBjLUhKVcJYFKMY-bDzIYJ_d5m5yOO07xuSiASRVFV4Bh43ZhazDuRPAkjKQ4PhCeggZjuaHrbGr5KrFgxX7wUCMutiEWt8ZyX-7inqTE4tvpIvypPkeoY2vBpT7lHyUFMJNaFy2oSexm0Loq9GVwnouktUQm3kAAapqAFiH2KQYXon9SRP9PT159SMsrKaIw4oaN0-FxYGak7VZU9lA-c6a7UAnzIZ0UeI5IBjgnXPKUy86zVurnUP99x8YekmvxJqyjfuicWWwUj2dI5l8KBVw67p6zH62WQHpmuaITY3kaa-yzqlr7BcG2p9w4hXfATc7guPZg-dKulDfKcmvQ1pQxFmoGhJFxKMZMOJYoRUK__GKBm5XFwIW0yiSy-gOWaLEc2PlvWqt9Xnq9qFFhRY6ugCtL13Q882iBSNRQ8_HR0ZoQBpL7x4hfcybBIMGrBJvTIA4eTSeO0W1b_Gecblwdt4og6EX3pmBc9-WES6ExrKbPFd6Uk_1nWi5q2QX49bjlTdM6dKwhQ3-MX5vHHlY3zp2ZpYZYM2_eRxenjmra-c7fy6CWuhQSzaF5y5Ut33TwzEh0gam=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">V Neck Tassel Cape</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/kQpqOfCW1G1dZsjpGqCDORqvuMcsdFup19S-pyt1Ce_I0AhsTahAQXf5ayWwHAaeRfMQeaSqjpuOiQ1Pi8vnc_44Oy1NqY2rh-pG4UkXw_JcQcvqPc-zyXTzGsI6XxyQ_N6LbC7pjoqZ5D_lQfuNuJUoW7s8x8wHkMBGvVjnPVN7q9VPIp8ZmD0UCyL-UitYE77BxGUun2PzSHdGxXd-ufctJ5QD00XXbhVRgdTsgl-ROG_QZ3GzGPphcCf_1ZnohGEg6V9oUIxNKHmkVy69-7IGNYPsOAfdejoafxe3Ohv4YlhABPQRVKW7TFxkc3Jj2E6mjqh4UgukWpAvDxXY5mn50FpTaHrECwk3cZbGw1a4fIVNw7DkhqfIvzzaM_T4dUVwAvGkwWFsK0vAMpStOpuCDy2vSRJVCdnUIx_HBE7HjpHHBtOtU058LKU0dwxu-lMakV3ai79k28ZOCPleUZYNSXX1Uo7T60n0OP5u_VbkjFVtyuF_2TTNL56pTkLw72GpiSl9Z3L3Y6VyJMY52_Hc5E2zuzdMikmnLNoG9tEoNcGWMirE397zoeh9mzevCB4CRc7yU0oW8L3yJ7Bs5cSoQVfreNim3qErh41GcskE93G6XOhr0DbD04xkk3ViZkEcr7999uE1lPu0d6Nzehj-eP7NW4e7XWOyODMMpreVTytngkelqt0l-O80ZlhK6bVkvp_-7vzVvEEfdbKgMMa7=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">Printed Wrap Dress</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/q-WopkIsNhIsGiYc8Ru0ud_cPdbQSolrJp4kkK8YnuN-4rTCw6uxUmdYAbIqe_zpYvhU_qtM3eyIFqVnEng26NTmczjkY47fxZqC9PNQD-raDYF0TEmT_BVPCH2bbHAhzMddWv6G7zGmnqhEsUpoClE3YXISyZOsJuaqPXRQVbDj_TCYrnq3vq2KYne2e18rHY2qrrUTBy3UQXWrTxuC75tIcFkmGehEEVRHV2keTA6GVjH_nnf1MBMRIifOlwdxw47lCby_R692HIcVkcF3rEv9C_JxgEiguBjBmgjXwiT8ktsTcdsAEP3E_ql6dgCYvKiBmIO7j-RA3Fjnpum7-EbWJKKkESJdpOxICX4wCRUuJXKRxq0VDENjkDgHIxyJR8XuCU6uBSSSodO-EeFBV-tjNoTwTVRndNHbpBkEbGluvJ-Ls_38F1l_npUDx__y4Jy1GwX2kwzlFcb2AbnS6bIu1fmfgmOYiezbqVdyiUAGMVKLo1XlMODM1BW5iL9v4fvEpWQe0tyFotZ4Q0nHq_GNFUSASJJjuncB7nGb1cqMmXG9d1GwJlAnQnRR3Dyfo1lwL_XcCGXsBELoBE_SypgKpyRK4EOZDlx5ltSZ4a_rCCFSBD6d9PZkx5t5B68_BnnLnFFzIhsLYc6slOzXjzmllL-pxeNa4ZzwdiPCXvt3rOcefBZVGk9PFeXZESHuwPAGZ5PNgtiJnXEUOh2qaeje=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">Blue Denim Dress</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="/">
          <img alt='' src='https://lh3.googleusercontent.com/4JFN1Xi1fjgtgMwb3-JaEPILEZSbpYFKNpo0Y0CpbVeKZ4FWJKtHPMDZnl3YtsxgnNz7KHzkxcxbwKRi2rhjOrOdtmsrAwOEUDP4X-R_w0HAXg9iMNhNceAls6ebbGI-Op8NDbo6fZ1sPS7zmzxvEPkvLUO2udFb_wtdDTdLjdwBG-60Ar0qfuib1-nluK3o70ZWeutLoTXz18aLiRAopRV_SLMyqzZd7d--VgIRk2TGuBIjjTuP3wHbAUxcUj5aOb5R8S7JBpGTVYyKDY_q7z6qczLgUOJhtLOKcOqAWlQCv3Mdq4fsLkq6Vfe3_5S4fV2KV3aX-ukWspGgqCkYoniAgIOhYlQoN560pgtXH-CJcdvEFBpeQCLhPISuVq2TbLDwuda0luIO3icfa-lgZq9Au9al3ZvvNgWR5UCTUjJeRtzNFpEZjnpAnMxqWOcPPh76hWZvl3wvRpT3gDKW6SVclm5f17ebzOrJfqXp7LVId3_kCyypURxpfMCe2Jm_XwkLyLE0izFwxsWbfGgfZ9q0yhyVWP1E4huRS6hqXCgprrZCGV1ILE9ZVEHewuQHcfxG5RieW9nGbgnLcuuDl-fUHb7BKCXH_N6AweSXuMMi9KqGD7BVzcAaFw1JYMOo6opD_IcDw1Wq1rR_jdF0g0VRob8l23Z-SO20UQKBOhfbXw_lNzZRw161p__gHfu2i3ZSpflhhYdB0EX4Jg4zTjhw=w715-h893-no?authuser=0' className="image rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="/">High Waist Denim Skirt</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className="rounded-lg shadow-lg my-20 flex flex-row">
      <div className="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-extrabold mb-4">Subscribe to get our offers first</h3>
          <p className="mb-4 leading-relaxed">Want to hear from us when we have new offers? Sign up for our newsletter and we'll email you every time we have new sale offers.</p>
          <div>
            <input type="email" placeholder="Enter email address" className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4" />
            <button type="submit" className="bg-red-600 py-3 rounded-lg w-full">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
        <img alt='' src='https://lh3.googleusercontent.com/yhy69V-I3OvrGuOmAtABVzh0ioICZcNbqybEnJQGji4-X21a-R6n8UqRgYAgBVir45QYNucgVH0xxTHd3WMssNI8PeX8WJGa41WgbnMhWOyyFe0Dpzszn7p5_jdHUgBSNenJXYPPtyQcx3eLOEFN-fdFoubmtjsV24Nk3HgAWEjey-VHJnuo0nLnMKAkCsSw4Hgdse9q-O9Meg_-WYPjnHCSEzAnOdzDZ7oqixwzQm_l3ccCtc0RxeascbdNtgd7xTyJXwFq141axDPEviXupHFDqoKPZZ5l7M3QCdvi88OJJK3E9ko8nWxj0INWKSblNwq-sfAUYdNTzlwa3FXDKH8JrJSDhjTo6FLqCZlSYXbov6LZUNihB9iuoJMgA3vuG7X_KgaJQbaLWvJMt2TQU6CkCUeVgblC8X0rZUHjY33oe8JcJsyO9vI0uupoDSLcRGMRAuV6QH1HyZa5396Mzhw0GF7PgUPQ3CutH-JhRc-K4V_n455pU-RDB3UlhJNuaFm6K7S2HK_pE_wZi7tNvDG6iGJExQFdlYSdmLsWqu33HP4qHroGkuBpTv_fEZ-n0ZPA1VYZ7TbWLXZpD-r3snzXCDABV971h0EfySlJJokTyYAdBMJJC38AU1AV52LAdwiB0VRJQc6AMSiVAaBAVKS68mRNJ7jKhYQHsiaqCI-c7gkvzSeym9qm9ad2GBWJjHWi2VLz_uFpoYWR6mb6bzJd=w840-h856-no?authuser=0' className="h-96" />
      </div>
    </div>
  </div>
      </div>
    )
  }
}