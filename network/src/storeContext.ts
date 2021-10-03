import React from "react";
import store from "./redux/store/store";

const StoreContext = React.createContext(store);

export default  StoreContext