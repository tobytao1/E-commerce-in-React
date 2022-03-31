const Initial_State = {
  currentUser: null,
};
const userReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Current_User":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
