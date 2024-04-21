import React from 'react'
import {Provider} from "react-redux";
import {store} from "./state/store";
import AppWithRedux from "./AppWithRedux";

export default {
    title: "AppWithRedux Component",
    component: AppWithRedux
}

export const AppWithReduxBaseExample = () => {
    return <Provider store={store}> <AppWithRedux /> </Provider>
}