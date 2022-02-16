import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';



const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default UseAuth;