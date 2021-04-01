import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editor/EditorSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
