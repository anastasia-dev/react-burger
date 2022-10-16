import React from 'react';
import style from "./App.module.css";
import {Routes, Route, useLocation } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import NotFound from "../../pages/NotFound/NotFound";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Home from "../Home/Home";
import OrderHistory from "../../pages/OrderHistory/OrderHistory";
import ProfileOrderHistory from "../../pages/Profile/ProfileOrderHistory/ProfileOrderHistory";
import {ProtectedFromUnauthorizedRoute} from "../ProtectedFromUnauthorizedRoute/ProtectedFromUnauthorizedRoute";
import {ProtectedFromAuthorizedRoute} from "../ProtectedFromAuthorizedRoute/ProtectedFromAuthorizedRoute";
import {getIngredients} from "../../services/actions/thunks/getIngredients";
import IngredientDetailsModal from "../BurgerIngredients/IngredientDetailsModal/IngredientDetailsModal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useAppDispatch } from '../../services/hooks';
import { ILocation } from '../../interfaces/ILocation';
import OrderHistoryDetails from '../../pages/OrderHistory/OrderHistoryDetails/OrderHistoryDetails';
import OrderFeedItemDetailsModal from '../OrderFeed/OrderFeedItemDetails/OrderFeedItemDetailsModal';
import ProfileOrderHistoryDetails from '../../pages/Profile/ProfileOrderHistory/ProfileOrderHistoryDetails/ProfileOrderHistoryDetails';
import ProfileOrderFeedItemDetailsModal from '../ProfileOrderFeed/ProfileOrderFeedItemDetailsModal';

function App () {
    const dispatch = useAppDispatch();
    const location = useLocation() as ILocation;
    const background = (location.state as any)?.background;

    React.useEffect(()=>{ dispatch(getIngredients()); }, []);

    return (
        <div className={style.App}>
            <AppHeader />

            <Routes location={background || location}>
                    <Route path="/login" element={
                        <ProtectedFromAuthorizedRoute>
                            <Login />
                        </ProtectedFromAuthorizedRoute>
                    } />
                    <Route path="/forgot-password" element={
                        <ProtectedFromAuthorizedRoute>
                            <ForgotPassword />
                        </ProtectedFromAuthorizedRoute>
                    } />
                    <Route path="/reset-password" element={
                        <ProtectedFromAuthorizedRoute>
                            <ResetPassword />
                        </ProtectedFromAuthorizedRoute>
                    } />
                    <Route path="/register" element={
                        <ProtectedFromAuthorizedRoute>
                            <Register />
                        </ProtectedFromAuthorizedRoute>
                    } />

                    <Route path="/profile" element={
                        <ProtectedFromUnauthorizedRoute>
                            <Profile />
                        </ProtectedFromUnauthorizedRoute>
                    } />
                    <Route path="/profile/orders" element={
                        <ProtectedFromUnauthorizedRoute>
                            <ProfileOrderHistory />
                        </ProtectedFromUnauthorizedRoute>
                    } />
                    <Route path="/profile/orders/:id" element={
                        <ProtectedFromUnauthorizedRoute>
                            <ProfileOrderHistoryDetails />
                        </ProtectedFromUnauthorizedRoute>
                    } />
                    <Route path="/ingredients/:id" element={<IngredientDetails />} />
                    <Route path="/feed" element={<OrderHistory />} />
                    <Route path="/feed/:id" element={<OrderHistoryDetails />} />
                    <Route path="/" element={<Home />} />
                    <Route element={<NotFound />} />
            </Routes>
            {background && (
                <Routes>
                    <Route path="/ingredients/:id" element={<IngredientDetailsModal />} />
                    <Route path="/feed/:id" element={<OrderFeedItemDetailsModal />} />
                    <Route path="/profile/orders/:id" element={
                        <ProtectedFromUnauthorizedRoute>
                            <ProfileOrderFeedItemDetailsModal />
                        </ProtectedFromUnauthorizedRoute>
                    } />
                </Routes>
            )}
        </div>
      );
}

declare module 'react' {
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    }
}

export default App;
