import axios from "axios";
import { USERS_GET_SUCCESS } from "../type/messengerType";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/users");
    dispatch({
      type: USERS_GET_SUCCESS,
      payload: {
        users: res.data.users,
      },
    });
  } catch (error) {
    console.log(error.res.data);
  }
};
