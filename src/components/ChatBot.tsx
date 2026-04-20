"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import './ChatBot.css'
interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const { language, isAiChatOpen: isOpen, setOpenAiChat: setIsOpen } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const greetingMessage =
    language === "en"
      ? "Hello! 👋 I'm the Advance National virtual assistant. I can help you with information about our commercial laundry machines, water filtration, HVAC systems, elevators, fire safety, and more. How can I help you today?"
      : "नमस्ते! 👋 म Advance National को भर्चुअल सहायक हुँ। म तपाईंलाई हाम्रा व्यावसायिक लन्ड्री मेसिन, पानी निस्पंदन, HVAC प्रणाली, लिफ्ट, आगो सुरक्षा र अरू बारे जानकारी दिन सक्छु। आज म तपाईंलाई कसरी मद्दत गर्न सक्छु?";

  useEffect(() => {
    const sessionChat = sessionStorage.getItem("an_chat_messages");
    const timeoutId1 = setTimeout(() => {
      if (!isOpen && sessionChat !== 'true') {
        sessionStorage.setItem("an_chat_messages", 'true');
        setIsOpen(true);
      }
    }, 1500);
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: greetingMessage }]);
    }

    return () => {
      clearTimeout(timeoutId1)
    };
  }, [isOpen, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: data.error ?? "Sorry, something went wrong." }]);
      }
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="an-chatbot">
      {isOpen && (
        <div className="an-window">
          {/* Header */}
          <div className="an-header">
            <div className="an-header-left">
              <div className="an-avatar">
                <Bot size={17} color="#001F3F" />
              </div>
              <div>
                <div className="an-header-title">AN Assistant</div>
                <div className="an-header-status">
                  <span className="an-status-dot" />
                  {language === "en" ? "Online · Replies instantly" : "अनलाइन · तुरुन्तै जवाफ"}
                </div>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="an-close-btn">
              <X size={15} />
            </button>
          </div>

          {/* Messages */}
          <div className="an-messages">
            {messages.length > 0 && (
              <div className="an-divider">
                <span>{language === "en" ? "Today" : "आज"}</span>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`an-msg-row ${msg.role === "user" ? "user" : "bot"}`}>
                {msg.role === "assistant" && (
                  <div className="an-msg-avatar">
                    <Bot size={13} color="#001F3F" />
                  </div>
                )}
                <div className={`an-bubble ${msg.role === "user" ? "user" : "bot"}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="an-msg-row bot">
                <div className="an-msg-avatar">
                  <Bot size={13} color="#001F3F" />
                </div>
                <div className="an-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="an-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="an-input"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="an-send-btn"
            >
              {isLoading ? <Loader2 size={15} /> : <Send size={15} />}
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setIsOpen(!isOpen)} className="an-fab">
        {isOpen ? <X size={21} /> : <MessageCircle size={21} />}
        {!isOpen && <span className="an-fab-badge">AI</span>}
      </button>
    </div>
  );
}