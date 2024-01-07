import { createTodo } from "@/utils/actions";

const TodoForm = () => {
  return <div>
    <form action={createTodo} className="flex flex-row m-8">
      <input placeholder="Title" name="title" className="border border-black/25 p-2 m-2" type="text" />
      <input placeholder="Content" name="content" className="border border-black/25 p-2 m-2" type="text" />

      <button type="submit" className="border m-2 w-fit self-center p-2 bg-cyan-500 text-slate-50">Create Todo</button>
    </form>
  </div>
};

export default TodoForm;