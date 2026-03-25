/* ========================================
   Chat View Component (Individual Chat)
   چیٹ ویو کمپوننٹ (انفرادی چیٹ)
   ======================================== */

import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  BackButton,
  VideoCallButton,
  VoiceCallButton,
  EmojiButton,
  AttachButton,
  CameraInputButton,
  MicButton,
  SendButton,
  DoubleCheckIcon,
  SingleCheckIcon,
  ChatThemeMenuIcon,
  ExportChatMenuIcon,
  ClearChatMenuIcon,
  DeleteChatMenuIcon,
  BlockMenuIcon,
} from "@/NZG73Button";
import { MoreVertical } from "lucide-react";
import type { ChatItem } from "./ChatList";
import ChatAttachmentTray from "./ChatAttachmentTray";

interface Message {
  id: string;
  text: string;
  time: string;
  sent: boolean;
  read?: boolean;
}

const demoMessages: Message[] = [
  { id: "1", text: "Hey, how are you?", time: "10:30 AM", sent: false },
  { id: "2", text: "I'm good, thanks! How about you?", time: "10:31 AM", sent: true, read: true },
  { id: "3", text: "Doing great! Just working on the new project.", time: "10:32 AM", sent: false },
  { id: "4", text: "That sounds awesome! Need any help?", time: "10:33 AM", sent: true, read: true },
  { id: "5", text: "Actually yes, can you review the code?", time: "10:35 AM", sent: false },
  { id: "6", text: "Sure, send it over!", time: "10:36 AM", sent: true, read: false },
];

const avatarColors = [
  "bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-orange-500",
  "bg-pink-500", "bg-teal-500", "bg-red-500",
];

const formatDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

interface ChatViewProps {
  chat: ChatItem;
  onBack: () => void;
  onHeaderClick: () => void;
  onAudioCall: () => void;
  onVideoCall: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({ chat, onBack, onHeaderClick, onAudioCall, onVideoCall }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const [showMenu, setShowMenu] = useState(false);
  const [showAttachmentTray, setShowAttachmentTray] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [composerHint, setComposerHint] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const attachmentContainerRef = useRef<HTMLDivElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);
  const filePickerLockRef = useRef(false);

  const colorIndex = chat.name.charCodeAt(0) % avatarColors.length;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isRecording) return;
    const timerId = window.setInterval(() => {
      setRecordingSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [isRecording]);

  useEffect(() => {
    if (!showAttachmentTray) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        attachmentContainerRef.current &&
        !attachmentContainerRef.current.contains(event.target as Node)
      ) {
        setShowAttachmentTray(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showAttachmentTray]);

  const appendOutgoingMessage = useCallback((text: string) => {
    const newMsg: Message = {
      id: Date.now().toString(),
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sent: true,
      read: false,
    };
    setMessages((prev) => [...prev, newMsg]);
  }, []);

  const handleSend = useCallback(() => {
    if (!message.trim()) return;
    appendOutgoingMessage(message.trim());
    setMessage("");
    setComposerHint("");
    setShowAttachmentTray(false);
  }, [appendOutgoingMessage, message]);

  const openFilePicker = useCallback((type: "gallery" | "camera" | "document" | "audio") => {
    if (filePickerLockRef.current) return;

    const inputMap = {
      gallery: galleryInputRef.current,
      camera: cameraInputRef.current,
      document: documentInputRef.current,
      audio: audioInputRef.current,
    };

    const selectedInput = inputMap[type];
    if (!selectedInput) return;

    filePickerLockRef.current = true;
    setShowAttachmentTray(false);
    setComposerHint(`${type.charAt(0).toUpperCase()}${type.slice(1)} picker opened`);
    selectedInput.click();

    window.setTimeout(() => {
      filePickerLockRef.current = false;
    }, 250);
  }, []);

  const handleFileSelected = useCallback((label: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const pickedFile = event.target.files?.[0];
    if (!pickedFile) {
      event.target.value = "";
      return;
    }

    appendOutgoingMessage(`${label}: ${pickedFile.name}`);
    setComposerHint(`${label} attached`);
    event.target.value = "";
  }, [appendOutgoingMessage]);

  const handleMicButton = useCallback(() => {
    if (isRecording) {
      appendOutgoingMessage(`Voice note (${formatDuration(recordingSeconds)})`);
      setIsRecording(false);
      setRecordingSeconds(0);
      setComposerHint("Voice note sent");
      return;
    }

    setIsRecording(true);
    setShowAttachmentTray(false);
    setComposerHint("Recording... tap mic again to send");
  }, [appendOutgoingMessage, isRecording, recordingSeconds]);

  const handleClearChat = useCallback(() => {
    setMessages([]);
    setShowMenu(false);
    setShowAttachmentTray(false);
    setIsRecording(false);
    setRecordingSeconds(0);
    setComposerHint("");
  }, []);

  const handleDeleteChat = useCallback(() => {
    setMessages([]);
    setShowMenu(false);
    setShowAttachmentTray(false);
    setIsRecording(false);
    setRecordingSeconds(0);
    setComposerHint("");
    onBack();
  }, [onBack]);

  /* Chat Menu Items Definition */
  /* چیٹ مینو آئٹمز تعریف */
  const menuItems = [
    { key: "theme", label: "Chat theme", icon: <ChatThemeMenuIcon />, action: () => setShowMenu(false) },
    { key: "export", label: "Export chat", icon: <ExportChatMenuIcon />, action: () => {
      const text = messages.map((m) => `[${m.time}] ${m.sent ? "You" : chat.name}: ${m.text}`).join("\n");
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chat_${chat.name.replace(/\s+/g, "_")}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      setShowMenu(false);
    }},
    { key: "clear", label: "Clear chat", icon: <ClearChatMenuIcon />, action: handleClearChat },
    { key: "delete", label: "Permanent delete", icon: <DeleteChatMenuIcon />, action: handleDeleteChat, danger: true },
    { key: "block", label: "Block", icon: <BlockMenuIcon />, action: () => setShowMenu(false), danger: true },
  ];
  /* (Chat Menu Items Definition - ختم ہو گیا ہے) */

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      {/* چیٹ ہیڈر */}
      <div className="flex items-center gap-2 px-1 py-2 bg-wa-header relative">
        <BackButton onClick={onBack} />
        {/* Clickable Header Area - Opens About Page */}
        {/* کلک ایبل ہیڈر ایریا - اباؤٹ پیج کھولتا ہے */}
        <button onClick={onHeaderClick} className="flex items-center gap-2 flex-1 min-w-0">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-semibold shrink-0 ${avatarColors[colorIndex]}`}>
            {chat.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 text-left">
            <p className="font-medium text-[16px] text-wa-header-foreground truncate">{chat.name}</p>
            <p className="text-xs text-wa-tab-inactive">online</p>
          </div>
        </button>
        {/* (Clickable Header Area - ختم ہو گیا ہے) */}
        <VideoCallButton onClick={onVideoCall} />
        <VoiceCallButton onClick={onAudioCall} />

        {/* Three Dot Menu Button */}
        {/* تھری ڈاٹ مینو بٹن */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          aria-label="More options"
        >
          <MoreVertical size={22} />
        </button>
        {/* (Three Dot Menu Button - ختم ہو گیا ہے) */}

        {/* Chat Dropdown Menu */}
        {/* چیٹ ڈراپ ڈاؤن مینو */}
        {showMenu && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
            <div className="absolute right-2 top-14 bg-card rounded-lg shadow-xl z-50 py-2 min-w-[200px] border border-border">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={item.action}
                  className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-[15px] hover:bg-muted transition-colors"
                >
                  {item.icon}
                  <span className={item.danger ? "text-destructive" : ""}>{item.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
        {/* (Chat Dropdown Menu - ختم ہو گیا ہے) */}
      </div>
      {/* (Chat Header - ختم ہو گیا ہے) */}

      {/* Messages Area */}
      {/* میسجز ایریا */}
      <div className="flex-1 overflow-y-auto wa-chat-pattern wa-scrollbar px-3 py-2">
        {/* Date Badge */}
        {/* تاریخ بیج */}
        <div className="flex justify-center my-3">
          <span className="bg-card text-muted-foreground text-xs px-3 py-1 rounded-lg shadow-sm">
            Today
          </span>
        </div>
        {/* (Date Badge - ختم ہو گیا ہے) */}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-1 ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-3 py-1.5 rounded-lg shadow-sm ${
                msg.sent
                  ? "bg-wa-bubble-sent rounded-tr-none"
                  : "bg-wa-bubble-received rounded-tl-none"
              }`}
            >
              <p className="text-sm text-foreground">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[11px] text-wa-timestamp">{msg.time}</span>
                {msg.sent && (msg.read ? <DoubleCheckIcon read /> : <SingleCheckIcon />)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* (Messages Area - ختم ہو گیا ہے) */}

      {/* Chat Input Bar */}
      {/* چیٹ ان پٹ بار */}
      <div ref={attachmentContainerRef} className="relative bg-background px-2 py-2">
        {showAttachmentTray && (
          <ChatAttachmentTray
            onGallery={() => openFilePicker("gallery")}
            onCamera={() => openFilePicker("camera")}
            onDocument={() => openFilePicker("document")}
            onAudio={() => openFilePicker("audio")}
          />
        )}

        <div className="flex items-center gap-1">
          <div className="flex-1 flex items-center bg-wa-search-bg rounded-full px-1">
            <EmojiButton onClick={() => setComposerHint("Emoji panel will be added next")} />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setShowAttachmentTray(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Message"
              className="flex-1 bg-transparent text-sm py-2.5 px-2 outline-none text-foreground placeholder:text-muted-foreground"
            />
            <AttachButton onClick={() => setShowAttachmentTray((prev) => !prev)} />
            <CameraInputButton onClick={() => openFilePicker("camera")} />
          </div>
          {message.trim() ? <SendButton onClick={handleSend} /> : <MicButton onClick={handleMicButton} />}
        </div>

        <div className="h-4 px-2 pt-1">
          {isRecording ? (
            <p className="text-[11px] text-muted-foreground">Recording {formatDuration(recordingSeconds)}</p>
          ) : composerHint ? (
            <p className="text-[11px] text-muted-foreground truncate">{composerHint}</p>
          ) : null}
        </div>

        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => handleFileSelected("Gallery", event)}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(event) => handleFileSelected("Camera", event)}
        />
        <input
          ref={documentInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
          className="hidden"
          onChange={(event) => handleFileSelected("Document", event)}
        />
        <input
          ref={audioInputRef}
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={(event) => handleFileSelected("Audio", event)}
        />
      </div>
      {/* (Chat Input Bar - ختم ہو گیا ہے) */}
    </div>
  );
};

export default ChatView;
/* (Chat View Component - ختم ہو گیا ہے) */
