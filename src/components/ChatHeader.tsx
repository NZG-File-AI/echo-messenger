/* ========================================
   Main Chat Header Component (Top Bar)
   مین چیٹ ہیڈر کمپوننٹ (ٹاپ بار)
   ======================================== */

import React, { useState } from "react";
import { CameraButton, SearchButton, MoreOptionsButton } from "@/NZG73Button";

interface ChatHeaderProps {
  title: string;
  onSettingsClick: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title, onSettingsClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-wa-header relative">
      {/* Title */}
      {/* عنوان */}
      <h1 className="text-xl font-bold text-wa-header-foreground">{title}</h1>
      {/* (Title - ختم ہو گیا ہے) */}

      {/* Header Actions */}
      {/* ہیڈر ایکشنز */}
      <div className="flex items-center">
        <CameraButton />
        <MoreOptionsButton onClick={() => setShowMenu(!showMenu)} />
      </div>
      {/* (Header Actions - ختم ہو گیا ہے) */}

      {/* Dropdown Menu */}
      {/* ڈراپ ڈاؤن مینو */}
      {showMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
          <div className="absolute right-2 top-12 bg-card rounded-lg shadow-xl z-50 py-2 min-w-[180px] border border-border">
            {["New group", "New broadcast", "Linked devices", "Starred messages", "Settings"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setShowMenu(false);
                  if (item === "Settings") onSettingsClick();
                }}
                className="w-full text-left px-4 py-2.5 text-[15px] hover:bg-muted transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
      {/* (Dropdown Menu - ختم ہو گیا ہے) */}
    </div>
  );
};

export default ChatHeader;
/* (Main Chat Header Component - ختم ہو گیا ہے) */
