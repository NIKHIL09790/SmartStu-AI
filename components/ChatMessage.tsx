type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const mine = role === "user";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
          mine
            ? "bg-skyPrimary text-white shadow-soft"
            : "glass text-slate-700 dark:text-slate-200"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
