import React, { useState } from 'react';
import { IState as Props } from "./SiteUser";
// import axios from 'axios';

interface IProps {
    users: Props["user"]
    setReview: React.Dispatch<React.SetStateAction<Props["user"]>>
}


const AddReview: React.FC<IProps> = ({ users, setReview }) => {

    const [input, setInput] = useState({
        name: "",
        rating: "",
        description: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }


    const handleClick = (): void => {
        if (
            !input.name ||
            !input.rating

        ) {
            return
        }
        setReview([
            // ...users,

            {
                name: input.name,
                rating: parseInt(input.rating),
                url: input.img,
                description: input.description,
            }
        ])
        console.log("users", users);
    }

    // const onSubmit = (data:any) => {
    // data.date = new Date().toLocaleDateString();
    //     axios.post('https://morning-inlet-49130.herokuapp.com/reviews', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Added Successfully');
    //             }
    //         })
    // }

    return (
        <div className="container mx-auto w-full py-5">
            <h1 className='text-2xl text-center font-bold text-gray-800 bg-purple-500 uppercase py-4 rounded-md'>Put Your Review here</h1>
            <div className='bg-blue-200 rounded-md'>
                <div className='w-96 flex flex-col mx-auto '>
                    <input
                        type="text" placeholder='Name' className="border-solid border-2 border-indigo-600 w-full rounded-full text-center py-2 my-3"
                        value={input.name}
                        onChange={handleChange}
                        name="name" />

                    <input
                        type="number" placeholder="Rating" className="border-solid border-2 border-indigo-600 w-full rounded-full text-center py-2 my-3"
                        value={input.rating}
                        onChange={handleChange}
                        name="rating" />

                    <input
                        type="text" placeholder="Image-Url" className="border-solid border-2 border-indigo-600 w-full rounded-full text-center py-2 my-3"
                        value={input.img}
                        onChange={handleChange}
                        name="img" />

                    <textarea
                        placeholder="Descroption" className="border-solid border-2 border-indigo-600 w-full rounded-full text-center text-black py-3 my-3"
                        value={input.description}
                        onChange={handleChange}
                        name="description" />

                    <button className="bg-pink-500 border-solid border-2 border-indigo-600 w-full rounded-full text-xl font-bold text-center text-white py-1 my-3" onClick={handleClick} type="button">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddReview;
