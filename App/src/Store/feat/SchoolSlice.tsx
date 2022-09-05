import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const School = createSlice({
    name: 'schools',
    initialState:{
        schools: [],
    },
    reducers:{
        addSchool(state, action){
            state.schools = action.payload;
        }
    }
})

export const {addSchool} = School.actions;
export default School.reducer;