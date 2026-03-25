/* ========================================
   Updates/Status Tab Component
   اپڈیٹس/سٹیٹس ٹیب کمپوننٹ
   ======================================== */

import React, { useCallback, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import StatusViewer from "./StatusViewer";

export interface StatusItem {
  id: string;
  name: string;
  time: string;
  viewed: boolean;
  views: number;
  story: string;
}

const initialStatuses: StatusItem[] = [
  { id: "1", name: "Bhai Arslan", time: "Today, 11:45 AM", viewed: false, views: 42, story: "At work - coffee + code" },
  { id: "2", name: "AI Tools", time: "Today, 10:30 AM", viewed: false, views: 87, story: "Shipping a new build today" },
  { id: "3", name: "John Smith", time: "Today, 9:15 AM", viewed: true, views: 21, story: "Gym done. Feeling strong." },
  { id: "4", name: "Sarah Wilson", time: "Yesterday, 8:00 PM", viewed: true, views: 15, story: "Sunset walk with friends" },
];

const avatarColors = ["bg-blue-500", "bg-purple-500", "bg-teal-500", "bg-orange-500"];

const UpdatesTab: React.FC = () => {
  const [statuses, setStatuses] = useState<StatusItem[]>(initialStatuses);
  const [activeStatusIndex, setActiveStatusIndex] = useState<number | null>(null);
  const [showMyViews, setShowMyViews] = useState(false);

  const unviewed = useMemo(() => statuses.filter((status) => !status.viewed), [statuses]);
  const viewed = useMemo(() => statuses.filter((status) => status.viewed), [statuses]);

  const markViewed = useCallback((statusId: string) => {
    setStatuses((prev) => prev.map((status) => (status.id === statusId ? { ...status, viewed: true } : status)));
  }, []);

  const openStatus = useCallback((statusId: string) => {
    const index = statuses.findIndex((status) => status.id === statusId);
    if (index === -1) return;
    setActiveStatusIndex(index);
    markViewed(statusId);
  }, [markViewed, statuses]);

  return (
    <div className="relative flex-1 overflow-y-auto wa-scrollbar">
      {/* My Status */}
      {/* میرا سٹیٹس */}
      <button
        onClick={() => setShowMyViews((prev) => !prev)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted"
        aria-label="Toggle my status views"
      >
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-primary-foreground">
            M
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-wa-fab">
            <Plus size={14} className="text-primary-foreground" />
          </div>
        </div>
        <div>
          <p className="font-medium">My status</p>
          <p className="text-sm text-muted-foreground">Tap to see status views</p>
        </div>
      </button>

      {showMyViews && (
        <div className="mx-4 mb-2 rounded-xl border border-border bg-card p-3">
          <p className="mb-1 text-sm font-medium text-foreground">Views on my latest status</p>
          <p className="text-xs text-muted-foreground">Seen by {statuses.reduce((sum, status) => sum + status.views, 0)} contacts</p>
        </div>
      )}
      {/* (My Status - ختم ہو گیا ہے) */}

      {/* Recent Updates */}
      {/* حالیہ اپڈیٹس */}
      {unviewed.length > 0 && (
        <>
          <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Recent updates</p>
          {unviewed.map((status, i) => (
            <button
              key={status.id}
              onClick={() => openStatus(status.id)}
              className="flex w-full items-center gap-3 px-4 py-3 transition-colors hover:bg-muted"
              aria-label={`Open status by ${status.name}`}
            >
              <div className="w-14 h-14 rounded-full border-2 border-wa-unread-badge p-0.5">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-primary-foreground font-semibold ${avatarColors[i % avatarColors.length]}`}>
                  {status.name.charAt(0)}
                </div>
              </div>
              <div className="min-w-0 text-left">
                <p className="text-[15px] font-medium">{status.name}</p>
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
          <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Viewed updates</p>
          {viewed.map((status, i) => (
            <button
              key={status.id}
              onClick={() => openStatus(status.id)}
              className="flex w-full items-center gap-3 px-4 py-3 transition-colors hover:bg-muted"
              aria-label={`Open viewed status by ${status.name}`}
            >
              <div className="w-14 h-14 rounded-full border-2 border-muted-foreground/30 p-0.5">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-primary-foreground font-semibold ${avatarColors[(i + 2) % avatarColors.length]}`}>
                  {status.name.charAt(0)}
                </div>
              </div>
              <div className="min-w-0 text-left">
                <p className="text-[15px] font-medium">{status.name}</p>
                <p className="text-sm text-muted-foreground">{status.time}</p>
              </div>
            </button>
          ))}
        </>
      )}
      {/* (Viewed Updates - ختم ہو گیا ہے) */}

      {activeStatusIndex !== null && (
        <StatusViewer
          statuses={statuses}
          initialIndex={activeStatusIndex}
          onClose={() => setActiveStatusIndex(null)}
          onViewed={markViewed}
        />
      )}
    </div>
  );
};

export default UpdatesTab;
/* (Updates Tab Component - ختم ہو گیا ہے) */
