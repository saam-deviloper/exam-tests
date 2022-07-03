export const numberAction = (value=1) => {
  return {
    increase: { type: "INCREASE_NUMBER", payload: value },
    decrease: { type: "DECREASE_NUMBER", payload: value },
  };
};
