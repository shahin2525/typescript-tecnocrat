{
  //
  type Frontend = {
    skills: string[];
    designation1: "frontend";
  };
  type Backend = {
    skills: string[];
    designation2: "backend";
  };

  type FullStack = Frontend & Backend;

  const fullStack: FullStack = {
    skills: ["html", "css", "js", "rs"],
    designation1: "frontend",
    designation2: "backend",
  };

  type User = {
    name: string;
    age: number;
    email?: string;
    skills?: string[];
    gender: "male" | "female";
    fullStack: FullStack;
  };
  const user: User = {
    name: "rakib",
    age: 10,
    email: "sahin@gmail.com",
    skills: ["html", "css", "js"],
    gender: "male",
    fullStack: {
      skills: ["htmll", "ckss"],
      designation1: "frontend",
      designation2: "backend",
    },
  };

  //
}
