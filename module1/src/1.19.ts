const myObj: Record<string, unknown> = { name: "rak", age: 20 };

type User = {
  name: string;
  age: number;
  post: string;
  contactNo: number;
  email?: string;
};

type SomeReadOnly = Omit<User, "contactNo">;
