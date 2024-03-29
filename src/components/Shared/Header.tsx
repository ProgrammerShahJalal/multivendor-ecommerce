import React, { useCallback, useRef, useContext, FC } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, HeartIcon, MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
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
        { name: 'Home', to: '/home' },
        { name: 'Shop', to: '/shop' },
        { name: 'About', to: '/about' },
        { name: 'Contact', to: '/contact' },
        { name: 'Vendors', to: '/vendors' },
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
    const [isVendorProfileCompleted, setIsVendorProfileCompleted] = useState<any>([])
    const [isLoading, setIsLoading] = useState<any>(false)
    const { user, logout } = UseAuth();
    const { cart } = useSelector((state: any) => state.cart)
    const { wishlist } = useSelector((state: any) => state.wishlist)
    const userDetails = localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem('userDetails') || '{}') : []
    useEffect(() => {
        if (user.email) {
            setIsLoading(true)
            fetch(`https://unitymart-admin.onrender.com/users/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("userDetails", JSON.stringify(data))
                }).finally(() => setIsLoading(false))
        }
    }, [user])
    console.log(userDetails, 'userDetails from header');


    const [theme, setTheme] = useState('light');
    const colorTheme = theme === 'light' ? 'dark' : 'light';
    console.log(isVendorProfileCompleted[0]?.isProfileCompleted, 'isVendorProfileCompleted');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(theme)
        root.classList.remove(colorTheme)
    }, [theme, colorTheme]);
    console.log(isVendorProfileCompleted);

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

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {isLoading ? <h2>...</h2> : userDetails?.role === "admin" || userDetails?.role === "vendor" || userDetails?.role === "affiliate" ? <Link className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-white" to="/dashboard/dashboardGlance">Dashboard</Link> : ""}
                                    {
                                        user.email ? <div className="flow-root">
                                            <Link to="/"> <p onClick={() => logout()} className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                Logout
                                            </p></Link>
                                        </div> :
                                            <div>
                                                <div className="flow-root">
                                                    <Link to="/login" className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                        Login
                                                    </Link>
                                                </div>
                                            </div>
                                    }

                                </div>

                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>



                <header className="relative bg-white dark:bg-slate-800">
                    <div className="bg-indigo-600 h-10 flex items-center justify-around text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                        <p>
                            {translate('time')}
                            {/* Let's know the current time */}
                        </p>
                        <Watch />

                    </div>
                    <div className="bg-gray-200 h-10 flex items-center justify-end lg:justify-between text-sm font-medium px-4 sm:px-6 lg:px-8">
                        <div className='hidden lg:block'>
                            <div className='flex justify-start items-center'>
                                <NavLink
                                    to='/orderTrack'
                                    className='block px-4 py-2 text-sm text-black'
                                >
                                    Order Tracking
                                </NavLink>
                                <NavLink
                                    to='/checkout'
                                    className='block px-4 py-2 text-sm text-black'
                                >
                                    Checkout
                                </NavLink>
                                <NavLink
                                    to='/offer'
                                    className='block px-4 py-2 text-sm text-black'
                                >
                                    Offer
                                </NavLink>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <button onClick={() => setTheme(colorTheme)} className='h-8 w-8 bg-indigo-500 text-white flex items-center justify-center rounded-full m-2 cursor-pointer'>
                                {
                                    colorTheme === 'light' ? (<i className="fa-light fa-lightbulb"></i>) : (<i className="fa-solid fa-moon"></i>)
                                }
                            </button>
                            {/* Cart */}
                            <div className="ml-4 flow-root lg:ml-6">
                                <Link to="/cart" className="group -m-2 p-2 flex items-center">
                                    <ShoppingBagIcon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </Link>
                            </div>
                            {/* Wishlist */}
                            <div className="ml-4 flow-root lg:ml-6">
                                <Link to="/wishlist" className="group -m-2 p-2 flex items-center">
                                    <HeartIcon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{wishlist.length}</span>
                                    <span className="sr-only">items in wishlist, view list</span>
                                </Link>
                            </div>

                            {/* multi-languages */}

                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="flex text-sm focus:outline-none">
                                        <span className="sr-only">Open user menu</span>
                                        <p className='font-semi-bold'>Language </p>
                                        <ChevronDownIcon className="w-6 h-6" aria-hidden="true" />
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
                                    <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1  ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-300">

                                        <Menu.Item>
                                            {({ active }) => (
                                                <p
                                                    onClick={() => chooseLanguageHandler('EN')}
                                                    className={classNames(active ? 'bg-gray-300 hover:bg-gray-200 cursor-pointer' : '', 'block px-4 py-2 text-sm text-black cursor-pointer')}
                                                >
                                                    English
                                                </p>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p
                                                    onClick={() => chooseLanguageHandler('BN')}
                                                    className={classNames(active ? 'cursor-pointer bg-gray-300 hover:bg-gray-200' : '', 'block px-4 py-2 text-sm text-black cursor-pointer')}
                                                >
                                                    Bangla
                                                </p>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p
                                                    onClick={() => chooseLanguageHandler('FR')}
                                                    className={classNames(active ? 'cursor-pointer bg-gray-300 hover:bg-gray-200' : '', 'block px-4 py-2 text-sm text-black cursor-pointer')}
                                                >
                                                    Franch
                                                </p>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
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
                                    <Link to="/">
                                        <img className='w-60' src='https://i.ibb.co/jk1QcVk/mainlogo.png' alt='Unity Mart logo' />
                                    </Link>
                                </div>

                                {/* Flyout menus */}
                                <Popover.Group className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="h-full flex space-x-8">


                                        {navigation.pages.map((page) => (
                                            <Link
                                                key={page.name}
                                                to={page.to}
                                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-white"
                                            >
                                                {page.name}
                                            </Link>
                                        ))}
                                        {isLoading ? <h2>...</h2> : userDetails?.role === "admin" || userDetails?.role === "vendor" || userDetails?.role === "affiliate" ? <Link className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-white" to="/dashboard/dashboardGlance">Dashboard</Link> : ""}
                                    </div>
                                </Popover.Group>



                                <div className="ml-auto flex items-center">
                                    {/* simple explore dropdown */}

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
                                                            to="/orderTrack"
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Order Tracking
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/offer"
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Special offer
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/checkout"
                                                            className={classNames(active ? 'bg-gray-100 dark:bg-gray-800' : '', 'block px-4 py-2 text-sm text-black dark:text-white')}
                                                        >
                                                            Checkout
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


                                {/* <Toggle/> */}
                                <div className="ml-auto flex items-center">
                                    {/* profile dropdown */}
                                    {
                                        user.email ? <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="inline-block lg:w-12 lg:h-12 md:h-12 md:w-12 sm:w-8 sm:h-8  rounded-full ring-2 ring-white"
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
                                                                to='/profile/profile'
                                                                className={classNames(active ? 'bg-gray-100 dark:text-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white')}
                                                            >
                                                                Your Profile
                                                            </NavLink>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link to="/login" className="-m-2 p-2 block font-medium text-gray-900 dark:text-white">
                                                                <p
                                                                    onClick={logout}
                                                                    className={classNames(active ? 'bg-gray-100 dark:text-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-white cursor-pointer')}
                                                                >
                                                                    Sign out
                                                                </p>
                                                            </Link>
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
                                            </div>

                                    }

                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <Link to="/searchField" className="p-2 text-gray-400 hover:text-gray-500 dark:text-white">
                                            <span className="sr-only">Search</span>
                                            <SearchIcon className="w-6 h-6" aria-hidden="true" />
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