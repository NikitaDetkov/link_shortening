import Registration from "../pages/Registration";
import Authorization from "../pages/Authorization";
import Main from "../pages/Main";

import React from "react";

export const privateRoutes = [
    {path: '/main', component: <Main/>, exact: true},
]

export const publicRoutes = [
    {path: '/registration', component: <Registration/>, exact: false},
    {path: '/authorization', component: <Authorization/>, exact: false},
]

