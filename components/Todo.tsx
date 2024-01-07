import { TodoEntity } from "@/types";

const Todo = ({ todo }: { todo: TodoEntity }) => {
  return <div>{todo.content}</div>
}

export default Todo;
