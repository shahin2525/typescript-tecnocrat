{
  //

  const genericConstraints = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "rakib",
    age: 10,
    id: 111,
  };
  const getProperty = genericConstraints(user, "age");

  //
}
