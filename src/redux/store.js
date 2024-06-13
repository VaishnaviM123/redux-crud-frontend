import menuSlice from "./menuSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        menu: menuSlice
}})