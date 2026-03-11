/* ========================================
   Call Screen Component
   کال سکرین کمپوننٹ
   ======================================== */

import React, { useState, useEffect, useRef } from "react";
import { EndCallButton, MuteCallButton, SpeakerButton, VideoToggleButton } from "@/NZG73Button";

const avatarColors = [
  "bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500",
  "bg-pink-500", "bg-teal-500", "bg-red-500",
];

interface CallScreenProps {
  contactName: string;
  isVideo: boolean;
  onEndCall: () => void;
}

const CallScreen: React.FC<CallScreenProps> = ({ contactName, isVideo, onEndCall }) => {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(isVideo);
  const [callStatus, setCallStatus] = useState<"ringing" | "connected">("ringing");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const colorIndex = contactName.charCodeAt(0) % avatarColors.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCallStatus("connected");
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (callStatus === "connected") {
      intervalRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [callStatus]);

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    /* Call Screen Container */
    /* کال سکرین کنٹینر */
    <div className="flex flex-col h-full bg-gradient-to-b from-primary/90 to-primary/70 text-primary-foreground">
      {/* Call Header Info */}
      {/* کال ہیڈر انفو */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className={`w-28 h-28 rounded-full flex items-center justify-center text-primary-foreground font-bold text-5xl ${avatarColors[colorIndex]} shadow-xl`}>
          {contactName.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold">{contactName}</h2>
        <p className="text-sm opacity-80">
          {callStatus === "ringing"
            ? (isVideo ? "Video calling..." : "Calling...")
            : formatDuration(callDuration)
          }
        </p>
      </div>
      {/* (Call Header Info - ختم ہو گیا ہے) */}

      {/* Call Action Buttons */}
      {/* کال ایکشن بٹنز */}
      <div className="pb-16 px-8">
        <div className="flex items-center justify-around mb-10">
          <MuteCallButton muted={isMuted} onClick={() => setIsMuted(!isMuted)} />
          {isVideo && (
            <VideoToggleButton active={isVideoOn} onClick={() => setIsVideoOn(!isVideoOn)} />
          )}
          <SpeakerButton active={isSpeaker} onClick={() => setIsSpeaker(!isSpeaker)} />
        </div>
        <div className="flex justify-center">
          <EndCallButton onClick={onEndCall} />
        </div>
      </div>
      {/* (Call Action Buttons - ختم ہو گیا ہے) */}
    </div>
    /* (Call Screen Container - ختم ہو گیا ہے) */
  );
};

export default CallScreen;
/* (Call Screen Component - ختم ہو گیا ہے) */
