import { createAction } from "@reduxjs/toolkit";

const createPost = createAction<string>("posts/createPost");
const fetchPosts = createAction<string>("posts/fetchPosts");

export const actions = {
  createPost,
  fetchPosts,
};
