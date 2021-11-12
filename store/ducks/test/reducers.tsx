import { createReducer } from "@reduxjs/toolkit";
import { actions } from "./actions";

export type StateType = {
  test: string;
};

export const initialState: StateType = {
  test: "",
};

const testReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.createTest, (state, action) => {
    console.log(action.payload);
    state.test = action.payload;
  });
});

export default testReducer;
