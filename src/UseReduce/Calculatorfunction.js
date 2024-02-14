export const calcualtorReducer = (meriState, mereAction) => {
  const { type, value } = mereAction;

  switch (type) {
    case "add":
      return {
        ...meriState,
        result: Number(meriState.num1) + Number(meriState.num2),
      };

    case "subtract":
      return {
        ...meriState,
        result: Number(meriState.num1) - Number(meriState.num2),
      };

    case "divide":
      return {
        ...meriState,
        result: Number(meriState.num1) / Number(meriState.num2),
      };

    case "multiply":
      return {
        ...meriState,
        result: Number(meriState.num1) * Number(meriState.num2),
      };

    case "num1":
      return {
        ...meriState,
        num1: value,
      };

    case "num2":
      return {
        ...meriState,
        num2: value,
      };

    default:
      return meriState;
  }
};
