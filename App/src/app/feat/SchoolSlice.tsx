import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SchoolSlice = createSlice({
    name: 'School',
    initialState:{
        schools: [],
    },

    reducers:{
        addSchool: (state, action: PayloadAction <[]>) => {
            state.schools = action.payload;
        },
    },
})

export const {addSchool} = SchoolSlice.actions;
const SchoolReducer = SchoolSlice.reducer
export default SchoolReducer;