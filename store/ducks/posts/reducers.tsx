import { createReducer } from "@reduxjs/toolkit";
import { actions } from "./actions";

type PostType = {
  title: string;
  description: string;
  salary: number;
};

type StateType = {
  postsList: PostType[];
};

export const initialState: StateType = {
  postsList: [],
};

const postReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.fetchPosts, (state, action) => {
    console.log(action.payload);
    state.postsList = action.payload;
  });
});

export default postReducer;
