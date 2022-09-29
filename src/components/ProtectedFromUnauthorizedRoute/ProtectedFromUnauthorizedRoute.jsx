import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuthorized} from "../../utils/usersAuth";

export const ProtectedFromUnauthorizedRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    let isAuth = isAuthorized();
    useEffect(() => {
        if (!isAuth)
            navigate("/login", {state: {from: location}});
    }, []);

    if (!isAuth)
        return;
    else
        return children;
};