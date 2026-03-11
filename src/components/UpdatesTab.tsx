/* ========================================
   Updates/Status Tab Component
   اپڈیٹس/سٹیٹس ٹیب کمپوننٹ
   ======================================== */

import React from "react";
import { Plus } from "lucide-react";

interface StatusItem {
  id: string;
  name: string;
  time: string;
  viewed: boolean;
}

const demoStatuses: StatusItem[] = [
  { id: "1", name: "Bhai Arslan", time: "Today, 11:45 AM", viewed: false },
  { id: "2", name: "AI Tools", time: "Today, 10:30 AM", viewed: false },
  { id: "3", name: "John Smith", time: "Today, 9:15 AM", viewed: true },
  { id: "4", name: "Sarah Wilson", time: "Yesterday, 8:00 PM", viewed: true },
];

const avatarColors = ["bg-blue-500", "bg-purple-500", "bg-teal-500", "bg-orange-500"];

const UpdatesTab: React.FC = () => {
  const unviewed = demoStatuses.filter((s) => !s.viewed);
  const viewed = demoStatuses.filter((s) => s.viewed);

  return (
    <div className="flex-1 overflow-y-auto wa-scrollbar">
      {/* My Status */}
      {/* میرا سٹیٹس */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-primary-foreground font-bold text-xl">
            M
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-wa-fab flex items-center justify-center border-2 border-background">
            <Plus size={14} className="text-primary-foreground" />
          </div>
        </div>
        <div>
          <p className="font-medium">My status</p>
          <p className="text-sm text-muted-foreground">Tap to add status update</p>
        </div>
      </div>
      {/* (My Status - ختم ہو گیا ہے) */}

      {/* Recent Updates */}
      {/* حالیہ اپڈیٹس */}
      {unviewed.length > 0 && (
        <>
          <p className="text-sm text-muted-foreground font-medium px-4 py-2">Recent updates</p>
          {unviewed.map((status, i) => (
            <button key={status.id} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors">
              <div className={`w-14 h-14 rounded-full border-2 border-wa-unread-badge p-0.5`}>
                <div className={`w-full h-full rounded-full flex items-center justify-center text-primary-foreground font-semibold ${avatarColors[i % avatarColors.length]}`}>
                  {status.name.charAt(0)}
                </div>
              </div>
              <div className="text-left">
                <p className="font-medium text-[15px]">{status.name}</p>
                <p className="text-sm text-muted-foreground">{status.time}</p>
              </div>
            </button>
          ))}
        </>
      )}
      {/* (Recent Updates - ختم ہو گیا ہے) */}

      {/* Viewed Updates */}
      {/* دیکھے گئے اپڈیٹس */}
      {viewed.length > 0 && (
        <>
          <p className="text-sm text-muted-foreground font-medium px-4 py-2">Viewed updates</p>
          {viewed.map((status, i) => (
            <button key={status.id} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors">
              <div className="w-14 h-14 rounded-full border-2 border-muted-foreground/30 p-0.5">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-primary-foreground font-semibold ${avatarColors[(i + 2) % avatarColors.length]}`}>
                  {status.name.charAt(0)}
                </div>
              </div>
              <div className="text-left">
                <p className="font-medium text-[15px]">{status.name}</p>
                <p className="text-sm text-muted-foreground">{status.time}</p>
              </div>
            </button>
          ))}
        </>
      )}
      {/* (Viewed Updates - ختم ہو گیا ہے) */}
    </div>
  );
};

export default UpdatesTab;
/* (Updates Tab Component - ختم ہو گیا ہے) */
