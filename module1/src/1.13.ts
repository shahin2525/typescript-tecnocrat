{
  //
  const func1 = <T, X>(pram: T, pram2: X): [T, X] => {
    return [pram, pram2];
  };
  type User = { name: string; age: number };
  const res1 = func1<number, User>(100, { name: "raki", age: 10 });

  const student = <T, X>(student: T, teac: X): {} => {
    const next = "next level developer";
    return {
      ...student,
      ...teac,
      next,
    };
  };
  interface Student {
    name: string;
    age: number;
    email: string;
  }
  const result1 = student<number, Student>(1000, {
    name: "rakib",
    age: 16,
    email: "r@r",
  });
  const result2 = student(100, { name: "sakib", age: 17, email: "s@s" });

  //
}
