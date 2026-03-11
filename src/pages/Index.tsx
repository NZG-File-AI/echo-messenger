/* ========================================
   Main Index Page - WhatsApp Clone
   مین انڈیکس پیج - واٹس ایپ کلون
   ======================================== */

import React, { useState, useEffect } from "react";
import BottomNav, { TabType } from "@/components/BottomNav";
import ChatList, { ChatItem } from "@/components/ChatList";
import ChatView from "@/components/ChatView";
import SettingsPage from "@/components/SettingsPage";
import ProfilePage from "@/components/ProfilePage";
import UpdatesTab from "@/components/UpdatesTab";
import CommunitiesTab from "@/components/CommunitiesTab";
import CallsTab from "@/components/CallsTab";
import ChatHeader from "@/components/ChatHeader";
import SearchBar from "@/components/SearchBar";
import FilterChips from "@/components/FilterChips";
import { NewChatFAB } from "@/NZG73Button";

type View = "main" | "chat" | "settings" | "profile";

const tabTitles: Record<TabType, string> = {
  chats: "WhatsApp",
  updates: "Updates",
  communities: "Communities",
  calls: "Calls",
};

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("chats");
  const [currentView, setCurrentView] = useState<View>("main");
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleChatSelect = (chat: ChatItem) => {
    setSelectedChat(chat);
    setCurrentView("chat");
  };

  /* Settings View */
  /* سیٹنگز ویو */
  if (currentView === "settings") {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <SettingsPage
          onBack={() => setCurrentView("main")}
          onProfileClick={() => setCurrentView("profile")}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
        />
      </div>
    );
  }
  /* (Settings View - ختم ہو گیا ہے) */

  /* Profile View */
  /* پروفائل ویو */
  if (currentView === "profile") {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <ProfilePage onBack={() => setCurrentView("settings")} />
      </div>
    );
  }
  /* (Profile View - ختم ہو گیا ہے) */

  /* Chat View */
  /* چیٹ ویو */
  if (currentView === "chat" && selectedChat) {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <ChatView chat={selectedChat} onBack={() => setCurrentView("main")} />
      </div>
    );
  }
  /* (Chat View - ختم ہو گیا ہے) */

  /* Main View */
  /* مین ویو */
  return (
    <div className="h-screen max-w-md mx-auto flex flex-col bg-background relative">
      {/* Top Header */}
      {/* ٹاپ ہیڈر */}
      <ChatHeader
        title={tabTitles[activeTab]}
        onSettingsClick={() => setCurrentView("settings")}
      />
      {/* (Top Header - ختم ہو گیا ہے) */}

      {/* Tab Content */}
      {/* ٹیب مواد */}
      {activeTab === "chats" && (
        <>
          <SearchBar />
          <FilterChips />
          <ChatList onChatSelect={handleChatSelect} />
        </>
      )}
      {activeTab === "updates" && <UpdatesTab />}
      {activeTab === "communities" && <CommunitiesTab />}
      {activeTab === "calls" && <CallsTab />}
      {/* (Tab Content - ختم ہو گیا ہے) */}

      {/* Floating Action Button */}
      {/* فلوٹنگ ایکشن بٹن */}
      {activeTab === "chats" && (
        <div className="absolute bottom-20 right-4">
          <NewChatFAB />
        </div>
      )}
      {/* (Floating Action Button - ختم ہو گیا ہے) */}

      {/* Bottom Navigation */}
      {/* نیچے نیویگیشن */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        unreadCounts={{ chats: 4 }}
      />
      {/* (Bottom Navigation - ختم ہو گیا ہے) */}
    </div>
  );
};

export default Index;
/* (Main Index Page - ختم ہو گیا ہے) */
