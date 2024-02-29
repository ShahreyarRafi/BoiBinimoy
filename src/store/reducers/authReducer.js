const authState = {
  loading: true,
  auhtenicate: false,
  error: "",
  successMessage: "",
};

export const suthReduceer = (state = authState, action) => {
  const { payload, type } = action;
  return state;
};
