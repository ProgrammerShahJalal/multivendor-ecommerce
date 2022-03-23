import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import ScrollToTop from 'react-scroll-to-top'
// import ProductSearchBar from '../Pages/ProductSearchBar/ProductSearchBar';
import Men from '../CollectionGrid/Men/Men';
import Women from '../CollectionGrid/Women/Women'
import Kids from '../CollectionGrid/Kids/Kids'
import Mens from './../ListView/Men';
import Womens from './../ListView/Women';
import Kid from './../ListView/Kids';
import Collection from './Collection'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [gridShow, setGridShow] = useState(true);
  const [menChecked, setMenChecked] = useState(true);
  const [womenChecked, setWomenChecked] = useState(true);
  const [kidChecked, setKidChecked] = useState(true);
  const handleMenChange = () => {
    setMenChecked(!menChecked);
    return;
  };
  const handleWomenChange = () => {
    setWomenChecked(!womenChecked);
    return;
  };
  const handleKidChange = () => {
    setKidChecked(!kidChecked);
    return;
  };
  return (
    <div className="bg-white dark:bg-slate-800">
      <Collection />
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <Disclosure as="div" className="border-b border-gray-200 p-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white dark:bg-slate-800 text-black dark:text-white w-full flex items-center justify-between text-sm">
                            <span className="font-medium text-gray-900 dark:text-white">Categories</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-black dark:text-white">
                              <input
                                type="checkbox"
                                checked={menChecked}
                                onChange={handleMenChange}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="cat-1 pl-1">Men</label>
                            </div>
                            <div className="flex items-center gap-2 text-black dark:text-white">
                              <input
                                type="checkbox"
                                checked={womenChecked}
                                onChange={handleWomenChange}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="cat-1 pl-1">Women</label>
                            </div>
                            <div className="flex items-center gap-2 text-black dark:text-white">
                              <input
                                type="checkbox"
                                checked={kidChecked}
                                onChange={handleKidChange}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="cat-1 pl-1">Kid</label>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-end justify-end pt-24 pb-6 border-b border-gray-200 ">
            {/* <ProductSearchBar /> */}
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div className="mx-2 flex items-end justify-end content-end gap-2">
                <button onClick={() => setGridShow(true)} className={gridShow === true ? 'bg-indigo-500 w-8 h-8 rounded-sm text-white p-2' : 'text-indigo-500 w-8 h-8 border-indigo-500 rounded-sm border p-2'} type="button">
                  <i className="fa-thin fa-grid flex items-center justify-center object-contain"></i>
                </button>
                <button onClick={() => setGridShow(false)} className={gridShow === false ? 'bg-indigo-500 w-8 h-8 rounded-sm text-white' : 'text-indigo-500 border w-8 h-8 border-indigo-500 rounded-sm'} type="button">
                  <i className="fa-thin fa-list flex items-center justify-center object-contain"></i>
                </button>
              </div>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="text-slate-800 dark:text-white">{category.name}</a>
                    </li>
                  ))}
                </ul>

                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white dark:bg-slate-800 text-black dark:text-white w-full flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-900 dark:text-white">Categories</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <input
                              type="checkbox"
                              checked={menChecked}
                              onChange={handleMenChange}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="cat-1 pl-1">Men</label>
                          </div>
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <input
                              type="checkbox"
                              checked={womenChecked}
                              onChange={handleWomenChange}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="cat-1 pl-1">Women</label>
                          </div>
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <input
                              type="checkbox"
                              checked={kidChecked}
                              onChange={handleKidChange}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="cat-1 pl-1">Kid</label>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white dark:bg-slate-800 text-black dark:text-white w-full flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-900 dark:text-white">Size</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="cat-1 pl-1">XL</label>
                          </div>
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="cat-1 pl-1">XXL</label>
                          </div>
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <input
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="cat-1 pl-1">SM</label>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white dark:bg-slate-800 text-black dark:text-white w-full flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-900 dark:text-white">Color</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="flex gap-2">
                          <div className="color-selctor">
                            <button className='w-5 h-5 bg-red-600 focus:ring-offset-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none active:bg-red-700'></button>
                          </div>
                          <div className="color-selctor">
                            <button className='w-5 h-5 bg-green-600 focus:ring-offset-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none active:bg-green-700'></button>
                          </div>
                          <div className="color-selctor">
                            <button className='w-5 h-5 bg-blue-600 focus:ring-offset-2 focus:ring-1 focus:ring-indigo-500 focus:outline-none active:bg-blue-700'></button>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>

              {/* Product grid */}
              <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: 15, backgroundColor: '#7209b7' }} smooth color='#ffffff' top={20} />
              <div className='lg:col-span-3'>
                {
                  gridShow ?
                    <div>
                      {
                        menChecked && <Men />
                      }
                      {
                        womenChecked && <Women />
                      }
                      {
                        kidChecked && <Kids />
                      }

                      {
                        kidChecked === false && menChecked === false && kidChecked === false &&
                        <div>
                          <Men />
                          <Women />
                          <Kids />
                        </div>
                      }
                    </div>
                    // <GridView />
                    :
                    <div>
                      {
                        menChecked && <Mens />
                      }
                      {
                        womenChecked && <Womens />
                      }
                      {
                        kidChecked && <Kid />
                      }

                      {
                        kidChecked === false && menChecked === false && kidChecked === false &&
                        <div>
                          <Mens />
                          <Womens />
                          <Kid />
                        </div>
                      }
                    </div>
                  // <ListView />
                }
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
