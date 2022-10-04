import React from 'react';
import style from "./App.module.css";
import {Routes, Route, useLocation} from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
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
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/getIngredients";
import IngredientDetailsModal from "../BurgerIngredients/IngredientDetailsModal/IngredientDetailsModal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function App () {
    const dispatch = useDispatch();
    const location = useLocation();
    const background = location.state?.background;

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
                            <ProfileOrderHistory />
                        </ProtectedFromUnauthorizedRoute>
                    } />
                    <Route path="/ingredients/:id" element={<IngredientDetails />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                    <Route path="/" element={<Home />} />
                    <Route element={<NotFound />} />
            </Routes>
            {background && (
                <Routes>
                    <Route path="/ingredients/:id" element={<IngredientDetailsModal />} />
                </Routes>
            )}
        </div>
      );
}

export default App;
