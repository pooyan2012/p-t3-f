const authReducerDefaultState = {
  user: { token: "", user: { _id: "", email: "", name: "", role: 0 } },
};

const authReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      //const { token = "", user = {} } = action.user;

      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
