/* ========================================
   Media Dashboard Component (Media, Docs, Links Tabs)
   میڈیا ڈیش بورڈ کمپوننٹ (میڈیا، ڈاکس، لنکس ٹیبز)
   ======================================== */

import React, { useState } from "react";
import { BackButton, SearchButton, FileDocIcon, ExternalLinkIcon } from "@/NZG73Button";
import { Search } from "lucide-react";

type MediaTab = "media" | "docs" | "links";

/* ----------------------------------------
   Demo Media Data
   ڈیمو میڈیا ڈیٹا
   ---------------------------------------- */
const demoMediaItems = {
  recent: Array.from({ length: 6 }, (_, i) => ({
    id: `r${i}`,
    type: i % 3 === 0 ? "video" as const : "image" as const,
    color: ["bg-blue-400", "bg-pink-400", "bg-purple-400", "bg-teal-400", "bg-orange-400", "bg-amber-400"][i],
  })),
  lastWeek: Array.from({ length: 8 }, (_, i) => ({
    id: `w${i}`,
    type: i % 4 === 0 ? "video" as const : "image" as const,
    color: ["bg-emerald-400", "bg-red-400", "bg-indigo-400", "bg-cyan-400", "bg-yellow-400", "bg-rose-400", "bg-violet-400", "bg-lime-400"][i],
  })),
  lastMonth: Array.from({ length: 12 }, (_, i) => ({
    id: `m${i}`,
    type: i % 5 === 0 ? "video" as const : "image" as const,
    color: ["bg-sky-400", "bg-fuchsia-400", "bg-emerald-400", "bg-red-400", "bg-blue-400", "bg-orange-400", "bg-teal-400", "bg-pink-400", "bg-purple-400", "bg-amber-400", "bg-indigo-400", "bg-cyan-400"][i],
  })),
};

const demoDocs = [
  { id: "d1", name: "Project_Report.pdf", size: "2.4 MB", date: "Mar 8, 2026" },
  { id: "d2", name: "Meeting_Notes.docx", size: "156 KB", date: "Mar 5, 2026" },
  { id: "d3", name: "Budget_2026.xlsx", size: "890 KB", date: "Feb 28, 2026" },
  { id: "d4", name: "Proposal_Draft.pdf", size: "1.2 MB", date: "Feb 20, 2026" },
];

const demoLinks = [
  { id: "l1", url: "https://github.com/project/repo", title: "GitHub Repository", date: "Mar 9, 2026" },
  { id: "l2", url: "https://docs.google.com/document/d/abc", title: "Google Docs - Shared Document", date: "Mar 7, 2026" },
  { id: "l3", url: "https://stackoverflow.com/questions/12345", title: "Stack Overflow - React Help", date: "Mar 3, 2026" },
  { id: "l4", url: "https://youtube.com/watch?v=xyz", title: "YouTube - Tutorial Video", date: "Feb 25, 2026" },
];
/* (Demo Media Data - ختم ہو گیا ہے) */

interface MediaDashboardProps {
  contactName: string;
  onBack: () => void;
  onImageClick: (imageId: string) => void;
}

const MediaDashboard: React.FC<MediaDashboardProps> = ({ contactName, onBack, onImageClick }) => {
  const [activeTab, setActiveTab] = useState<MediaTab>("media");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const tabs: { key: MediaTab; label: string }[] = [
    { key: "media", label: "Media" },
    { key: "docs", label: "Docs" },
    { key: "links", label: "Links" },
  ];

  return (
    /* Media Dashboard Container */
    /* میڈیا ڈیش بورڈ کنٹینر */
    <div className="flex flex-col h-full bg-background">
      {/* Media Dashboard Header */}
      {/* میڈیا ڈیش بورڈ ہیڈر */}
      <div className="bg-wa-header">
        <div className="flex items-center gap-2 px-1 py-2">
          <BackButton onClick={onBack} />
          <h1 className="text-lg font-medium text-wa-header-foreground flex-1 truncate">{contactName}</h1>
          <SearchButton onClick={() => setShowSearch(!showSearch)} />
        </div>
        {showSearch && (
          <div className="px-4 pb-2">
            <div className="flex items-center gap-2 bg-wa-search-bg rounded-full px-3 py-2">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
                autoFocus
              />
            </div>
          </div>
        )}
        {/* Tab Bar */}
        {/* ٹیب بار */}
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 text-sm font-medium text-center border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-wa-tab-active text-wa-header-foreground"
                  : "border-transparent text-wa-tab-inactive"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* (Tab Bar - ختم ہو گیا ہے) */}
      </div>
      {/* (Media Dashboard Header - ختم ہو گیا ہے) */}

      {/* Tab Content Area */}
      {/* ٹیب مواد ایریا */}
      <div className="flex-1 overflow-y-auto wa-scrollbar">
        {activeTab === "media" && (
          /* Media Grid Tab */
          /* میڈیا گرڈ ٹیب */
          <div className="pb-4">
            {Object.entries(demoMediaItems).map(([period, items]) => (
              <div key={period}>
                {/* Timeline Header */}
                {/* ٹائم لائن ہیڈر */}
                <p className="text-xs text-muted-foreground font-semibold uppercase px-4 py-2 bg-muted/50">
                  {period === "recent" ? "Recent" : period === "lastWeek" ? "Last Week" : "Last Month"}
                </p>
                {/* (Timeline Header - ختم ہو گیا ہے) */}
                <div className="grid grid-cols-3 gap-0.5 px-0.5">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onImageClick(item.id)}
                      className={`aspect-square ${item.color} relative hover:opacity-90 transition-opacity`}
                    >
                      {item.type === "video" && (
                        <div className="absolute bottom-1 left-1 bg-foreground/60 text-primary-foreground text-[10px] px-1 rounded">
                          0:30
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          /* (Media Grid Tab - ختم ہو گیا ہے) */
        )}

        {activeTab === "docs" && (
          /* Docs List Tab */
          /* ڈاکس لسٹ ٹیب */
          <div className="py-2">
            {demoDocs.map((doc) => (
              <button key={doc.id} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-muted transition-colors">
                <div className="w-10 h-10 rounded-lg bg-wa-search-bg flex items-center justify-center">
                  <FileDocIcon />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-medium truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.size} · {doc.date}</p>
                </div>
              </button>
            ))}
          </div>
          /* (Docs List Tab - ختم ہو گیا ہے) */
        )}

        {activeTab === "links" && (
          /* Links List Tab */
          /* لنکس لسٹ ٹیب */
          <div className="py-2">
            {demoLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 w-full px-4 py-3 hover:bg-muted transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-wa-search-bg flex items-center justify-center shrink-0">
                  <ExternalLinkIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-wa-link truncate">{link.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{link.url}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{link.date}</p>
                </div>
              </a>
            ))}
          </div>
          /* (Links List Tab - ختم ہو گیا ہے) */
        )}
      </div>
      {/* (Tab Content Area - ختم ہو گیا ہے) */}
    </div>
    /* (Media Dashboard Container - ختم ہو گیا ہے) */
  );
};

export default MediaDashboard;
/* (Media Dashboard Component - ختم ہو گیا ہے) */
