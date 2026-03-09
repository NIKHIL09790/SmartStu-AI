"use client";

import { FormEvent, useState } from "react";
import ChatMessage from "@/components/ChatMessage";
import { chatSeed } from "@/lib/data";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(chatSeed);
  const [input, setInput] = useState("");

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "Placeholder response: I will break this topic into a 3-step plan." }
    ]);
    setInput("");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">AI Tutor Chat</h1>
      <section className="glass flex h-[65vh] flex-col p-4">
        <div className="flex-1 space-y-3 overflow-y-auto pr-1">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} role={msg.role} content={msg.content} />
          ))}
        </div>
        <form onSubmit={sendMessage} className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your AI tutor..."
            className="flex-1 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 outline-none ring-skyPrimary/40 focus:ring dark:border-white/20 dark:bg-white/5"
          />
          <button className="rounded-xl bg-skyPrimary px-4 py-2 text-sm font-semibold text-white">Send</button>
        </form>
      </section>
    </div>
  );
}
