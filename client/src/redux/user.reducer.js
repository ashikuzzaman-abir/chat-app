import { createSlice} from '@reduxjs/toolkit'


const initialState = {
	data: JSON.parse(window.localStorage.getItem("user")) || null,
	profile: null,
	token: window.localStorage.getItem("token") || null,
	preference: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        replaceUser: (state, action) => {
            state.data = action.payload
        },
        replaceToken: (state, action) => {
            state.token = action.payload
        }
    }
})


export const {replaceUser, replaceToken} = userSlice.actions;

export default userSlice.reducer;