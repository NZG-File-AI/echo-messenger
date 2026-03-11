/* ========================================
   Bottom Navigation Bar Component
   نیچے نیویگیشن بار کمپوننٹ
   ======================================== */

import React from "react";
import { ChatsTabIcon, UpdatesTabIcon, CommunitiesTabIcon, CallsTabIcon } from "@/NZG73Button";

export type TabType = "chats" | "updates" | "communities" | "calls";

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  unreadCounts?: { chats?: number; updates?: number };
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, unreadCounts }) => {
  const tabs: { key: TabType; label: string; icon: React.ReactNode }[] = [
    { key: "chats", label: "Chats", icon: <ChatsTabIcon active={activeTab === "chats"} /> },
    { key: "updates", label: "Updates", icon: <UpdatesTabIcon active={activeTab === "updates"} /> },
    { key: "communities", label: "Communities", icon: <CommunitiesTabIcon active={activeTab === "communities"} /> },
    { key: "calls", label: "Calls", icon: <CallsTabIcon active={activeTab === "calls"} /> },
  ];

  return (
    <nav className="flex items-center justify-around bg-wa-header border-t border-border py-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className="flex flex-col items-center gap-0.5 py-1 px-4 relative"
        >
          <div className="relative">
            {tab.icon}
            {unreadCounts?.[tab.key as keyof typeof unreadCounts] ? (
              <span className="absolute -top-1 -right-2 bg-wa-unread-badge text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {unreadCounts[tab.key as keyof typeof unreadCounts]}
              </span>
            ) : null}
          </div>
          <span
            className={`text-[11px] font-medium ${
              activeTab === tab.key ? "text-wa-tab-active" : "text-wa-tab-inactive"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
/* (Bottom Navigation Bar Component - ختم ہو گیا ہے) */
