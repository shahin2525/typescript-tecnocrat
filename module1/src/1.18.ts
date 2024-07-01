type Area = {
  height: number;
  width: number;
};

type AreaString<T> = {
  [key in keyof T]: T[key];
};

const are1: AreaString<{ height: string; width: number; depth: string }> = {
  height: "250",
  width: 20,
  depth: "21",
};
