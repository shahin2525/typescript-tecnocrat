{
  //

  const age = 20;
  const isAdult = age >= 18 ? "adult" : "tanager";
  // console.log(isAdult);

  const isAuthenticate = "";
  const authenticate = isAuthenticate ?? "guest";
  const authenticate2 = isAuthenticate ? isAuthenticate : "Guest";
  // console.log(authenticate, authenticate2);

  type User = {
    name: string;
    age: number;
    address: {
      permanentAddress?: string;
      presentAddress: string;
    };
  };
  const user: User = {
    name: "raki",
    age: 20,
    address: {
      presentAddress: "adfdfd",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanent address";
  console.log(permanentAddress);

  //
}
