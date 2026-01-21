import { useState } from "react";
import { ChatInput } from "../components/chat-input";
import { ChatMessage } from "../components/chat-message";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello robot",
      sender: "user",
      id: crypto.randomUUID(),
    },
    {
      message: "Hi user, how can i help you",
      sender: "robot",
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <>
      <ChatInput messages={messages} setMessages={setMessages} />

      {messages.map((message) => {
        return (
          <>
            <ChatMessage message={message.message} sender={message.sender} key={message.id} />
          </>
        );
      })}
    </>
  );
}

export default App;
