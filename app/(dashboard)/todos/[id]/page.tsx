const Todo = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Todo Page: {params.id}</h1>
    </div>
  );
}

export default Todo;