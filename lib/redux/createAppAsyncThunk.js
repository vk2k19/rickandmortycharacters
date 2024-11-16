/* Core */
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * ? A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes();
