import React from 'react';
import style from "./App.module.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
import NotFound from "../../pages/NotFound/NotFound";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import IngredientsId from "../../pages/IngredientsId/IngredientsId";
import Home from "../Home/Home";
import OrderHistory from "../../pages/OrderHistory/OrderHistory";

function App () {
      return (
        <div className={style.App}>
            <Router>
              <AppHeader />
                <Switch>
                    <Route path="/login" exact={true} children={<Login />} />
                    <Route path="/forgot-password" exact={true} children={<ForgotPassword />} />
                    <Route path="/reset-password" exact={true} children={<ResetPassword />} />
                    <Route path="/register" exact={true} children={<Register />} />
                    <Route path="/profile" exact={true} children={<Profile />} />
                    <Route path="/ingredients" children={<IngredientsId />} />
                    <Route path="/order-history" children={<OrderHistory />} />
                    <Route path="/" exact={true} children={<Home />} />
                    <Route children={<NotFound />} />
                </Switch>
            </Router>
        </div>
      );
}

export default App;
