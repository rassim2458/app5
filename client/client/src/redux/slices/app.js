import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

// define initial state
const initialState = {
    sidebar:{
        open:false,
        type: "CONTACT",// can be CONTACT, STARRED,SHARED
    },
    chat_type: null,
    room_id: null,
}


// create slice
const slice = createSlice({
    name:'app',
    initialState,
    reducers:{
        //Toggle sidebar
        toggleSidebar(state,action){
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType(state, action){
            state.sidebar.type = action.payload.type;
        },
        selectConversation(state, action){
            state.chat_type = "individual";
            state.room_id = action.payload.room_id;
        }
    }
});

// export reducer
export default slice.reducer;

//thunk functions - perform async operations
export function ToggleSidebar (){
    return async (dispatch, getState) =>{
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType (type){
    return async (dispatch, getState) =>{
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}

export const selectConversation = ({room_id}) => {
    return (dispatch, getState) => {
        dispatch(slice.actions.selectConversation({room_id}));
    }

}