import React from 'react';

const MakeAdmin = () => {
     const handleSubmit=(e:any)=>{
         e.preventDefault();

    }
    return (
        <div className='pb-5'>
            <div className='container mx-auto'>
            <h2 className='text-3xl font-bold mb-5 pt-12'>Make Admin</h2>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="email" required={true} placeholder="Enter Your email "className='border px-5 py-3 w-1/4 h-14'style={{outline:'none'}}/>
            <button type="submit" className='text-xl p-3 uppercase bg-red-500 text-white '>Make as Admin</button>
            
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;




