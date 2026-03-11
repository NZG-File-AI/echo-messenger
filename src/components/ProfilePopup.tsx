/* ========================================
   Profile Popup Component (Click on Avatar)
   پروفائل پاپ اپ کمپوننٹ (اوتار پر کلک)
   ======================================== */

import React, { useCallback } from "react";
import { PopupMessageIcon, PopupAudioCallIcon, PopupVideoCallIcon, PopupInfoIcon } from "@/NZG73Button";
import type { ChatItem } from "./ChatList";

const avatarColors = [
  "bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500",
  "bg-pink-500", "bg-teal-500", "bg-red-500", "bg-indigo-500", "bg-amber-500", "bg-cyan-500"
];

interface ProfilePopupProps {
  chat: ChatItem;
  onClose: () => void;
  onMessage: () => void;
  onAudioCall: () => void;
  onVideoCall: () => void;
  onInfo: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ chat, onClose, onMessage, onAudioCall, onVideoCall, onInfo }) => {
  const colorIndex = chat.name.charCodeAt(0) % avatarColors.length;

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    /* Profile Popup Overlay */
    /* پروفائل پاپ اپ اوورلے */
    <div
      className="fixed inset-0 bg-foreground/60 z-50 flex items-center justify-center px-8"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-xl shadow-2xl w-full max-w-[280px] overflow-hidden">
        {/* Popup Header - User Name */}
        {/* پاپ اپ ہیڈر - صارف کا نام */}
        <div className="px-4 pt-4 pb-2">
          <h3 className="text-[16px] font-semibold text-foreground truncate">{chat.name}</h3>
        </div>
        {/* (Popup Header - ختم ہو گیا ہے) */}

        {/* Popup Avatar / Profile Picture */}
        {/* پاپ اپ اوتار / پروفائل تصویر */}
        <div className="flex justify-center px-4 py-3">
          <div className={`w-48 h-48 rounded-none flex items-center justify-center text-primary-foreground font-bold text-6xl ${avatarColors[colorIndex]}`}>
            {chat.name.charAt(0).toUpperCase()}
          </div>
        </div>
        {/* (Popup Avatar - ختم ہو گیا ہے) */}

        {/* Popup Action Buttons Bar */}
        {/* پاپ اپ ایکشن بٹنز بار */}
        <div className="flex items-center justify-around px-4 py-3 border-t border-border bg-card">
          <button onClick={onMessage} className="flex flex-col items-center gap-1 p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Message">
            <PopupMessageIcon />
            <span className="text-[11px] text-primary">Message</span>
          </button>
          <button onClick={onAudioCall} className="flex flex-col items-center gap-1 p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Audio Call">
            <PopupAudioCallIcon />
            <span className="text-[11px] text-primary">Audio</span>
          </button>
          <button onClick={onVideoCall} className="flex flex-col items-center gap-1 p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Video Call">
            <PopupVideoCallIcon />
            <span className="text-[11px] text-primary">Video</span>
          </button>
          <button onClick={onInfo} className="flex flex-col items-center gap-1 p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Info">
            <PopupInfoIcon />
            <span className="text-[11px] text-primary">Info</span>
          </button>
        </div>
        {/* (Popup Action Buttons Bar - ختم ہو گیا ہے) */}
      </div>
    </div>
    /* (Profile Popup Overlay - ختم ہو گیا ہے) */
  );
};

export default ProfilePopup;
/* (Profile Popup Component - ختم ہو گیا ہے) */
