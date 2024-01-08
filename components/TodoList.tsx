import { TodoEntity } from "@/types";
import Todo from "./Todo"

const TodoList = ({ todos }: { todos: TodoEntity[] }) => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-1 relative">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList;
