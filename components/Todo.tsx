import { TodoEntity } from "@/types";

const Todo = ({ todo }: { todo: TodoEntity }) => {
  return <div className="border m-2 p-4 w-64">
    <h2>Title: {todo.title}</h2>
    <h4>Content: {todo.title}</h4>
    <div>Done: {todo.done ? '✅' : '❌'}</div>
  </div>
}

export default Todo;
