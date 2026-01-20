import './chat-message.css';

export function ChatMessage({message, sender}){
  return(
    <div className="chatContainer">
     {sender === "robot" && <img src="../public/robot.avif" width="50" />}
     {message}
     {sender === "user" &&  <img src="../public/images.png" width="50" />}
    </div>
  )
}