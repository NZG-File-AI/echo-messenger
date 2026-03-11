/* ========================================
   Settings Page Component
   سیٹنگز پیج کمپوننٹ
   ======================================== */

import React from "react";
import {
  BackButton,
  SearchButton,
  AccountIcon,
  PrivacyIcon,
  ListsIcon,
  ChatsSettingsIcon,
  NotificationsIcon,
  StorageIcon,
  AccessibilityIcon,
  LanguageIcon,
  HelpIcon,
  QrCodeIcon,
  DarkModeToggle,
  PlusIcon,
} from "@/NZG73Button";

interface SettingsPageProps {
  onBack: () => void;
  onProfileClick: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

const settingsItems = [
  { icon: <AccountIcon />, title: "Account", subtitle: "Security notifications, log out" },
  { icon: <PrivacyIcon />, title: "Privacy", subtitle: "Block contacts, disappearing messages" },
  { icon: <ListsIcon />, title: "Lists", subtitle: "Manage people and groups" },
  { icon: <ChatsSettingsIcon />, title: "Chats", subtitle: "Theme, wallpapers, chat history" },
  { icon: <NotificationsIcon />, title: "Notifications", subtitle: "Message, group & call tones" },
  { icon: <StorageIcon />, title: "Storage and data", subtitle: "Network usage, auto-download" },
  { icon: <AccessibilityIcon />, title: "Accessibility", subtitle: "Increase contrast, animation" },
  { icon: <LanguageIcon />, title: "App language", subtitle: "English (device's language)" },
  { icon: <HelpIcon />, title: "Help", subtitle: "Help center, contact us, privacy policy" },
];

const avatarColors = ["bg-emerald-500"];

const SettingsPage: React.FC<SettingsPageProps> = ({ onBack, onProfileClick, isDark, onToggleDark }) => {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Settings Header */}
      {/* سیٹنگز ہیڈر */}
      <div className="flex items-center gap-2 px-1 py-2 bg-wa-header">
        <BackButton onClick={onBack} />
        <h1 className="text-lg font-medium text-wa-header-foreground flex-1">Settings</h1>
        <SearchButton />
      </div>
      {/* (Settings Header - ختم ہو گیا ہے) */}

      <div className="flex-1 overflow-y-auto wa-scrollbar">
        {/* Profile Section */}
        {/* پروفائل سیکشن */}
        <button onClick={onProfileClick} className="flex items-center gap-4 w-full px-4 py-4 hover:bg-muted transition-colors">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl shrink-0 ${avatarColors[0]}`}>
            M
          </div>
          <div className="flex-1 text-left">
            <p className="font-medium text-lg">Muhammad Noman</p>
            <p className="text-sm text-primary">What's happening?</p>
          </div>
          <QrCodeIcon />
          <PlusIcon />
        </button>
        {/* (Profile Section - ختم ہو گیا ہے) */}

        <p className="text-xs text-muted-foreground px-4 py-2">This is a linked device. <span className="text-wa-link font-medium">Learn more</span></p>

        <div className="border-t border-wa-divider" />

        {/* Dark Mode Toggle */}
        {/* ڈارک موڈ ٹوگل */}
        <div className="flex items-center gap-4 px-4 py-3.5 hover:bg-muted transition-colors">
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
          <div className="flex-1">
            <p className="text-[15px] font-medium">Dark mode</p>
            <p className="text-sm text-muted-foreground">{isDark ? "On" : "Off"}</p>
          </div>
        </div>
        {/* (Dark Mode Toggle - ختم ہو گیا ہے) */}

        <div className="border-t border-wa-divider" />

        {/* Settings Items List */}
        {/* سیٹنگز آئٹمز لسٹ */}
        {settingsItems.map((item, i) => (
          <button key={i} className="flex items-center gap-4 w-full px-4 py-3.5 hover:bg-muted transition-colors">
            <div className="w-10 flex items-center justify-center">{item.icon}</div>
            <div className="flex-1 text-left">
              <p className="text-[15px] font-medium">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
          </button>
        ))}
        {/* (Settings Items List - ختم ہو گیا ہے) */}
      </div>
    </div>
  );
};

export default SettingsPage;
/* (Settings Page Component - ختم ہو گیا ہے) */
