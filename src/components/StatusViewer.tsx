/* ========================================
   Status Viewer Component
   سٹیٹس ویور کمپوننٹ
   ======================================== */

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BackButton, MoreOptionsButton } from "@/NZG73Button";
import type { StatusItem } from "./UpdatesTab";

const avatarColors = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-red-500",
];

interface StatusViewerProps {
  statuses: StatusItem[];
  initialIndex: number;
  onClose: () => void;
  onViewed: (statusId: string) => void;
}

const StatusViewer: React.FC<StatusViewerProps> = ({ statuses, initialIndex, onClose, onViewed }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentStatus = statuses[currentIndex];

  const avatarColorClass = useMemo(() => {
    if (!currentStatus) return avatarColors[0];
    return avatarColors[currentStatus.name.charCodeAt(0) % avatarColors.length];
  }, [currentStatus]);

  useEffect(() => {
    if (currentStatus) {
      onViewed(currentStatus.id);
    }
  }, [currentStatus, onViewed]);

  useEffect(() => {
    if (!currentStatus) return;

    const timerId = window.setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev >= statuses.length - 1) {
          onClose();
          return prev;
        }
        return prev + 1;
      });
    }, 5000);

    return () => window.clearTimeout(timerId);
  }, [currentStatus, onClose, statuses.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= statuses.length - 1) {
        onClose();
        return prev;
      }
      return prev + 1;
    });
  }, [onClose, statuses.length]);

  const goPrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  if (!currentStatus) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-background">
      <div className="mx-auto flex h-full max-w-md flex-col bg-background">
        <div className="flex items-center justify-between px-2 py-2 bg-wa-header">
          <div className="flex items-center gap-2">
            <BackButton onClick={onClose} />
            <div>
              <p className="text-sm font-medium text-wa-header-foreground">{currentStatus.name}</p>
              <p className="text-xs text-wa-tab-inactive">{currentStatus.time}</p>
            </div>
          </div>
          <MoreOptionsButton />
        </div>

        <div className="flex gap-1 px-3 pt-2">
          {statuses.map((status, index) => (
            <div key={status.id} className="h-1 flex-1 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: index <= currentIndex ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        <div className="flex-1 px-5 py-6">
          <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-6 text-center">
            <div className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold text-primary-foreground ${avatarColorClass}`}>
              {currentStatus.name.charAt(0).toUpperCase()}
            </div>
            <p className="text-xl font-semibold text-foreground">{currentStatus.story}</p>
            <p className="mt-3 text-sm text-muted-foreground">Views: {currentStatus.views}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 pb-4">
          <button
            onClick={goPrevious}
            className="h-11 flex-1 rounded-xl border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-muted"
            aria-label="Previous status"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            className="h-11 flex-1 rounded-xl bg-primary text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            aria-label="Next status"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusViewer;
/* (Status Viewer Component - ختم ہو گیا ہے) */
