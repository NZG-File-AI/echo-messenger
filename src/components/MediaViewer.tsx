/* ========================================
   Media Viewer Component (Full Screen Image/Video Viewer)
   میڈیا ویور کمپوننٹ (فل سکرین تصویر/ویڈیو ویور)
   ======================================== */

import React, { useState, useCallback } from "react";
import { MoreOptionsButton } from "@/NZG73Button";
import { X, Edit2, Share2, Download, Eye, RotateCw, Trash2 } from "lucide-react";

interface MediaViewerProps {
  imageId: string;
  onClose: () => void;
}

const viewerColors = [
  "bg-blue-400", "bg-pink-400", "bg-purple-400", "bg-teal-400", "bg-orange-400",
  "bg-amber-400", "bg-emerald-400", "bg-red-400", "bg-indigo-400", "bg-cyan-400",
];

const MediaViewer: React.FC<MediaViewerProps> = ({ imageId, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [rotation, setRotation] = useState(0);

  const colorIndex = imageId.charCodeAt(1) % viewerColors.length;

  const handleMenuAction = useCallback((action: string) => {
    setShowMenu(false);
    switch (action) {
      case "edit":
        // placeholder
        break;
      case "share":
        if (navigator.share) {
          navigator.share({ title: "Shared media", text: "Check out this media" }).catch(() => {});
        }
        break;
      case "save":
        // placeholder - download
        break;
      case "gallery":
        // placeholder - open in gallery
        break;
      case "rotate":
        setRotation((prev) => (prev + 90) % 360);
        break;
      case "delete":
        onClose();
        break;
    }
  }, [onClose]);

  const menuItems = [
    { key: "edit", label: "Edit", icon: <Edit2 size={18} /> },
    { key: "share", label: "Share", icon: <Share2 size={18} /> },
    { key: "save", label: "Save", icon: <Download size={18} /> },
    { key: "gallery", label: "View in gallery", icon: <Eye size={18} /> },
    { key: "rotate", label: "Rotate", icon: <RotateCw size={18} /> },
    { key: "delete", label: "Delete", icon: <Trash2 size={18} className="text-destructive" /> },
  ];

  return (
    /* Media Viewer Overlay */
    /* میڈیا ویور اوورلے */
    <div className="fixed inset-0 bg-foreground z-50 flex flex-col">
      {/* Media Viewer Top Bar */}
      {/* میڈیا ویور ٹاپ بار */}
      <div className="flex items-center justify-between px-2 py-2 relative z-10">
        {/* Close Button (X) */}
        {/* بند کرنے کا بٹن */}
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/20 transition-colors" aria-label="Close">
          <X size={24} className="text-primary-foreground" />
        </button>
        {/* (Close Button - ختم ہو گیا ہے) */}

        {/* Three Dot Menu */}
        {/* تین ڈاٹ مینو */}
        <button onClick={() => setShowMenu(!showMenu)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/20 transition-colors" aria-label="More options">
          <span className="text-primary-foreground">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
            </svg>
          </span>
        </button>
        {/* (Three Dot Menu - ختم ہو گیا ہے) */}

        {/* Dropdown Options Menu */}
        {/* ڈراپ ڈاؤن آپشنز مینو */}
        {showMenu && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
            <div className="absolute right-2 top-12 bg-card rounded-lg shadow-xl z-50 py-2 min-w-[180px] border border-border">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleMenuAction(item.key)}
                  className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-[15px] hover:bg-muted transition-colors text-foreground"
                >
                  {item.icon}
                  <span className={item.key === "delete" ? "text-destructive" : ""}>{item.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
        {/* (Dropdown Options Menu - ختم ہو گیا ہے) */}
      </div>
      {/* (Media Viewer Top Bar - ختم ہو گیا ہے) */}

      {/* Media Content Area */}
      {/* میڈیا مواد ایریا */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className={`w-full max-w-[90%] aspect-square rounded-lg ${viewerColors[colorIndex]} transition-transform duration-300`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
      {/* (Media Content Area - ختم ہو گیا ہے) */}

      {/* Media Viewer Bottom Bar */}
      {/* میڈیا ویور باٹم بار */}
      <div className="px-4 py-4 text-center">
        <p className="text-primary-foreground/60 text-xs">Sent · Mar 10, 2026</p>
      </div>
      {/* (Media Viewer Bottom Bar - ختم ہو گیا ہے) */}
    </div>
    /* (Media Viewer Overlay - ختم ہو گیا ہے) */
  );
};

export default MediaViewer;
/* (Media Viewer Component - ختم ہو گیا ہے) */
