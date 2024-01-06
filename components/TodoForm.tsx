'use client';

import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState('');

  return <div>
    <form>
      <input style={{ border: '1px solid blue' }} value={text} onChange={e => setText(e.target.value)} type="text" />
    </form>

    <div>Inputted text: {text}</div>
  </div>
};

export default TodoForm;