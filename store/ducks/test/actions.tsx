import { createAction } from "@reduxjs/toolkit";

const createTest = createAction<string>("test/createTest");

export const actions = {
  createTest,
};
