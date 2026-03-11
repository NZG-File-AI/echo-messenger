/* ========================================
   Calls Tab Component
   کالز ٹیب کمپوننٹ
   ======================================== */

import React from "react";
import { Phone, Video, PhoneIncoming, PhoneOutgoing, PhoneMissed } from "lucide-react";

interface CallRecord {
  id: string;
  name: string;
  time: string;
  type: "incoming" | "outgoing" | "missed";
  isVideo: boolean;
}

const demoCalls: CallRecord[] = [
  { id: "1", name: "Bhai Arslan", time: "Today, 2:30 PM", type: "outgoing", isVideo: false },
  { id: "2", name: "Chat GPT", time: "Today, 1:15 PM", type: "incoming", isVideo: true },
  { id: "3", name: "Meta AI", time: "Yesterday, 6:45 PM", type: "missed", isVideo: false },
  { id: "4", name: "John Smith", time: "Yesterday, 3:00 PM", type: "outgoing", isVideo: true },
  { id: "5", name: "Sarah Wilson", time: "Monday, 10:00 AM", type: "incoming", isVideo: false },
  { id: "6", name: "+92 321 7119793", time: "Monday, 8:30 AM", type: "missed", isVideo: false },
];

const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-teal-500", "bg-orange-500", "bg-pink-500", "bg-indigo-500"
];

const CallIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "incoming":
      return <PhoneIncoming size={14} className="text-primary" />;
    case "outgoing":
      return <PhoneOutgoing size={14} className="text-primary" />;
    case "missed":
      return <PhoneMissed size={14} className="text-destructive" />;
    default:
      return null;
  }
};

const CallsTab: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto wa-scrollbar">
      {/* Calls Header Link */}
      {/* کالز ہیڈر لنک */}
      <button className="flex items-center gap-4 w-full px-4 py-3 hover:bg-muted transition-colors">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Phone size={20} className="text-primary-foreground" />
        </div>
        <span className="font-medium text-[15px]">Create call link</span>
      </button>
      {/* (Calls Header Link - ختم ہو گیا ہے) */}

      <p className="text-sm text-muted-foreground font-medium px-4 py-2">Recent</p>

      {/* Call Records */}
      {/* کال ریکارڈز */}
      {demoCalls.map((call, i) => (
        <button key={call.id} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-semibold ${avatarColors[i % avatarColors.length]}`}>
            {call.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 text-left">
            <p className={`font-medium text-[15px] ${call.type === "missed" ? "text-destructive" : ""}`}>
              {call.name}
            </p>
            <div className="flex items-center gap-1">
              <CallIcon type={call.type} />
              <span className="text-sm text-muted-foreground">{call.time}</span>
            </div>
          </div>
          {call.isVideo ? (
            <Video size={22} className="text-primary" />
          ) : (
            <Phone size={22} className="text-primary" />
          )}
        </button>
      ))}
      {/* (Call Records - ختم ہو گیا ہے) */}
    </div>
  );
};

export default CallsTab;
/* (Calls Tab Component - ختم ہو گیا ہے) */
