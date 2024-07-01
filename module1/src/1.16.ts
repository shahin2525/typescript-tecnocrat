type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const getTodo = async (): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};
const todo = getTodo();
console.log(todo);
