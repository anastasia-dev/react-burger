import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuthorized} from "../../services/actions/thunks/usersAuth";
import {IProtect} from "../../interfaces/IProtect";
import {ILocation} from "../../interfaces/ILocation";

export const ProtectedFromUnauthorizedRoute = ({ children }: IProtect) => {
    const navigate = useNavigate();
    const location = useLocation() as ILocation;

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