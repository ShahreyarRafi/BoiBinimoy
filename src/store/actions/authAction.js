import axios from "axios";

export const userRegister = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post("/api/v1/users", data, config);
    } catch (error) {}
  };
};
