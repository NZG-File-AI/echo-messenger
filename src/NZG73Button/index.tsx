/* ========================================
   NZG73 Button - All WhatsApp Clone Icon Buttons
   این زیڈ جی 73 بٹن - واٹس ایپ کلون کے تمام آئیکن بٹنز
   ======================================== */

import {
  MessageCircle,
  Phone,
  Video,
  Search,
  MoreVertical,
  ArrowLeft,
  Camera,
  Image,
  Mic,
  Send,
  Smile,
  Paperclip,
  Check,
  CheckCheck,
  Lock,
  Bell,
  BellOff,
  Globe,
  HelpCircle,
  Users,
  Star,
  Archive,
  Plus,
  Settings,
  User,
  Info,
  Link2,
  Edit2,
  Share2,
  Trash2,
  X,
  ChevronRight,
  Moon,
  Sun,
  MessageSquare,
  CircleDot,
  Shield,
  ListChecks,
  Palette,
  Database,
  Accessibility,
  QrCode,
  KeyRound,
  PhoneCall,
  PhoneOff,
  MicOff,
  Volume2,
  VolumeX,
  RotateCw,
  Download,
  Eye,
  FileText,
  ExternalLink,
  AlertTriangle,
  Ban,
  Flag,
  Timer,
  ImageIcon,
} from "lucide-react";
import React from "react";

/* ----------------------------------------
   Icon Button Wrapper Component
   آئیکن بٹن ریپر کمپوننٹ
   ---------------------------------------- */
interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className = "",
  label,
  size = "md",
  disabled = false,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-full hover:bg-muted transition-colors ${sizeClasses[size]} ${className}`}
      aria-label={label}
    >
      {icon}
    </button>
  );
};
/* (Icon Button Wrapper Component - ختم ہو گیا ہے) */

/* ----------------------------------------
   Header Action Buttons
   ہیڈر ایکشن بٹنز
   ---------------------------------------- */
export const CameraButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Camera size={22} />} onClick={onClick} label="Camera" />
);

export const SearchButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Search size={22} />} onClick={onClick} label="Search" />
);

export const MoreOptionsButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<MoreVertical size={22} />} onClick={onClick} label="More options" />
);

export const BackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<ArrowLeft size={24} />} onClick={onClick} label="Back" />
);

export const VideoCallButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Video size={22} />} onClick={onClick} label="Video call" />
);

export const VoiceCallButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Phone size={22} />} onClick={onClick} label="Voice call" />
);
/* (Header Action Buttons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Chat Input Buttons
   چیٹ ان پٹ بٹنز
   ---------------------------------------- */
export const EmojiButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Smile size={24} className="text-muted-foreground" />} onClick={onClick} label="Emoji" />
);

export const AttachButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Paperclip size={24} className="text-muted-foreground" />} onClick={onClick} label="Attach" />
);

export const CameraInputButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Camera size={22} className="text-muted-foreground" />} onClick={onClick} label="Camera" />
);

export const MicButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Mic size={24} />} onClick={onClick} label="Voice message" className="bg-wa-fab text-primary-foreground hover:bg-primary" />
);

export const SendButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Send size={20} />} onClick={onClick} label="Send" className="bg-wa-fab text-primary-foreground hover:bg-primary" />
);
/* (Chat Input Buttons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Bottom Navigation Tab Icons
   نیچے نیویگیشن ٹیب آئیکنز
   ---------------------------------------- */
export const ChatsTabIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <MessageCircle size={24} className={active ? "text-wa-tab-active" : "text-wa-tab-inactive"} fill={active ? "currentColor" : "none"} />
);

export const UpdatesTabIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <CircleDot size={24} className={active ? "text-wa-tab-active" : "text-wa-tab-inactive"} />
);

export const CommunitiesTabIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <Users size={24} className={active ? "text-wa-tab-active" : "text-wa-tab-inactive"} />
);

export const CallsTabIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <Phone size={24} className={active ? "text-wa-tab-active" : "text-wa-tab-inactive"} />
);
/* (Bottom Navigation Tab Icons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Message Status Icons
   میسج اسٹیٹس آئیکنز
   ---------------------------------------- */
export const SingleCheckIcon: React.FC = () => (
  <Check size={16} className="text-muted-foreground" />
);

export const DoubleCheckIcon: React.FC<{ read?: boolean }> = ({ read }) => (
  <CheckCheck size={16} className={read ? "text-wa-link" : "text-muted-foreground"} />
);
/* (Message Status Icons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Settings Page Icons
   سیٹنگز پیج آئیکنز
   ---------------------------------------- */
export const AccountIcon = () => <KeyRound size={22} className="text-muted-foreground" />;
export const PrivacyIcon = () => <Lock size={22} className="text-muted-foreground" />;
export const ListsIcon = () => <ListChecks size={22} className="text-muted-foreground" />;
export const ChatsSettingsIcon = () => <MessageSquare size={22} className="text-muted-foreground" />;
export const NotificationsIcon = () => <Bell size={22} className="text-muted-foreground" />;
export const StorageIcon = () => <Database size={22} className="text-muted-foreground" />;
export const AccessibilityIcon = () => <Accessibility size={22} className="text-muted-foreground" />;
export const LanguageIcon = () => <Globe size={22} className="text-muted-foreground" />;
export const HelpIcon = () => <HelpCircle size={22} className="text-muted-foreground" />;
export const QrCodeIcon = () => <QrCode size={22} className="text-muted-foreground" />;
export const ThemeIcon = () => <Palette size={22} className="text-muted-foreground" />;
/* (Settings Page Icons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Profile Page Icons
   پروفائل پیج آئیکنز
   ---------------------------------------- */
export const PersonIcon = () => <User size={22} className="text-muted-foreground" />;
export const InfoIcon = () => <Info size={22} className="text-muted-foreground" />;
export const PhoneIcon = () => <Phone size={22} className="text-muted-foreground" />;
export const LinkIcon = () => <Link2 size={22} className="text-muted-foreground" />;
export const EditIcon = () => <Edit2 size={18} />;
export const ShareIcon = () => <Share2 size={22} />;
export const DeleteIcon = () => <Trash2 size={22} />;
export const CloseIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<X size={24} />} onClick={onClick} label="Close" />
);
export const ChevronRightIcon = () => <ChevronRight size={20} className="text-muted-foreground" />;
/* (Profile Page Icons - ختم ہو گیا ہے) */

/* ----------------------------------------
   FAB (Floating Action Button)
   فلوٹنگ ایکشن بٹن
   ---------------------------------------- */
export const NewChatFAB: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-14 h-14 rounded-2xl bg-wa-fab text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    aria-label="New chat"
  >
    <Plus size={24} />
  </button>
);
/* (FAB - فلوٹنگ ایکشن بٹن ختم ہو گیا ہے) */

/* ----------------------------------------
   Dark/Light Mode Toggle Button
   ڈارک/لائٹ موڈ ٹوگل بٹن
   ---------------------------------------- */
export const DarkModeToggle: React.FC<{ isDark: boolean; onToggle: () => void }> = ({ isDark, onToggle }) => (
  <IconButton
    icon={isDark ? <Sun size={22} /> : <Moon size={22} />}
    onClick={onToggle}
    label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  />
);
/* (Dark/Light Mode Toggle Button - ختم ہو گیا ہے) */

/* ----------------------------------------
   Star/Favorite Icon
   سٹار/فیورٹ آئیکن
   ---------------------------------------- */
export const StarIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <Star size={18} className={filled ? "text-yellow-500" : "text-muted-foreground"} fill={filled ? "currentColor" : "none"} />
);
/* (Star Icon - ختم ہو گیا ہے) */

/* ----------------------------------------
   Archive Icon
   آرکائیو آئیکن
   ---------------------------------------- */
export const ArchiveIcon = () => <Archive size={20} className="text-primary" />;
/* (Archive Icon - ختم ہو گیا ہے) */

/* ----------------------------------------
   Image/Gallery Icon
   تصویر/گیلری آئیکن
   ---------------------------------------- */
export const GalleryIcon = () => <Image size={22} className="text-muted-foreground" />;
/* (Gallery Icon - ختم ہو گیا ہے) */

/* ----------------------------------------
   Shield/Security Icon
   شیلڈ/سیکیورٹی آئیکن
   ---------------------------------------- */
export const SecurityIcon = () => <Shield size={22} className="text-muted-foreground" />;
/* (Security Icon - ختم ہو گیا ہے) */

export const PlusIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton icon={<Plus size={22} />} onClick={onClick} label="Add" />
);

/* ----------------------------------------
   Profile Popup Action Buttons
   پروفائل پاپ اپ ایکشن بٹنز
   ---------------------------------------- */
export const PopupMessageIcon = () => <MessageCircle size={22} className="text-primary" />;
export const PopupAudioCallIcon = () => <Phone size={22} className="text-primary" />;
export const PopupVideoCallIcon = () => <Video size={22} className="text-primary" />;
export const PopupInfoIcon = () => <Info size={22} className="text-primary" />;
/* (Profile Popup Action Buttons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Call Screen Buttons
   کال سکرین بٹنز
   ---------------------------------------- */
export const EndCallButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground shadow-lg"
    aria-label="End call"
  >
    <PhoneOff size={28} />
  </button>
);

export const MuteCallButton: React.FC<{ muted: boolean; onClick?: () => void }> = ({ muted, onClick }) => (
  <button
    onClick={onClick}
    className={`w-14 h-14 rounded-full flex items-center justify-center ${muted ? "bg-muted" : "bg-card"} shadow-md`}
    aria-label={muted ? "Unmute" : "Mute"}
  >
    {muted ? <MicOff size={24} className="text-foreground" /> : <Mic size={24} className="text-foreground" />}
  </button>
);

export const SpeakerButton: React.FC<{ active: boolean; onClick?: () => void }> = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-14 h-14 rounded-full flex items-center justify-center ${active ? "bg-muted" : "bg-card"} shadow-md`}
    aria-label={active ? "Speaker off" : "Speaker on"}
  >
    {active ? <Volume2 size={24} className="text-foreground" /> : <VolumeX size={24} className="text-foreground" />}
  </button>
);

export const VideoToggleButton: React.FC<{ active: boolean; onClick?: () => void }> = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-14 h-14 rounded-full flex items-center justify-center ${active ? "bg-card" : "bg-muted"} shadow-md`}
    aria-label={active ? "Video off" : "Video on"}
  >
    <Video size={24} className="text-foreground" />
  </button>
);
/* (Call Screen Buttons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Media Viewer Action Icons
   میڈیا ویور ایکشن آئیکنز
   ---------------------------------------- */
export const RotateIcon = () => <RotateCw size={20} />;
export const SaveIcon = () => <Download size={20} />;
export const ViewInGalleryIcon = () => <Eye size={20} />;
export const FileDocIcon = () => <FileText size={20} className="text-muted-foreground" />;
export const ExternalLinkIcon = () => <ExternalLink size={16} className="text-wa-link" />;
/* (Media Viewer Action Icons - ختم ہو گیا ہے) */

/* ----------------------------------------
   About Page Action Icons
   اباؤٹ پیج ایکشن آئیکنز
   ---------------------------------------- */
export const MuteIcon: React.FC<{ muted: boolean }> = ({ muted }) => (
  muted ? <BellOff size={22} className="text-muted-foreground" /> : <Bell size={22} className="text-muted-foreground" />
);
export const LockChatIcon = () => <Lock size={22} className="text-muted-foreground" />;
export const DisappearingIcon = () => <Timer size={22} className="text-muted-foreground" />;
export const BlockIcon = () => <Ban size={22} className="text-destructive" />;
export const ReportIcon = () => <Flag size={22} className="text-destructive" />;
export const ClearChatIcon = () => <Trash2 size={22} className="text-destructive" />;
export const MediaIcon = () => <ImageIcon size={22} className="text-muted-foreground" />;
/* (About Page Action Icons - ختم ہو گیا ہے) */

/* ----------------------------------------
   Chat Menu Icons
   چیٹ مینو آئیکنز
   ---------------------------------------- */
export const ChatThemeMenuIcon = () => <Palette size={18} className="text-muted-foreground" />;
export const ExportChatMenuIcon = () => <Share2 size={18} className="text-muted-foreground" />;
export const ClearChatMenuIcon = () => <Trash2 size={18} className="text-muted-foreground" />;
export const DeleteChatMenuIcon = () => <Trash2 size={18} className="text-destructive" />;
export const BlockMenuIcon = () => <Ban size={18} className="text-destructive" />;
/* (Chat Menu Icons - ختم ہو گیا ہے) */
