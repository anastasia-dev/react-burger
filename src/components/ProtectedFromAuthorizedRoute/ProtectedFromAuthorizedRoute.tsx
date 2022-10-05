import {useNavigate} from "react-router-dom";
import {useEffect, FC} from "react";
import {isAuthorized} from "../../services/actions/usersAuth";
import {IProtect} from "../../interfaces/IProtect";

export const ProtectedFromAuthorizedRoute = ({ children }:IProtect) => {
    const navigate = useNavigate();

    const isAuth = isAuthorized();
    useEffect(() => {
        if (isAuth)
            navigate("/");
    }, []);

    if (isAuth) {
        return (<></>);
    } else {
        return children;
    }
};

