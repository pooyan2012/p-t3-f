const authReducerDefaultState = {
  token: "",
  user: { _id: "", email: "", name: "", role: 0 },
  error: "",
};

const authReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(`this is from reducer: ${JSON.stringify(action.user)}`);
      return {
        ...state,
        token: action.token ? action.token : "",
        user: action.user
          ? action.user
          : { _id: "", email: "", name: "", role: 0 },
        error: action.error ? action.error : "",
      };
    case "LOGOUT":
      return { ...state, user: authReducerDefaultState };
    default:
      return state;
  }
};

export default authReducer;
