import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getTodos = async () => {
  const todos = await db.todo.findMany({});

  return todos;
}

const Todos = async () => {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos Page</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;