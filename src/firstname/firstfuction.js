export const calcualtorReducer = (meriState, mereAction) => {
  const { type, value } = mereAction;

  switch (type) {
    case "add":
      return {
        ...meriState,
        FullName: meriState.first + meriState.middle + meriState.last,
      };

    case "first":
      return {
        ...meriState,
        first: value,
      };

    case "middle":
      return {
        ...meriState,
        middle: value,
      };

    case "last":
      return {
        ...meriState,
        last: value,
      };

    default:
      return meriState;
  }
};
