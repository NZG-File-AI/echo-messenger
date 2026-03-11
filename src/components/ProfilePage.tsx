/* ========================================
   Profile Page Component
   پروفائل پیج کمپوننٹ
   ======================================== */

import React, { useState } from "react";
import {
  BackButton,
  PersonIcon,
  InfoIcon,
  PhoneIcon,
  LinkIcon,
  EditIcon,
  CloseIcon,
  GalleryIcon,
  DeleteIcon,
  ShareIcon,
} from "@/NZG73Button";
import { Camera } from "lucide-react";

interface ProfilePageProps {
  onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  const [showPicOptions, setShowPicOptions] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Profile Header */}
      {/* پروفائل ہیڈر */}
      <div className="flex items-center gap-2 px-1 py-2 bg-wa-header">
        <BackButton onClick={onBack} />
        <h1 className="text-lg font-medium text-wa-header-foreground">Profile</h1>
      </div>
      {/* (Profile Header - ختم ہو گیا ہے) */}

      <div className="flex-1 overflow-y-auto wa-scrollbar">
        {/* Profile Picture Section */}
        {/* پروفائل تصویر سیکشن */}
        <div className="flex flex-col items-center py-8">
          <button
            onClick={() => setShowPicOptions(true)}
            className="w-40 h-40 rounded-full bg-emerald-500 flex items-center justify-center text-primary-foreground text-6xl font-bold shadow-lg"
          >
            M
          </button>
          <button onClick={() => setShowPicOptions(true)} className="mt-3 text-primary text-sm font-medium">
            Edit
          </button>
        </div>
        {/* (Profile Picture Section - ختم ہو گیا ہے) */}

        <div className="border-t border-wa-divider" />

        {/* Name Field */}
        {/* نام فیلڈ */}
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="w-10 flex items-center justify-center"><PersonIcon /></div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-[15px] font-medium">Muhammad Noman</p>
          </div>
          <EditIcon />
        </div>
        {/* (Name Field - ختم ہو گیا ہے) */}

        <div className="border-t border-wa-divider ml-16" />

        {/* About Field */}
        {/* اباؤٹ فیلڈ */}
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="w-10 flex items-center justify-center"><InfoIcon /></div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">About</p>
            <p className="text-[15px] text-primary">Set About</p>
          </div>
          <EditIcon />
        </div>
        {/* (About Field - ختم ہو گیا ہے) */}

        <div className="border-t border-wa-divider ml-16" />

        {/* Phone Field */}
        {/* فون فیلڈ */}
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="w-10 flex items-center justify-center"><PhoneIcon /></div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="text-[15px]">+92 347 7319793</p>
          </div>
        </div>
        {/* (Phone Field - ختم ہو گیا ہے) */}

        <div className="border-t border-wa-divider ml-16" />

        {/* Links Field */}
        {/* لنکس فیلڈ */}
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="w-10 flex items-center justify-center"><LinkIcon /></div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Links</p>
            <p className="text-[15px] text-primary">Add links</p>
          </div>
        </div>
        {/* (Links Field - ختم ہو گیا ہے) */}
      </div>

      {/* Profile Picture Options Bottom Sheet */}
      {/* پروفائل تصویر آپشنز باٹم شیٹ */}
      {showPicOptions && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-end" onClick={() => setShowPicOptions(false)}>
          <div className="w-full bg-card rounded-t-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-4" />
            <div className="flex items-center justify-between mb-4">
              <CloseIcon onClick={() => setShowPicOptions(false)} />
              <h3 className="text-lg font-medium">Profile picture</h3>
              <button className="w-10 h-10 flex items-center justify-center"><DeleteIcon /></button>
            </div>
            <button className="flex items-center gap-4 w-full py-3 hover:bg-muted rounded-lg px-2">
              <Camera size={22} className="text-muted-foreground" />
              <span className="text-[15px]">Camera</span>
            </button>
            <button className="flex items-center gap-4 w-full py-3 hover:bg-muted rounded-lg px-2">
              <GalleryIcon />
              <span className="text-[15px]">Gallery</span>
            </button>
          </div>
        </div>
      )}
      {/* (Profile Picture Options Bottom Sheet - ختم ہو گیا ہے) */}
    </div>
  );
};

export default ProfilePage;
/* (Profile Page Component - ختم ہو گیا ہے) */
