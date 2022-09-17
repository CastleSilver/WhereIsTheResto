const initialState = {
  number: 5
};

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + 1 };
  }
  return { ...state };
}

export default reducer;
