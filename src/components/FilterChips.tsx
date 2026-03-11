/* ========================================
   Filter Chips Component
   فلٹر چپس کمپوننٹ
   ======================================== */

import React, { useState } from "react";

const filters = ["All", "Unread", "Favorites", "Groups"];

const FilterChips: React.FC = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex items-center gap-2 px-4 py-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === f
              ? "bg-primary text-primary-foreground"
              : "bg-wa-search-bg text-foreground hover:bg-muted"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
/* (Filter Chips Component - ختم ہو گیا ہے) */
