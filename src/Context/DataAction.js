
export default (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: [...action.payload],
      };
  }
};
