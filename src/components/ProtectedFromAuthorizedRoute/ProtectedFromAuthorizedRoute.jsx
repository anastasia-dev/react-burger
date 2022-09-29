import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuthorized} from "../../utils/usersAuth";

export const ProtectedFromAuthorizedRoute = ({ children }) => {
    const navigate = useNavigate();

    let isAuth = isAuthorized();
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

