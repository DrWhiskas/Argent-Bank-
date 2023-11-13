import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from './reducers';


const initialState = {
	user: null,
	token: '',
};

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        setToken:(state, action) =>{
            state.token = action.payload;
        },
        logout: (state) =>{
            state.token = ''
        },

    }
})
export const { setToken, logout } =  loginSlice.actions

export const store = configureStore({
	reducer: { login: loginSlice.reducer },
	devTools: true,
});

export default store

