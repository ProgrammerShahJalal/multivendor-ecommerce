import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

type NewUser = {
    email: string,
    password: string,
}

const LoginForm = () => {
    const [newUser, setNewUser] = useState<NewUser>({
        email: '',
        password: ''
    })

    const { SignIn, user, error } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleValues = (e: any) => {
        const field = e.target.name;
        const value = e.target.value
        const user: any = { ...newUser }
        user[field] = value
        setNewUser(user)

    }

    const handleRegister = (e: any) => {
        e.preventDefault()
        SignIn(newUser.email, newUser.password, location, navigate)
        console.log('user name', newUser.email, newUser.password);
    }

    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1 ">
                <div className="max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto">
                    <div className="relative h-auto">
                        <svg className="absolute -top-20 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                        <div className="absolute bottom-5 right-2">
                            <a href="#" className="block transition hover:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-10 pt-4 pb-8 rounded-3xl shadow-xl">
                        <div className="mx-auto text-center">
                            <h1 className="text-4xl text-gray-800">Login</h1>
                            <p className="mt-4">Login and enjoy our products</p>
                        </div>
                        <div className="flex items-center justify-around mt-6">
                            <div className="w-14 h-14 text-center rounded-full bg-blue-500 text-white saturate-200 transition-all hover:bg-blue-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-facebook-f fa-lg "></i>
                                </a>
                            </div>
                            <div className="w-14 h-14 text-center rounded-full bg-red-500 text-white saturate-100 transition-all hover:bg-red-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-google fa-lg"></i>
                                </a>
                            </div>
                            <div className="w-14 h-14 text-center rounded-full bg-indigo-500 text-white saturate-100 transition-all hover:bg-indigo-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-twitch fa-lg"></i>
                                </a>
                            </div>
                            <div className="w-14 h-14 text-center rounded-full bg-green-500 text-white saturate-100 transition-all hover:bg-green-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-line fa-lg"></i>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center my-6">
                            <hr className="flex-1" />
                            <span className="px-4 text-sm text-gray-400">Or continue with</span>
                            <hr className="flex-1" />
                        </div>

                        <form onSubmit={handleRegister} >

                            <div className="mt-10 relative">
                                <input id="email" name="email" type="text" className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600" placeholder="willPig@tailwind.com" onChange={handleValues} />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm">Email</label>
                            </div>
                            <div className="mt-10 relative">
                                <input id="password" type="password" name="password" className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600" placeholder="Password" onChange={handleValues} />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm">Password</label>
                            </div>

                            {error && <p className='text-red-600 mt-3'>{error}</p>}
                            <button type="submit" className="w-full mt-14 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none">Sign In</button>
                            <p className="text-center text-sm text-gray-400 mt-4">Don't have an account ? <Link to="/register" className="font-semibold text-purple-600 hover:underline">Register</Link></p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;