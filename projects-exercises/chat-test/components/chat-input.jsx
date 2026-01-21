import { useState } from "react";

export function ChatInput({ messages, setMessages }) {
  const [inputData, setInputData] = useState();

  function getData(event) {
    setInputData(event.target.value);
  }

  function renderData() {
    setMessages([
      ...messages,
      {
        message: inputData,
        sender: "user",
        id: crypto.randomUUID()
      },
    ]);

    setInputData("");
  }

  return (
    <>
      <input
        value={inputData}
        onChange={getData}
        placeholder="type message"
        size="25"
      />
      <button onClick={renderData}>Send</button>
    </>
  );
}
