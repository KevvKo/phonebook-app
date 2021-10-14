import { createSlice } from '@reduxjs/toolkit';

const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {},
    reducers: {    
        setPhoneBook(state, action) { 
            const phoneBook = action.payload;
            return {
                ...state,
                phoneBook
            };
        },  
        // setPhoneNumber(state, action) {
        //     const phoneNumber = action.payload;
        //     return {
        //         ...state,
        //         phoneNumber: phoneNumber
        //     };
        // },
    }
});

export const { 
    setPhoneBook 
} = phoneBookSlice.actions;

export default phoneBookSlice.reducer;