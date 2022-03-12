import React, { useCallback, useRef, useContext, FC } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Watch from '../Watch/Watch';
// import UseDarkMode from '../../hooks/UseDarkMode';
import { useSelector } from 'react-redux';

import { LangContext } from '../Pages/MultiLanguage/languagecontext/lang';

interface HeaderProps {
    fixed?: boolean;
    transparent?: boolean;
}

const navigation = {

    pages: [
        { name: 'Shop', to: '/shop' },
        { name: 'About', to: '/about' },
        { name: 'Contact', to: '/contact' },
        { name: 'Dashboard', to: '/dashboard' },
    ],

    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    to: '#',
                    imageSrc: 'https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    to: '#',
                    imageSrc: 'https://img.freepik.com/free-photo/fashion-portrait-two-elegant-women-best-friends-posing-indoor-grey-wall-wearing-winter-fluffy-coat-black-casual-hat-fashionable-clothes-sisters-walking_273443-4074.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', to: '/' },
                        { name: 'Dresses', to: '/' },
                        { name: 'Pants', to: '/' },
                        { name: 'Denim', to: '/' },
                        { name: 'Sweaters', to: '/' },
                        { name: 'T-Shirts', to: '/' },
                        { name: 'Jackets', to: '/' },
                        { name: 'Activewear', to: '/' },
                        { name: 'Browse All', to: '/' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', to: '/' },
                        { name: 'Wallets', to: '/' },
                        { name: 'Bags', to: '/' },
                        { name: 'Sunglasses', to: '/' },
                        { name: 'Hats', to: '/' },
                        { name: 'Belts', to: '/' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', to: '/' },
                        { name: 'My Way', to: '/' },
                        { name: 'Re-Arranged', to: '/' },
                        { name: 'Counterfeit', to: '/' },
                        { name: 'Significant Other', to: '/' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    to: '#',
                    imageSrc: 'https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    to: '#',
                    imageSrc: 'https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', to: '/' },
                        { name: 'Pants', to: '/' },
                        { name: 'Sweaters', to: '/' },
                        { name: 'T-Shirts', to: '/' },
                        { name: 'Jackets', to: '/' },
                        { name: 'Activewear', to: '/' },
                        { name: 'Browse All', to: '/' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', to: '/' },
                        { name: 'Wallets', to: '/' },
                        { name: 'Bags', to: '/' },
                        { name: 'Sunglasses', to: '/' },
                        { name: 'Hats', to: '/' },
                        { name: 'Belts', to: '/' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', to: '/' },
                        { name: 'Counterfeit', to: '/' },
                        { name: 'Full Nelson', to: '/' },
                        { name: 'My Way', to: '/' },
                    ],
                },
            ],
        },
    ],
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
    // Multilanguage-Start
    const { state: { language }, dispatch: { setLanguage, translate } } = useContext(LangContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    let headerClass = 'header';

    if (fixed) {
        headerClass += ' header--fixed';
    }

    if (transparent) {
        headerClass += ' header--transparent';
    }

    const handleClickOutside = useCallback((e) => {
        if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
            setShowDropdown(false);
        }
    }, [showDropdown, setShowDropdown, dropdownEl]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [handleClickOutside]);

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        setLanguage(value);
    }
    // Multilanguage-End

    const [open, setOpen] = useState(false)
    const { user, logout } = UseAuth();
    const { cart } = useSelector((state: any) => state.cart)

    // const [colorTheme, setTheme] = UseDarkMode();

    const [theme, setTheme] = useState('light');
    const colorTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(theme)
        root.classList.remove(colorTheme)
    }, [theme, colorTheme]);
    return (
        <div className={headerClass}>
            <div className="bg-white dark:bg-slate-800">
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
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
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative max-w-xs w-full bg-white dark:bg-slate-800 shadow-xl pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 pt-5 pb-2 flex">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}


                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <Link to={page.to} className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                {page.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex px-4 space-x-8">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 dark:text-white border-transparent',
                                                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative text-sm">
                                                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                            </div>
                                                            <Link to={item.to} className="mt-6 block font-medium text-gray-900 dark:text-white">
                                                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                {item.name}
                                                            </Link>
                                                            <p aria-hidden="true" className="mt-1">
                                                                Shop now
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900 dark:text-white">
                                                            {section.name}
                                                        </p>
                                                        <ul aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flow-root">
                                                                    <Link to={item.to} className="-m-2 p-2 block text-gray-500">
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {
                                        user.email ? <div className="flow-root">
                                            <p onClick={logout} className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                Logout
                                            </p>
                                        </div> :
                                            <div>
                                                <div className="flow-root">
                                                    <Link to="/login" className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                        Login
                                                    </Link>
                                                </div>
                                                <div className="flow-root">
                                                    <Link to="/register" className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                        Create account
                                                    </Link>
                                                </div>
                                            </div>
                                    }

                                </div>

                                <div className="border-t border-gray-200 py-6 px-4">
                                    <Link to="/cad" className="-m-2 p-2 flex items-center">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="w-5 h-auto block flex-shrink-0"
                                        />

                                        <span className="sr-only">, change currency</span>
                                    </Link>
                                </div>

                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>



                <header className="relative bg-white dark:bg-slate-800">
                    <div className="bg-indigo-600 h-10 flex items-center justify-around text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                        <p>
                            {translate('time')}
                            {/* Let's know current time timer */}
                        </p>
                        <Watch />

                    </div>
                    <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="h-16 flex items-center">
                                <button
                                    type="button"
                                    className="bg-white dark:bg-slate-800 p-2 rounded-md text-gray-400 lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Logo */}
                                <div className="text-xl font-extrabold text-orange-500 ml-4 flex lg:ml-0">
                                    <Link to="/">Unity Mart</Link>
                                </div>

                                {/* Flyout menus */}
                                <Popover.Group className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="h-full flex space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative flex">
                                                            <Popover.Button
                                                                className={classNames(
                                                                    open
                                                                        ? 'border-indigo-600 text-indigo-600'
                                                                        : 'border-transparent text-gray-700 hover:text-gray-800 dark:text-white',
                                                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                                                )}
                                                            >
                                                                {category.name}
                                                            </Popover.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div className="absolute inset-0 top-1/2 bg-white dark:bg-slate-800 shadow" aria-hidden="true" />

                                                                <div className="relative bg-white dark:bg-slate-800">
                                                                    <div className="max-w-7xl mx-auto px-8">
                                                                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                                {category.featured.map((item) => (
                                                                                    <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                            <img
                                                                                                src={item.imageSrc}
                                                                                                alt={item.imageAlt}
                                                                                                className="object-center object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <Link to={item.to} className="mt-6 block font-medium text-gray-900 dark:text-white">
                                                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                            {item.name}
                                                                                        </Link>
                                                                                        <p aria-hidden="true" className="mt-1">
                                                                                            Shop now
                                                                                        </p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                                {category.sections.map((section) => (
                                                                                    <div key={section.name}>
                                                                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900 dark:text-white">
                                                                                            {section.name}
                                                                                        </p>
                                                                                        <ul
                                                                                            aria-labelledby={`${section.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section.items.map((item) => (
                                                                                                <li key={item.name} className="flex">
                                                                                                    <Link to={item.to} className="hover:text-gray-800 dark:text-white">
                                                                                                        {item.name}
                                                                                                    </Link>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        ))}

                                        {navigation.pages.map((page) => (
                                            <Link
                                                key={page.name}
                                                to={page.to}
                                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-white"
                                            >
                                                {page.name}
                                            </Link>
                                        ))}
                                    </div>
                                </Popover.Group>



                                <div className="ml-auto flex items-center">
                                    {/* simple dropdown */}

                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="flex text-sm focus:outline-none">
                                                <span className="sr-only">Open user menu</span>
                                                <p className='font-semi-bold dark:text-white'>Explore </p>
                                                <ChevronDownIcon className="dark:text-white w-6 h-6" aria-hidden="true" />
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
                                            <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <NavLink
                                                            to='/offer'
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Offer
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <NavLink
                                                            to='/orderTrack'
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Order Tracking
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <NavLink
                                                            to='/checkout'
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Checkout
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/team"
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Our Team
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/unitTesting"
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white cursor-pointer')}
                                                        >
                                                            Unit Testing
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/vendorLogin"
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white cursor-pointer')}
                                                        >
                                                            Become a Vendor
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>


                                </div>
                                <button onClick={() => setTheme(colorTheme)} className='h-10 w-10 bg-indigo-500 text-white flex items-center justify-center rounded-full m-2 cursor-pointer'>
                                    {
                                        colorTheme === 'light' ? (<i className="fa-light fa-lightbulb"></i>) : (<i className="fa-solid fa-moon"></i>)
                                    }
                                </button>


                                {/* <Toggle/> */}
                                <div className="ml-auto flex items-center">
                                    {/* profile dropdown */}
                                    {
                                        user.email ? <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                                        src={user.photoURL}
                                                        alt=""
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
                                                <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <NavLink
                                                                to='/profile'
                                                                className={classNames(active ? 'bg-gray-100 dark:text-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white')}
                                                            >
                                                                Your Profile
                                                            </NavLink>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#settings"
                                                                className={classNames(active ? 'bg-gray-100 dark:text-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white')}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <p
                                                                onClick={logout}
                                                                className={classNames(active ? 'bg-gray-100 dark:text-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white cursor-pointer')}
                                                            >
                                                                Sign out
                                                            </p>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>

                                            </Transition>
                                        </Menu> :
                                            <div className='flex items-center gap-5 text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-white'>
                                                <div className="flow-root">
                                                    <Link to="/login" className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                        Login
                                                    </Link>
                                                </div>
                                                <div className='flow-root'>
                                                    <Link to="/register" className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                        Create Account
                                                    </Link>
                                                </div>
                                            </div>

                                    }

                                    <div className="hidden lg:ml-8 lg:flex">
                                        <Link to="/" className="text-gray-700 hover:text-gray-800 flex items-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Bangladesh_%283-2%29.svg/1200px-Flag_of_Bangladesh_%283-2%29.svg.png?20190306092954"
                                                alt=""
                                                className="w-5 h-auto block flex-shrink-0"
                                            />
                                            {/* <span className="ml-3 block text-sm font-medium dark:text-white">BAN</span> */}
                                            <div className="px-2 text-black">
                                                <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
                                                {showDropdown && <ul className="" ref={dropdownEl}>
                                                    <li onClick={() => chooseLanguageHandler('EN')}>English</li>
                                                    <li onClick={() => chooseLanguageHandler('BN')}>Bangla</li>
                                                    <li onClick={() => chooseLanguageHandler('FR')}>French</li>
                                                </ul>
                                                }
                                            </div>
                                            <span className="sr-only">, change currency</span>
                                        </Link>
                                    </div>

                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <Link to="/" className="p-2 text-gray-400 hover:text-gray-500 dark:text-white">
                                            <span className="sr-only">Search</span>
                                            <SearchIcon className="w-6 h-6" aria-hidden="true" />
                                        </Link>
                                    </div>

                                    {/* Cart */}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Link to="/cart" className="group -m-2 p-2 flex items-center">
                                            <ShoppingBagIcon
                                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-white"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 dark:text-white dark:group-hover:text-white">{cart.length}</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>

    )
}
export default Header;