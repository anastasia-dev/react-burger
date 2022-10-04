import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuthorized} from "../../services/actions/usersAuth";

export const ProtectedFromAuthorizedRoute = ({ children }) => {
    const navigate = useNavigate();

    const isAuth = isAuthorized();
    useEffect(() => {
        if (isAuth)
            navigate("/");
    }, []);

    if (isAuth) {
        return;
    } else {
        return children;
    }
};

