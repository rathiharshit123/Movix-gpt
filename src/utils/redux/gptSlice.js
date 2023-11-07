import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        gptSearchToggle: false,
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.gptSearchToggle = !state.gptSearchToggle;
        },
    },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
