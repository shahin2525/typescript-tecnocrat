{
  //
  type GenericArray<T> = Array<T>;

  const roolList: GenericArray<number> = [10, 20, 30];
  const roolList2: GenericArray<string> = ["10", "20", "30"];
  const roolList3: GenericArray<boolean> = [true, false, true];

  const userList: GenericArray<{ name: string; age: number; role: string }> = [
    {
      name: "mej",
      age: 10,
      role: "ad",
    },
    {
      name: "rofi",
      age: 16,
      role: "aj",
    },
  ];
  type GeniricTuple<x, y> = [x, y];
  const userId: GeniricTuple<number, { name: string; email: string }> = [
    20,
    { name: "rakib", email: "raki@gmail" },
  ];
  //
}
