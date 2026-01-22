import { useState } from "react";
import { Messages } from "../components/messages";
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
 
  return (
    <div>
      <Messages messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
