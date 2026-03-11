/* ========================================
   Contact About Page Component (User Profile Detail)
   کانٹیکٹ اباؤٹ پیج کمپوننٹ (صارف پروفائل تفصیل)
   ======================================== */

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  BackButton,
  MoreOptionsButton,
  ChevronRightIcon,
  MuteIcon,
  LockChatIcon,
  DisappearingIcon,
  BlockIcon,
  ReportIcon,
  ClearChatIcon,
  MediaIcon,
} from "@/NZG73Button";
import { MessageCircle, Phone, Video } from "lucide-react";
import type { ChatItem } from "./ChatList";

const avatarColors = [
  "bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500",
  "bg-pink-500", "bg-teal-500", "bg-red-500", "bg-indigo-500", "bg-amber-500", "bg-cyan-500"
];

interface ContactAboutProps {
  chat: ChatItem;
  onBack: () => void;
  onMessage: () => void;
  onAudioCall: () => void;
  onVideoCall: () => void;
  onMediaClick: () => void;
}

const ContactAbout: React.FC<ContactAboutProps> = ({ chat, onBack, onMessage, onAudioCall, onVideoCall, onMediaClick }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isChatLocked, setIsChatLocked] = useState(false);
  const [showLockDialog, setShowLockDialog] = useState(false);
  const [lockPin, setLockPin] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const colorIndex = chat.name.charCodeAt(0) % avatarColors.length;

  /* Collapsible Header Scroll Handler */
  /* کولیپسیبل ہیڈر سکرول ہینڈلر */
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      setIsCollapsed(scrollRef.current.scrollTop > 120);
    }
  }, []);
  /* (Collapsible Header Scroll Handler - ختم ہو گیا ہے) */

  const handleLockChat = useCallback(() => {
    if (lockPin.length >= 4) {
      setIsChatLocked(true);
      setShowLockDialog(false);
      setLockPin("");
    }
  }, [lockPin]);

  const mediaPreviewColors = ["bg-blue-400", "bg-pink-400", "bg-teal-400", "bg-orange-400", "bg-purple-400", "bg-amber-400"];

  return (
    /* Contact About Container */
    /* کانٹیکٹ اباؤٹ کنٹینر */
    <div className="flex flex-col h-full bg-background relative">
      {/* Sticky/Collapsed Header */}
      {/* سٹکی/کولیپسڈ ہیڈر */}
      <div className={`bg-wa-header z-10 transition-all duration-300 ${isCollapsed ? "shadow-md" : ""}`}>
        <div className="flex items-center gap-2 px-1 py-2">
          <BackButton onClick={onBack} />
          {isCollapsed && (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0 ${avatarColors[colorIndex]}`}>
              {chat.name.charAt(0).toUpperCase()}
            </div>
          )}
          <h1 className={`font-medium text-wa-header-foreground flex-1 truncate transition-all ${isCollapsed ? "text-base" : "text-lg"}`}>
            {isCollapsed ? chat.name : ""}
          </h1>
          <MoreOptionsButton onClick={() => setShowMenu(!showMenu)} />
          {/* Three Dot Menu Dropdown */}
          {/* تین ڈاٹ مینو ڈراپ ڈاؤن */}
          {showMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
              <div className="absolute right-2 top-12 bg-card rounded-lg shadow-xl z-50 py-2 min-w-[160px] border border-border">
                {["Share", "Edit", "Search"].map((item) => (
                  <button key={item} onClick={() => setShowMenu(false)} className="w-full text-left px-4 py-2.5 text-[15px] hover:bg-muted transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}
          {/* (Three Dot Menu Dropdown - ختم ہو گیا ہے) */}
        </div>
      </div>
      {/* (Sticky/Collapsed Header - ختم ہو گیا ہے) */}

      {/* Scrollable Content */}
      {/* سکرول ایبل مواد */}
      <div ref={scrollRef} onScroll={handleScroll} className="flex-1 overflow-y-auto wa-scrollbar">
        {/* Profile Picture & Name Section (Collapsible) */}
        {/* پروفائل تصویر اور نام سیکشن */}
        <div className="flex flex-col items-center py-6 bg-card">
          <div className={`w-28 h-28 rounded-full flex items-center justify-center text-primary-foreground font-bold text-4xl shadow-lg ${avatarColors[colorIndex]}`}>
            {chat.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-semibold mt-3">{chat.name}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">+92 347 7319793</p>
          <p className="text-xs text-muted-foreground mt-1">last seen today at 11:45 AM</p>
        </div>
        {/* (Profile Picture & Name Section - ختم ہو گیا ہے) */}

        {/* Quick Action Buttons (Message, Audio, Video) */}
        {/* کوئیک ایکشن بٹنز */}
        <div className="flex items-center justify-around py-4 bg-card border-t border-border">
          <button onClick={onMessage} className="flex flex-col items-center gap-1.5 p-2" aria-label="Message">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <MessageCircle size={22} className="text-primary" />
            </div>
            <span className="text-xs text-primary font-medium">Message</span>
          </button>
          <button onClick={onAudioCall} className="flex flex-col items-center gap-1.5 p-2" aria-label="Audio call">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Phone size={22} className="text-primary" />
            </div>
            <span className="text-xs text-primary font-medium">Audio</span>
          </button>
          <button onClick={onVideoCall} className="flex flex-col items-center gap-1.5 p-2" aria-label="Video call">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Video size={22} className="text-primary" />
            </div>
            <span className="text-xs text-primary font-medium">Video</span>
          </button>
        </div>
        {/* (Quick Action Buttons - ختم ہو گیا ہے) */}

        <div className="h-2 bg-muted" />

        {/* About Section */}
        {/* اباؤٹ سیکشن */}
        <div className="bg-card px-4 py-3">
          <p className="text-sm text-muted-foreground">About</p>
          <p className="text-[15px] mt-1">Hey there! I am using N Priva</p>
        </div>
        {/* (About Section - ختم ہو گیا ہے) */}

        <div className="h-2 bg-muted" />

        {/* Media, Links, and Docs Section */}
        {/* میڈیا، لنکس اور ڈاکس سیکشن */}
        <button onClick={onMediaClick} className="w-full bg-card hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[15px] font-medium">Media, links, and docs</span>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">134</span>
              <ChevronRightIcon />
            </div>
          </div>
          {/* Media Preview Thumbnails (Horizontal Scroll) */}
          {/* میڈیا پریویو تھمبنیلز */}
          <div className="flex gap-1 px-4 pb-3 overflow-x-auto">
            {mediaPreviewColors.map((color, i) => (
              <div key={i} className={`w-20 h-20 rounded-lg shrink-0 ${color}`} />
            ))}
          </div>
          {/* (Media Preview Thumbnails - ختم ہو گیا ہے) */}
        </button>
        {/* (Media, Links, and Docs Section - ختم ہو گیا ہے) */}

        <div className="h-2 bg-muted" />

        {/* Mute Notifications Toggle */}
        {/* نوٹیفکیشنز میوٹ ٹوگل */}
        <div className="bg-card">
          <div className="flex items-center gap-4 px-4 py-3.5">
            <MuteIcon muted={isMuted} />
            <span className="flex-1 text-[15px]">Mute notifications</span>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-12 h-7 rounded-full transition-colors relative ${isMuted ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label="Toggle mute"
            >
              <div className={`w-5 h-5 rounded-full bg-card shadow absolute top-1 transition-transform ${isMuted ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>
        </div>
        {/* (Mute Notifications Toggle - ختم ہو گیا ہے) */}

        <div className="h-px bg-border mx-4" />

        {/* Disappearing Messages */}
        {/* غائب ہونے والے پیغامات */}
        <button className="flex items-center gap-4 w-full px-4 py-3.5 bg-card hover:bg-muted transition-colors">
          <DisappearingIcon />
          <div className="flex-1 text-left">
            <p className="text-[15px]">Disappearing messages</p>
            <p className="text-sm text-muted-foreground">Off</p>
          </div>
        </button>
        {/* (Disappearing Messages - ختم ہو گیا ہے) */}

        <div className="h-px bg-border mx-4" />

        {/* Chat Lock Toggle */}
        {/* چیٹ لاک ٹوگل */}
        <div className="bg-card">
          <div className="flex items-center gap-4 px-4 py-3.5">
            <LockChatIcon />
            <span className="flex-1 text-[15px]">Chat lock</span>
            <button
              onClick={() => {
                if (isChatLocked) {
                  setIsChatLocked(false);
                } else {
                  setShowLockDialog(true);
                }
              }}
              className={`w-12 h-7 rounded-full transition-colors relative ${isChatLocked ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label="Toggle chat lock"
            >
              <div className={`w-5 h-5 rounded-full bg-card shadow absolute top-1 transition-transform ${isChatLocked ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>
        </div>
        {/* (Chat Lock Toggle - ختم ہو گیا ہے) */}

        <div className="h-2 bg-muted" />

        {/* Encryption Notice */}
        {/* انکرپشن نوٹس */}
        <div className="bg-card px-4 py-3">
          <p className="text-xs text-muted-foreground text-center">
            Messages and calls are end-to-end encrypted. Tap to verify.
          </p>
        </div>
        {/* (Encryption Notice - ختم ہو گیا ہے) */}

        <div className="h-2 bg-muted" />

        {/* Danger Zone - Clear, Block, Report */}
        {/* خطرناک زون - کلیئر، بلاک، رپورٹ */}
        <div className="bg-card">
          <button className="flex items-center gap-4 w-full px-4 py-3.5 hover:bg-muted transition-colors">
            <ClearChatIcon />
            <span className="text-[15px] text-destructive">Clear chat</span>
          </button>
          <div className="h-px bg-border mx-4" />
          <button className="flex items-center gap-4 w-full px-4 py-3.5 hover:bg-muted transition-colors">
            <BlockIcon />
            <span className="text-[15px] text-destructive">Block {chat.name.split(" ")[0]}</span>
          </button>
          <div className="h-px bg-border mx-4" />
          <button className="flex items-center gap-4 w-full px-4 py-3.5 hover:bg-muted transition-colors">
            <ReportIcon />
            <span className="text-[15px] text-destructive">Report {chat.name.split(" ")[0]}</span>
          </button>
        </div>
        {/* (Danger Zone - ختم ہو گیا ہے) */}

        <div className="h-8 bg-muted" />
      </div>
      {/* (Scrollable Content - ختم ہو گیا ہے) */}

      {/* Chat Lock PIN Dialog */}
      {/* چیٹ لاک پن ڈائیلاگ */}
      {showLockDialog && (
        <div className="fixed inset-0 bg-foreground/60 z-50 flex items-center justify-center px-6" onClick={() => setShowLockDialog(false)}>
          <div className="bg-card rounded-xl shadow-2xl w-full max-w-[300px] p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-center mb-2">Lock this chat</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Set a 4-digit PIN to lock and hide this chat from your main chat list.
            </p>
            <div className="flex justify-center gap-3 mb-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-xl font-bold ${lockPin.length > i ? "border-primary" : "border-border"}`}>
                  {lockPin[i] ? "●" : ""}
                </div>
              ))}
            </div>
            {/* PIN Keypad */}
            {/* پن کی پیڈ */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, "del"].map((key, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (key === "del") setLockPin((prev) => prev.slice(0, -1));
                    else if (key !== null && lockPin.length < 4) setLockPin((prev) => prev + key);
                  }}
                  className={`h-12 rounded-lg text-lg font-medium transition-colors ${key === null ? "invisible" : "bg-muted hover:bg-border"}`}
                  disabled={key === null}
                >
                  {key === "del" ? "⌫" : key}
                </button>
              ))}
            </div>
            {/* (PIN Keypad - ختم ہو گیا ہے) */}
            <div className="flex gap-3">
              <button onClick={() => { setShowLockDialog(false); setLockPin(""); }} className="flex-1 py-2.5 rounded-lg bg-muted text-sm font-medium hover:bg-border transition-colors">
                Cancel
              </button>
              <button
                onClick={handleLockChat}
                disabled={lockPin.length < 4}
                className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50 hover:bg-primary/90 transition-colors"
              >
                Lock
              </button>
            </div>
          </div>
        </div>
      )}
      {/* (Chat Lock PIN Dialog - ختم ہو گیا ہے) */}
    </div>
    /* (Contact About Container - ختم ہو گیا ہے) */
  );
};

export default ContactAbout;
/* (Contact About Page Component - ختم ہو گیا ہے) */
