import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './slices/phoneBook';

export const store = configureStore({
    reducer: {
        phoneBook: phoneBookReducer,
    }
});