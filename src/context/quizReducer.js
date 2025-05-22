export const quizReducer = (state, action) => {
  switch (action.type) {
    case "VALIDATE_ANSWER":
      return state.map((q) =>
        q.id === action.payload.id && q.validated === null
          ? { ...q, validated: action.payload.result }
          : q
      );
    default:
      return state;
  }
};
