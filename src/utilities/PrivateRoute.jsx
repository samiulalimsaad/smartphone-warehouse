import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase.init";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    if ((!user || !user?.emailVerified) && !loading) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
