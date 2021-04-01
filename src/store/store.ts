import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./features/editorSlice";
import bundlerReducer from "./features/bundlerSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    bundler: bundlerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
