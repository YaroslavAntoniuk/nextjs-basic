import { TodoEntity } from "@/types";
import Todo from "./Todo"

const TodoList = ({ todos }: { todos: TodoEntity[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList;
