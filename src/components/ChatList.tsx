/* ========================================
   Chat List Component
   چیٹ لسٹ کمپوننٹ
   ======================================== */

import React from "react";
import { DoubleCheckIcon, SingleCheckIcon, ArchiveIcon } from "@/NZG73Button";
import { Archive, Pin, Image } from "lucide-react";

export interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  pinned?: boolean;
  isRead?: boolean;
  isSent?: boolean;
  isImage?: boolean;
}

const demoChats: ChatItem[] = [
  { id: "1", name: "Muhammad Noman (You)", avatar: "", lastMessage: "https://g.co/gemini/share/7b5235cf34e6", timestamp: "Yesterday", isSent: true, isRead: true },
  { id: "2", name: "AI Tools", avatar: "", lastMessage: "You: Please check the latest update...", timestamp: "3/9/26", pinned: true, isSent: true },
  { id: "3", name: "Chat GPT", avatar: "", lastMessage: "Photo", timestamp: "12:27 AM", isSent: true, isRead: true, isImage: true },
  { id: "4", name: "Meta AI", avatar: "", lastMessage: "How can I help you today?", timestamp: "12:23 AM", unread: 1 },
  { id: "5", name: "Bhai Arslan", avatar: "", lastMessage: "Please act as a Senior Developer....", timestamp: "Yesterday", isSent: true },
  { id: "6", name: "+92 321 7119793", avatar: "", lastMessage: "3 photos", timestamp: "Yesterday", isSent: true, isImage: true },
  { id: "7", name: "Bhi NOMAN", avatar: "", lastMessage: "Thanks for your help!", timestamp: "Yesterday" },
  { id: "8", name: "John Smith", avatar: "", lastMessage: "See you tomorrow!", timestamp: "Monday", unread: 3 },
  { id: "9", name: "Dev Team", avatar: "", lastMessage: "Build deployed successfully", timestamp: "Monday", isSent: true, isRead: true },
  { id: "10", name: "Sarah Wilson", avatar: "", lastMessage: "Can you send the files?", timestamp: "Sunday", unread: 1 },
];

const avatarColors = [
  "bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500",
  "bg-pink-500", "bg-teal-500", "bg-red-500", "bg-indigo-500", "bg-amber-500", "bg-cyan-500"
];

interface ChatListProps {
  onChatSelect: (chat: ChatItem) => void;
}

const ChatList: React.FC<ChatListProps> = ({ onChatSelect }) => {
  return (
    <div className="flex-1 overflow-y-auto wa-scrollbar">
      {/* Archived Row */}
      {/* آرکائیو قطار */}
      <button className="flex items-center gap-4 w-full px-4 py-3 hover:bg-muted transition-colors">
        <div className="w-10 flex items-center justify-center">
          <ArchiveIcon />
        </div>
        <span className="text-sm font-medium text-primary">Archived</span>
      </button>
      {/* (Archived Row - ختم ہو گیا ہے) */}

      {/* Chat Items */}
      {/* چیٹ آئٹمز */}
      {demoChats.map((chat, index) => (
        <button
          key={chat.id}
          onClick={() => onChatSelect(chat)}
          className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors border-b border-wa-divider"
        >
          {/* Avatar */}
          {/* اوتار */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg shrink-0 ${avatarColors[index % avatarColors.length]}`}>
            {chat.name.charAt(0).toUpperCase()}
          </div>
          {/* (Avatar - ختم ہو گیا ہے) */}

          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[15px] truncate">{chat.name}</span>
              <span className={`text-xs shrink-0 ${chat.unread ? "text-wa-unread-badge font-semibold" : "text-wa-timestamp"}`}>
                {chat.timestamp}
              </span>
            </div>
            <div className="flex items-center justify-between mt-0.5">
              <div className="flex items-center gap-1 min-w-0">
                {chat.isSent && (
                  chat.isRead ? <DoubleCheckIcon read /> : <SingleCheckIcon />
                )}
                {chat.isImage && <Image size={14} className="text-muted-foreground shrink-0" />}
                <span className="text-sm text-muted-foreground truncate">{chat.lastMessage}</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {chat.pinned && <Pin size={14} className="text-muted-foreground" />}
                {chat.unread && (
                  <span className="bg-wa-unread-badge text-primary-foreground text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        </button>
      ))}
      {/* (Chat Items - ختم ہو گیا ہے) */}
    </div>
  );
};

export default ChatList;
/* (Chat List Component - ختم ہو گیا ہے) */
