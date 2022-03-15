import './VendorRegister.css'
export default function VendorRegister() {
    return (

        <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url(" + "https://i.ibb.co/dM5nhRp/3873446-removebg-preview.png" + ")" }}>

                </div>
                <div className="w-full p-8 lg:w-1/2 py-20">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Unity Mart</h2>
                    <p className="text-xl text-gray-600 text-center">Register as a vendor</p>


                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                    </div>
                    <div className="mt-8">
                        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}