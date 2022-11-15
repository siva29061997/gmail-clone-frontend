import { configureStore } from "@reduxjs/toolkit";
import mailReducer from './future/mailSlice';

export const store = configureStore({
    reducer: {
        mail: mailReducer,
    },
});