{
  type Normal = {
    name: string;
  };
  type Rich = {
    name: string;
    role: "admin";
  };

  const getUser = (user: Normal | Rich) => {
    if ("role" in user) {
      console.log(`the user name is ${user.name} role ${user.role}`);
    } else {
      console.log(`the user name ${user.name}`);
    }
  };

  const normalUser: Normal = {
    name: "rak",
  };
  const richUser: Rich = {
    name: "rak",
    role: "admin",
  };
  const res1 = getUser(normalUser);
}
