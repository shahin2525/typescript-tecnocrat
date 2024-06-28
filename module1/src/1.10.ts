type User1 = {
  name: string;
  age: number;
};

interface User2 {
  name: string;
  age: number;
}

type roleNumber = number;

interface User3 extends User1 {
  role: string;
}

const user3: User3 = {
  name: "ra",
  age: 10,
  role: "admin",
};

type User4 = User1 & { role: string };

const user4: User4 = {
  name: "ra",
  age: 10,
  role: "admin",
};
