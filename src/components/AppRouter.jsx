import React from "react";
import { publicRoutes, privateRoutes } from "../router";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useContext } from "react";

const AppRouter = () => {

    let token = localStorage.getItem('access_token');

    const {isAuth} = useContext(AuthContext);

    if (!isAuth) {
        return <Routes>
                {publicRoutes.map(route => 
                    <Route key={route.path} element={route.component} path={route.path} exact={route.exact}/>
                )}
            <Route path='*' element={<Navigate replace to="/authorization"/>}/>
        </Routes>;
    } else {
        return<Routes>
                {privateRoutes.map(route => 
                    <Route key={route.path} element={route.component} path={route.path} exact={route.exact}/>
                )}
            <Route path='*' element={<Navigate replace to="/main"/>}/>
        </Routes>;
    }
};

export default AppRouter;