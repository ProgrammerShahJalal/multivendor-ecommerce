import { useState } from 'react';
import AddReview from './AddReview';

export interface IState {
    user: {
        name: string
        rating: number
        url: string
        description: string
    }[]
}

const SiteUser = () => {
    const [users, setUsers] = useState<IState["user"]>([
        {
            name: "Jamil",
            url: "https://png.pngtree.com/thumb_back/fh260/background/20201231/pngtree-path-between-red-maple-trees-image_518382.jpg",
            rating: 5,
            description: "Great Work",
        },
    ])
    console.log(users);
    const [review, setReview] = useState<IState["user"]>([]);

    console.log(review);
    return (
        <div>
            <AddReview users={users} setReview={setReview} />
        </div>
    );
};

export default SiteUser;