import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import testReducer from "./ducks/test/reducers";
import postReducer from "./ducks/posts/reducers";

export const store = configureStore({
  reducer: {
    test: testReducer,
    posts: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
