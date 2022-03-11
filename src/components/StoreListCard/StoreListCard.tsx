import * as React from 'react';


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

export default class App extends React.PureComponent<IAppProps> {
    public render() {
        return (
            <div className='p-10'>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        lists.map(list => <div key={list.id} className="card shadow-lg">
                            <div className="card-image border-b-2 border-blue-600 ">
                                <img style={{ height: '50%' }} src={list.img} alt="" />


                            </div>
                            <img className="w-16 h-16 ml-5" style={{ marginTop: '-40px' }} src="https://ronlado.com/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png" alt="" />
                            <div className="content text-left pl-5">
                                <h2 className='text-3xl font-bold text-white ' style={{ marginTop: '-200px' }}>{list.title}</h2>
                                <p className='py-2 font-bold text-lg text-red-500'><i className="fa-solid fa-envelope text-red-500 text-lg"></i> {list.email}</p>
                                <p className='font-bold text-lg text-green-700 '><i className="fa-solid fa-phone text-green-700 text-lg"></i> {list.phone}</p>
                            </div>
                            <div className="button-div mt-16 flex items-end justify-end p-5 ">
                                <button className='bg-orange-600 text-white uppercase px-3 py-2 border hover:bg-sky-900'>Inquiry</button>


                                <button className='bg-orange-600 text-white uppercase px-3 py-2 ml-5 hover:bg-sky-900'>Visit</button>
                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
        );
    }
}
