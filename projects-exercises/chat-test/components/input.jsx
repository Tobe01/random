import { useState } from "react";

export function Input({ messages, setMessages }) {
  const [input, setInput] = useState();

  function getNewState(event) {
    setInput(event.target.value);
  }

  function updateState() {
    setMessages([
      ...messages,
      {
        message: input,
        id: crypto.randomUUID,
      },
    ]);

    setInput('')
  }

  return (
    <>
      <input onChange={getNewState} value={input} size="30" />
      <button onClick={updateState} >send</button>
    </>
  );
}
