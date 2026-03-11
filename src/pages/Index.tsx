/* ========================================
   Main Index Page - WhatsApp Clone (N Priva)
   مین انڈیکس پیج - واٹس ایپ کلون (این پرائیوا)
   ======================================== */

import React, { useState, useEffect, useCallback } from "react";
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
import ProfilePopup from "@/components/ProfilePopup";
import ContactAbout from "@/components/ContactAbout";
import MediaDashboard from "@/components/MediaDashboard";
import MediaViewer from "@/components/MediaViewer";
import CallScreen from "@/components/CallScreen";
import { NewChatFAB } from "@/NZG73Button";

type View = "main" | "chat" | "settings" | "profile" | "contactAbout" | "mediaDashboard" | "mediaViewer" | "call";

/* Navigation History Stack for proper Back navigation */
/* نیویگیشن ہسٹری اسٹیک درست بیک نیویگیشن کے لیے */
interface NavigationState {
  view: View;
  data?: Record<string, unknown>;
}

const tabTitles: Record<TabType, string> = {
  chats: "N Priva",
  updates: "Updates",
  communities: "Communities",
  calls: "Calls",
};

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("chats");
  const [currentView, setCurrentView] = useState<View>("main");
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [popupChat, setPopupChat] = useState<ChatItem | null>(null);
  const [viewingImageId, setViewingImageId] = useState<string | null>(null);
  const [callInfo, setCallInfo] = useState<{ name: string; isVideo: boolean } | null>(null);
  const [navStack, setNavStack] = useState<View[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  /* Navigation Helper Functions */
  /* نیویگیشن ہیلپر فنکشنز */
  const navigateTo = useCallback((view: View) => {
    setNavStack((prev) => [...prev, currentView]);
    setCurrentView(view);
  }, [currentView]);

  const navigateBack = useCallback(() => {
    setNavStack((prev) => {
      const stack = [...prev];
      const previousView = stack.pop();
      if (previousView) {
        setCurrentView(previousView);
      } else {
        setCurrentView("main");
      }
      return stack;
    });
  }, []);
  /* (Navigation Helper Functions - ختم ہو گیا ہے) */

  /* Chat Selection Handler */
  /* چیٹ سلیکشن ہینڈلر */
  const handleChatSelect = useCallback((chat: ChatItem) => {
    setSelectedChat(chat);
    navigateTo("chat");
  }, [navigateTo]);
  /* (Chat Selection Handler - ختم ہو گیا ہے) */

  /* Avatar Click Handler - Opens Profile Popup */
  /* اوتار کلک ہینڈلر - پروفائل پاپ اپ کھولتا ہے */
  const handleAvatarClick = useCallback((chat: ChatItem) => {
    setPopupChat(chat);
  }, []);
  /* (Avatar Click Handler - ختم ہو گیا ہے) */

  /* Call Handlers */
  /* کال ہینڈلرز */
  const startCall = useCallback((name: string, isVideo: boolean) => {
    setCallInfo({ name, isVideo });
    navigateTo("call");
  }, [navigateTo]);

  const endCall = useCallback(() => {
    setCallInfo(null);
    navigateBack();
  }, [navigateBack]);
  /* (Call Handlers - ختم ہو گیا ہے) */

  /* Profile Popup Close */
  /* پروفائل پاپ اپ بند */
  const closePopup = useCallback(() => {
    setPopupChat(null);
  }, []);
  /* (Profile Popup Close - ختم ہو گیا ہے) */

  /* Call Screen View */
  /* کال سکرین ویو */
  if (currentView === "call" && callInfo) {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <CallScreen
          contactName={callInfo.name}
          isVideo={callInfo.isVideo}
          onEndCall={endCall}
        />
      </div>
    );
  }
  /* (Call Screen View - ختم ہو گیا ہے) */

  /* Media Viewer View */
  /* میڈیا ویور ویو */
  if (currentView === "mediaViewer" && viewingImageId) {
    return (
      <MediaViewer
        imageId={viewingImageId}
        onClose={() => {
          setViewingImageId(null);
          navigateBack();
        }}
      />
    );
  }
  /* (Media Viewer View - ختم ہو گیا ہے) */

  /* Media Dashboard View */
  /* میڈیا ڈیش بورڈ ویو */
  if (currentView === "mediaDashboard" && selectedChat) {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <MediaDashboard
          contactName={selectedChat.name}
          onBack={navigateBack}
          onImageClick={(imageId) => {
            setViewingImageId(imageId);
            navigateTo("mediaViewer");
          }}
        />
      </div>
    );
  }
  /* (Media Dashboard View - ختم ہو گیا ہے) */

  /* Contact About View */
  /* کانٹیکٹ اباؤٹ ویو */
  if (currentView === "contactAbout" && selectedChat) {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <ContactAbout
          chat={selectedChat}
          onBack={navigateBack}
          onMessage={() => {
            setCurrentView("chat");
            setNavStack((prev) => [...prev, "main"]);
          }}
          onAudioCall={() => startCall(selectedChat.name, false)}
          onVideoCall={() => startCall(selectedChat.name, true)}
          onMediaClick={() => navigateTo("mediaDashboard")}
        />
      </div>
    );
  }
  /* (Contact About View - ختم ہو گیا ہے) */

  /* Settings View */
  /* سیٹنگز ویو */
  if (currentView === "settings") {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <SettingsPage
          onBack={navigateBack}
          onProfileClick={() => navigateTo("profile")}
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
        <ProfilePage onBack={navigateBack} />
      </div>
    );
  }
  /* (Profile View - ختم ہو گیا ہے) */

  /* Chat View */
  /* چیٹ ویو */
  if (currentView === "chat" && selectedChat) {
    return (
      <div className="h-screen max-w-md mx-auto flex flex-col bg-background">
        <ChatView
          chat={selectedChat}
          onBack={navigateBack}
          onHeaderClick={() => navigateTo("contactAbout")}
          onAudioCall={() => startCall(selectedChat.name, false)}
          onVideoCall={() => startCall(selectedChat.name, true)}
        />
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
        onSettingsClick={() => navigateTo("settings")}
      />
      {/* (Top Header - ختم ہو گیا ہے) */}

      {/* Tab Content */}
      {/* ٹیب مواد */}
      {activeTab === "chats" && (
        <>
          <SearchBar />
          <FilterChips />
          <ChatList onChatSelect={handleChatSelect} onAvatarClick={handleAvatarClick} />
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

      {/* Profile Popup - Shows when avatar is clicked */}
      {/* پروفائل پاپ اپ - جب اوتار پر کلک ہوتا ہے */}
      {popupChat && (
        <ProfilePopup
          chat={popupChat}
          onClose={closePopup}
          onMessage={() => {
            closePopup();
            handleChatSelect(popupChat);
          }}
          onAudioCall={() => {
            closePopup();
            startCall(popupChat.name, false);
          }}
          onVideoCall={() => {
            closePopup();
            startCall(popupChat.name, true);
          }}
          onInfo={() => {
            setSelectedChat(popupChat);
            closePopup();
            navigateTo("contactAbout");
          }}
        />
      )}
      {/* (Profile Popup - ختم ہو گیا ہے) */}
    </div>
  );
};

export default Index;
/* (Main Index Page - ختم ہو گیا ہے) */
