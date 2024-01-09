import React from "react";
import { Params, TodoEntity } from "@/types";

const TodoDetailPage: React.FC<Params> = async ({ params }) => {
  const todo: TodoEntity = await fetch(`http://localhost:3000/api/todo/${params.id}`).then(res => res.json()).then(res => res.data);

  if (!todo) {
    return <div>Todo not found</div>
  }

  return (
    <div className="border border-black/25 w-fit p-4 m-2">
      <h1 className="border-b-2 mb-4 p-1">Todo Detail Page</h1>
      {Object.entries(todo).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}
    </div>
  );
}

export default TodoDetailPage;