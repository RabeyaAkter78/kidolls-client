
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
// import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext);

    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    // if (loading) {
    //     return <Spinner animation="border" variant="secondary" />
    // }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;