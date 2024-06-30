{
  //
  type GenericTypeArray<T> = Array<T>;
  const user: GenericTypeArray<number> = [10, 20, 30];
  const user2: GenericTypeArray<string> = ["ra", "sa", "ta"];
  const user3: GenericTypeArray<boolean> = [true, false, true];

  // generic array of object

  const user4: GenericTypeArray<{ name: string; age: number; role: string }> = [
    { name: "sa", age: 10, role: "student" },
    { name: "ro", age: 16, role: "teacer" },
    { name: "s", age: 10, role: "admin" },
  ];

  // generic tuple

  type GenericTuple<x, y> = [x, y];

  const user5: GenericTuple<string, number> = ["dsss", 10];
  const user6: GenericTuple<
    number,
    { name: string; age: number; isSingle: boolean }
  > = [1000, { name: "sakik", age: 10, isSingle: true }];
  //
}
