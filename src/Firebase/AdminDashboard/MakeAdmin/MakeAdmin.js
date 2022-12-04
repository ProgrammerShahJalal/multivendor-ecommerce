import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://unitymart-server.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                />
                <button type='submit'>Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;