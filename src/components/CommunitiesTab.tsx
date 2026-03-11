/* ========================================
   Communities Tab Component
   کمیونٹیز ٹیب کمپوننٹ
   ======================================== */

import React from "react";
import { Users, Plus } from "lucide-react";

const CommunitiesTab: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto wa-scrollbar flex flex-col items-center justify-center px-6 py-12">
      {/* Communities Placeholder */}
      {/* کمیونٹیز پلیس ہولڈر */}
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <Users size={48} className="text-muted-foreground" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center">Stay connected with a community</h2>
      <p className="text-muted-foreground text-center text-sm mb-6">
        Communities bring members together in topic-based groups. Any community you're added to will appear here.
      </p>
      <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2">
        <Plus size={18} />
        Start a community
      </button>
      {/* (Communities Placeholder - ختم ہو گیا ہے) */}
    </div>
  );
};

export default CommunitiesTab;
/* (Communities Tab Component - ختم ہو گیا ہے) */
