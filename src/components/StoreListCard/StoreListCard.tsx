import * as React from 'react';
import { Link } from 'react-router-dom';


const lists = [
    {
        id: '01',
        img: 'https://media.istockphoto.com/photos/stormcloud-picture-id157527872?k=20&m=157527872&s=612x612&w=0&h=uwNkcGqAU78iyrnkbvp13TKl0U0gY5zvWwbLQmoHPGI=',
        title: 'Nikkies gift store ',
        email: 'info@unityMart.com',
        phone: '01754629370'
    },
    {
        id: '02',
        img: 'https://img.freepik.com/free-photo/bridge-crossing-lake_1088-575.jpg?w=740',
        title: 'Nikkies gift store ',
        email: 'info@unityMart.com',
        phone: '01754629370'
    },
    {
        id: '03',
        img: 'https://img.freepik.com/free-photo/bridge-crossing-lake_1088-575.jpg?w=740',
        title: 'Nikkies gift store ',
        email: 'info@unityMart.com',
        phone: '01754629370'
    },
    {
        id: '04',
        img: 'https://img.freepik.com/free-photo/bridge-crossing-lake_1088-575.jpg?w=740',
        title: 'Nikkies gift store ',
        email: 'info@unityMart.com',
        phone: '01754629370'
    },
    {
        id: '05',
        img: 'https://img.freepik.com/free-photo/bridge-crossing-lake_1088-575.jpg?w=740',
        title: 'Nikkies gift store ',
        email: 'info@unityMart.com',
        phone: '01754629370'
    },
    {
        id: '06',
        img: 'https://img.freepik.com/free-photo/bridge-crossing-lake_1088-575.jpg?w=740',
        title: 'Nikkies gift store ',
        email: 'info@unityMart.com',
        phone: '01754629370'
    }
]

export interface IAppProps {

}

const StoreListCards = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {
                    lists.map(list => <div key={list.id} className="card shadow-lg">
                        <div className="card-image border-b-2 border-blue-600 ">
                            <img style={{ height: '50%' }} src={list.img} alt="" />
                        </div>
                        <img className="w-20 h-20 ml-5" style={{ marginTop: '-40px' }} src="https://ronlado.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png" alt="" />
                        <div className="content text-left pl-5">
                            <h5 className='text-2xl font-bold text-dark ' >{list.title}</h5>
                            <p className='py-2 font-bold text-md text-gray-500'><i className="fa-solid fa-envelope text-gray-500 text-lg"></i> {list.email}</p>
                            <p className='font-bold text-md text-gray-500 '><i className="fa-solid fa-phone text-gray-500  text-lg"></i> {list.phone}</p>
                        </div>
                        <div className="button-div  flex items-end justify-end p-5 ">
                            <Link to='/vendorShop'>
                                <button className='bg-indigo-600 font-bold rounded text-white uppercase px-3 py-2 ml-5 hover:bg-sky-900'>Visit</button>
                            </Link>


                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
}
export default StoreListCards
