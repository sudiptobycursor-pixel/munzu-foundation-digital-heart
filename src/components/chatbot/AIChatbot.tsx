import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export const AIChatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: t.chatbot.welcome,
        isBot: true,
      },
    ]);
  }, [t]);

  const quickReplies = [
    t.chatbot.quickDonate,
    t.chatbot.quickPrograms,
    t.chatbot.quickVolunteer,
    t.chatbot.quickContact,
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("donate") || lowerMessage.includes("money") || lowerMessage.includes("contribution") || lowerMessage.includes("দান") || lowerMessage.includes("টাকা")) {
      return t.chatbot.donate;
    }
    if (lowerMessage.includes("program") || lowerMessage.includes("activities") || lowerMessage.includes("work") || lowerMessage.includes("কার্যক্রম") || lowerMessage.includes("প্রোগ্রাম")) {
      return t.chatbot.programs;
    }
    if (lowerMessage.includes("volunteer") || lowerMessage.includes("join") || lowerMessage.includes("help") || lowerMessage.includes("স্বেচ্ছাসেবক") || lowerMessage.includes("যোগ")) {
      return t.chatbot.volunteerResponse;
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("address") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("যোগাযোগ") || lowerMessage.includes("ঠিকানা")) {
      return t.chatbot.contactInfo;
    }
    return t.chatbot.defaultResponse;
  };

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "rotate-90" : ""
        }`}
        style={{ boxShadow: "0 4px 20px hsl(152 60% 28% / 0.4)" }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary p-4 text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">{t.chatbot.title}</h4>
              <p className="text-xs text-primary-foreground/80">{t.chatbot.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.isBot ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}
              >
                {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.isBot
                    ? "bg-secondary text-secondary-foreground rounded-tl-sm"
                    : "bg-primary text-primary-foreground rounded-tr-sm"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-secondary p-3 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="p-3 border-t border-border bg-background">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder={t.chatbot.typePlaceholder}
              className="flex-1 px-4 py-2 bg-secondary rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              onClick={() => handleSend()}
              size="icon"
              className="rounded-full"
              disabled={!input.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
