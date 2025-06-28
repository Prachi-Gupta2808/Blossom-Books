import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { siteInfo } from "./siteInfo";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: siteInfo,
    },
  ]);

  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_GEMINI_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <>
      <div className={`chatbot-container`}>
        <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
          <span className="material-symbols-rounded">menu_book</span>
          <span className="material-symbols-rounded">close</span>
        </button>
      </div>

      {showChatbot && (
        <div className="chatbot-container show-chatbot">
          <div className="chatbot-popup">
            <div className="chat-header">
              <div className="header-info">
                <ChatbotIcon />
                <h2 className="logo-text">BookBot</h2>
              </div>

              <button
                type="button"
                className="material-symbols-rounded chatbot-close-button"
                aria-label="Close chatbot"
                onClick={() => {
                  console.log("Clicked close button");
                  setShowChatbot(false);
                }}
              >
                keyboard_arrow_down
              </button>
            </div>

            <div ref={chatBodyRef} className="chat-body">
              <div className="message bot-message">
                <ChatbotIcon />
                <p className="message-text">
                  Hey there book worm!✨
                  <br />
                  What can I help you with today?
                </p>
              </div>

              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            <div className="chat-footer">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
