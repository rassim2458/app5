import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        SignOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
        }
    }
});

//Reducer

export default slice.reducer

// Log in

export function LogginUser(formValues) {
    // formValues => {email, password}
    return async (dispatch, getState) => {
        await axios.post("/auth/login", {
            ...formValues,
        },
            {
                headers: {
                    "Content-type": "application/json",
                },
            }
        ).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });
    };

}

