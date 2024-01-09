'use client';
import { TodoEntity } from "@/types";
import { toggleCompleteTodo } from "@/utils/actions";
import Link from "next/link";
import { useTransition } from "react";

const Todo = ({ todo }: { todo: TodoEntity }) => {
  const [isPending, startTransition] = useTransition();

  const handleComplete = () => {
    startTransition(() => toggleCompleteTodo(todo.id, todo.done));
  }

  return <div className={`border m-2 p-4 w-64 relative ${todo.done ? 'bg-green-50 border-green-400' : ''}`}>
    <div onClick={handleComplete} className="absolute top-2 right-2 text-neutral-600 text-xs cursor-pointer">{todo.done ? 'Incomplete' : 'Complete'}</div>
    <Link href={`/todos/${todo.id}`} key={todo.id}>
      <h2>Title: {todo.title}</h2>
      <h4>Content: {todo.title}</h4>
      <div>Done: {todo.done ? '✅' : '❌'}</div>
    </Link>
  </div>
}

export default Todo;
