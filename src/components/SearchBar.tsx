/* ========================================
   Search Bar Component
   سرچ بار کمپوننٹ
   ======================================== */

import React from "react";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  return (
    <div className="px-3 py-2">
      <div className="flex items-center gap-3 bg-wa-search-bg rounded-full px-4 py-2.5">
        <Search size={18} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Ask Meta AI or Search"
          className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
};

export default SearchBar;
/* (Search Bar Component - ختم ہو گیا ہے) */
