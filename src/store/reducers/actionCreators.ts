import { AppDispatch } from "../store";
import axios from "axios";
import { UserSlice } from "./userSlice";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser1 = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(UserSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(UserSlice.actions.userFetchingSuccess(response.data));
//   } catch (error: any) {
//     dispatch(UserSlice.actions.userFetchingError(error.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
