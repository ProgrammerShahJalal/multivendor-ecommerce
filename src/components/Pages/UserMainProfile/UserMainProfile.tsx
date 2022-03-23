import { Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import UseAuth from './../../../hooks/UseAuth';

const UserMainProfile = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const {user} = UseAuth();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 container px-16 gap-5">
                <div>
                <img src={user.photoURL} alt="" className='rounded-full lg:w-36 md:w-36 w-18 lg:h-36 md:h-36 h-18' />
                <h1 className="text-2xl">Name: {user.displayName}</h1>
                <p className='md:text-xl lg:text-xl sm:text-xs'>{user.email}</p>
                </div>
            
            <div>
                <ul>
                    
                    <li className='md:text-xl lg:text-xl sm:text-sm'>Phone: N/A</li>
                    <li className='md:text-xl lg:text-xl sm:text-sm'>Religion: N/A</li>
                    <li className='md:text-xl lg:text-xl sm:text-sm'>Address: N/A</li>
                    <li className='md:text-xl lg:text-xl sm:text-sm'>Age: N/A</li>
                    <li className="md:text-xl lg:text-xl sm:text-sm">Occupation: N/A</li>
                </ul>
                <button onClick={handleOpen} className='border-indigo-500 text-indigo-500 border p-1 rounded m-3'>Update profile</button>
            </div>
            
            </div>
            <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='text' type="email" />
        </div>
        <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='email' type="number" />
        </div>
        <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='email' type="number" />
        </div>
        <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='email' type="text" />
        </div>
        <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Occupation</label>
        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='email' type="text" />
        </div>
        <h1 className="block text-gray-700 text-sm font-bold mt-2 mb-1">Upload a profile image</h1>
        <div className='mt-4 flex items-center justify-center'>
        <input className='border-2 border-gray-500 border-dashed rounded p-4' aria-hidden={true} accept="image/png , image/jpeg, image/webp" type="file"/>
        </div>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default UserMainProfile;