import React from 'react';

const UserMainProfile = () => {
    return (
        <div>
            <div className="grid mx-auto grid-cols-2 container px-16 gap-5">
                <div>
                <img style={{height:'250px',width:'250px'}} src="https://lh3.googleusercontent.com/a-/AOh14GiYTchFibIQmAqhwO4I6XbcqmMgJgcLyj2z5HfWHQ=s96-c" alt="" className='rounded-full' />
                <h1 className="text-2xl">Name</h1>
                <h1 className="text-sm">Occupation</h1>
                </div>
            
            <div>
                <ul>
                    <li className='text-2xl'>Male</li>
                    <li className='text-2xl'>Muslim</li>
                    <li className='text-2xl'>67 years</li>
                    <li className='text-2xl'>fdgdfg</li>
                    <li className='text-2xl'>kjchjkcv</li>
                    <li className='text-2xl'>Male</li>
                    <li className='text-2xl'>Muslim</li>
                    <li className='text-2xl'>67 years</li>
                    <li className='text-2xl'>fdgdfg</li>
                    <li className='text-2xl'>kjchjkcv</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default UserMainProfile;