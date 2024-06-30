{
  //

  const genericStudent = <T extends { id: number; name: string; age: number }>(
    student: T
  ) => {
    const next = "next level web";

    return {
      ...student,
      next,
    };
  };

  const res1 = genericStudent({
    id: 123,
    name: "rakib",
    age: 10,
  });
  const res2 = genericStudent({
    id: 123,
    name: "rakib",
    age: 10,
    email: "s@s",
    hoviey: "gardening",
  });
  //
}
