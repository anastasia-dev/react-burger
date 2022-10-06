import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuthorized} from "../../services/actions/usersAuth";
import {IProtect} from "../../interfaces/IProtect";

export const ProtectedFromUnauthorizedRoute = ({ children }: IProtect) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isAuth = isAuthorized();
    useEffect(() => {
        if (!isAuth)
            navigate("/login", {state: {from: location}});
    }, []);

    if (!isAuth)
        return (<></>);
    else
        return children;
};