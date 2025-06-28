import React, { useRef } from "react";

const ChatForm=({chatHistory, setChatHistory,generateBotResponse})=>{

    const inputRef = useRef();

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage)return;
        inputRef.current.value=" ";
        setChatHistory((history)=> [...history, {role: "user",text: userMessage}]);
        setTimeout(()=>{
            setChatHistory((history)=> [...history, {role: "model",text:"Thinking..."}]);
            generateBotResponse([...chatHistory,{role:"user" ,text: `Using the details provided above, please address this query, and remember your response should be to the point and fun, afterall it is a book website: ${userMessage}`}])
        },600);
    };

    return(
        <div>
            <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
                <input type="text" placeholder= "Message..." className="message-input" required ref={inputRef} />
                <button className="material-symbols-rounded">arrow_upward</button>
            </form>
        </div>
    );
}

export default ChatForm;