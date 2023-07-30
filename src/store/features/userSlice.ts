import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
  firstName: string;
  lastName: string;
  role: string;
  authToken: string;
}

// Define the initial state using that type
const initialState: UserState = {
  firstName: "",
  lastName: "",
  role: "",
  authToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
  },
});

export const { setAuthToken } = userSlice.actions;

export default userSlice.reducer;
