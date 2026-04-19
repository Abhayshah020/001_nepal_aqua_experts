"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";

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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700&display=swap');

        .an-chatbot * {
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        /* ── Window ── */
        .an-window {
          position: fixed;
          bottom: 6.5rem;
          right: 1rem;
          z-index: 50;
          max-width: 460px;
          min-height: 80%;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(0,31,63,0.08);
          box-shadow:
            0 32px 64px -12px rgba(0,31,63,0.22),
            0 0 0 1px rgba(255,255,255,0.6) inset;
          transform-origin: bottom right;
          animation: windowIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes windowIn {
          from { opacity: 0; transform: scale(0.82) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }

        /* ── Header ── */
        .an-header {
          padding: 16px 18px;
          background: linear-gradient(135deg, #001F3F 0%, #003366 60%, #00264d 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .an-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 90% -20%, rgba(255,193,7,0.18) 0%, transparent 60%);
          pointer-events: none;
        }

        .an-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFC107, #FFB300);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(255,193,7,0.4);
          flex-shrink: 0;
        }

        .an-header-title {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        .an-header-status {
          font-size: 11px;
          color: #FFC107;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 2px;
        }

        .an-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 2px rgba(74,222,128,0.3);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 2px rgba(74,222,128,0.3); }
          50%       { box-shadow: 0 0 0 5px rgba(74,222,128,0.1); }
        }

        .an-close-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          color: rgba(255,255,255,0.6);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }

        .an-close-btn:hover {
          background: rgba(255,255,255,0.16);
          color: #ffffff;
        }

        /* ── Messages ── */
        .an-messages {
          flex: 1;
          overflow-y: auto;
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f8f9fc;
          max-height: 500px;
          scrollbar-width: thin;
          scrollbar-color: rgba(0,31,63,0.12) transparent;
        }

        .an-messages::-webkit-scrollbar { width: 4px; }
        .an-messages::-webkit-scrollbar-track { background: transparent; }
        .an-messages::-webkit-scrollbar-thumb { background: rgba(0,31,63,0.15); border-radius: 4px; }

        .an-msg-row {
          display: flex;
          animation: msgIn 0.28s cubic-bezier(0.34,1.4,0.64,1) forwards;
        }

        @keyframes msgIn {
          from { opacity: 0; transform: translateY(10px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        .an-msg-row.user  { justify-content: flex-end; }
        .an-msg-row.bot   { justify-content: flex-start; align-items: flex-end; }

        .an-msg-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFC107, #FFB300);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(255,193,7,0.3);
        }

        .an-bubble {
          max-width: 78%;
          padding: 11px 15px;
          border-radius: 18px;
          font-size: 13.5px;
          line-height: 1.55;
          white-space: pre-wrap;
          font-weight: 400;
        }

        .an-bubble.user {
          background: linear-gradient(135deg, #001F3F 0%, #003a70 100%);
          color: #ffffff;
          border-bottom-right-radius: 5px;
          box-shadow: 0 4px 16px rgba(0,31,63,0.25);
        }

        .an-bubble.bot {
          background: #ffffff;
          color: #1a2535;
          border-bottom-left-radius: 5px;
          border: 1px solid rgba(0,31,63,0.07);
          box-shadow: 0 2px 12px rgba(0,31,63,0.06);
        }

        /* ── Typing indicator ── */
        .an-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 14px 16px;
          background: #ffffff;
          border-radius: 18px;
          border-bottom-left-radius: 5px;
          border: 1px solid rgba(0,31,63,0.07);
          box-shadow: 0 2px 12px rgba(0,31,63,0.06);
        }

        .an-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #001F3F;
          opacity: 0.3;
          animation: typing-bounce 1.2s ease-in-out infinite;
        }

        .an-typing span:nth-child(2) { animation-delay: 0.15s; }
        .an-typing span:nth-child(3) { animation-delay: 0.30s; }

        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0);   opacity: 0.3; }
          30%            { transform: translateY(-5px); opacity: 0.9; }
        }

        /* ── Input area ── */
        .an-input-area {
          background: #ffffff;
          border-top: 1px solid rgba(0,31,63,0.06);
          padding: 12px 14px;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .an-input {
          flex: 1;
          font-size: 13.5px;
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid rgba(0,31,63,0.1);
          border-radius: 14px;
          padding: 10px 14px;
          color: #1a2535;
          background: #f8f9fc;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }

        .an-input::placeholder { color: rgba(0,31,63,0.35); }

        .an-input:focus {
          border-color: #001F3F;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(0,31,63,0.07);
        }

        .an-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .an-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 13px;
          background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,31,63,0.3);
        }

        .an-send-btn:hover:not(:disabled) {
          transform: scale(1.07);
          box-shadow: 0 6px 18px rgba(0,31,63,0.38);
        }

        .an-send-btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .an-send-btn:disabled {
          background: #e2e6ea;
          box-shadow: none;
          cursor: not-allowed;
        }

        /* ── FAB toggle ── */
        .an-fab {
          position: fixed;
          bottom: 1.25rem;
          right: 1.25rem;
          z-index: 50;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,31,63,0.38), 0 0 0 1px rgba(255,255,255,0.08) inset;
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s;
        }

        .an-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(0,31,63,0.46), 0 0 0 1px rgba(255,255,255,0.08) inset;
        }

        .an-fab:active {
          transform: scale(0.94);
        }

        .an-fab-badge {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFC107, #FFB300);
          color: #001F3F;
          font-size: 8px;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(255,193,7,0.4);
          animation: badge-pop 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }

        @keyframes badge-pop {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }

        /* ── Date divider (decorative, optional) ── */
        .an-divider {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 2px 0;
        }

        .an-divider span {
          font-size: 10px;
          color: rgba(0,31,63,0.3);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .an-divider::before,
        .an-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(0,31,63,0.08);
        }
      `}</style>

      <div className="an-chatbot">
        {/* Chat window */}
        {isOpen && (
          <div className="an-window">
            {/* Header */}
            <div className="an-header">
              <div style={{ display: "flex", alignItems: "center", gap: "11px", position: "relative" }}>
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
              <button onClick={() => setIsOpen(false)} className="an-close-btn" aria-label="Close chat">
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
                placeholder={language === "en" ? "Ask about our products…" : "हाम्रा उत्पादनहरू सोध्नुहोस्…"}
                className="an-input"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="an-send-btn"
                aria-label="Send message"
              >
                {isLoading
                  ? <Loader2 size={15} color="white" style={{ animation: "spin 1s linear infinite" }} />
                  : <Send size={15} color="white" />
                }
              </button>
            </div>
          </div>
        )}

        {/* FAB Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="an-fab"
          aria-label="Open chatbot"
        >
          {isOpen ? <X size={21} /> : <MessageCircle size={21} />}
          {!isOpen && (
            <span className="an-fab-badge">AI</span>
          )}
        </button>
      </div>
    </>
  );
}