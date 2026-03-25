/* ========================================
   Chat Attachment Tray Component
   چیٹ اٹیچمنٹ ٹرے کمپوننٹ
   ======================================== */

import React from "react";
import {
  AttachmentGalleryIcon,
  AttachmentCameraIcon,
  AttachmentDocumentIcon,
  AttachmentAudioIcon,
} from "@/NZG73Button";

interface ChatAttachmentTrayProps {
  onGallery: () => void;
  onCamera: () => void;
  onDocument: () => void;
  onAudio: () => void;
}

const ChatAttachmentTray: React.FC<ChatAttachmentTrayProps> = ({
  onGallery,
  onCamera,
  onDocument,
  onAudio,
}) => {
  const actions = [
    { key: "gallery", label: "Gallery", icon: <AttachmentGalleryIcon />, onClick: onGallery },
    { key: "camera", label: "Camera", icon: <AttachmentCameraIcon />, onClick: onCamera },
    { key: "document", label: "Document", icon: <AttachmentDocumentIcon />, onClick: onDocument },
    { key: "audio", label: "Audio", icon: <AttachmentAudioIcon />, onClick: onAudio },
  ];

  return (
    <div className="absolute bottom-[72px] left-2 right-2 z-30 rounded-2xl border border-border bg-card/95 shadow-xl backdrop-blur-sm overflow-x-auto">
      <div className="flex min-w-max items-center gap-3 px-3 py-3">
        {actions.map((action) => (
          <button
            key={action.key}
            onClick={action.onClick}
            className="flex min-w-[78px] flex-col items-center gap-2 rounded-xl p-2 transition-colors hover:bg-muted"
            aria-label={action.label}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
              {action.icon}
            </span>
            <span className="text-xs text-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatAttachmentTray;
/* (Chat Attachment Tray Component - ختم ہو گیا ہے) */
