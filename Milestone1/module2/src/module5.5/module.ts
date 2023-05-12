// export
const add = (param1: number, param2: number): number => {
  return param1 + param2;
};

// export
const subtract = (param1: number, param2: number): number => {
  return param1 - param2;
};

// export
const multiply = (param1: number, param2: number): number => {
  return param1 * param2;
};

// export
const divide = (param1: number, param2: number): number => {
  return param1 / param2;
};

const average = (param1: number, param2: number): number => {
  return param1 + param2 / 2;
};

// sob export default korbo tai line guloi sob export hide kore disi
export default {
  average,
  divide,
  multiply,
  add,
  subtract,
};
