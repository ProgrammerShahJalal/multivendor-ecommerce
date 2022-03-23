import React from 'react'

const Collection = () => {
    return (
        <div>
            <div className="bg-white dark:bg-slate-800 text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-5 lg:py-8 lg:max-w-none">
                        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Collections</h2>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            <div className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/05/full/1636094253-2135.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover"></img>
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">

                                    <span className="absolute inset-0"></span>
                                    Men

                                </h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-white">All men accessories</p>
                            </div>

                            <div className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover"></img>
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">

                                    <span className="absolute inset-0"></span>
                                    Women

                                </h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-white">Many women accessories</p>
                            </div>

                            <div className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover"></img>
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">

                                    <span className="absolute inset-0"></span>
                                    Electronics

                                </h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-white">Huge electronics collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection