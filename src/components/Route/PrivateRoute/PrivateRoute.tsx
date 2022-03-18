import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";


function PrivateRoute({ children }: any) {
    const { user, isLoading } = UseAuth()
    const location = useLocation();

    if (isLoading) {
        return <span className='flex justify-center'><CircularProgress color="inherit" /></span>

    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    // if (user.email === undefined) {
    //     console.log('i am able to log bro');
    //     return <Navigate to="/login" state={{ from: location }} />;
    // }
    // return children;

}

export default PrivateRoute;