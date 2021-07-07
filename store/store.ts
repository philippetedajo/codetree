import { configureStore } from "@reduxjs/toolkit";

import editorReducer from "./features/editorSlice";
import compilerReducer from "./features/compilerSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    compiler: compilerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
