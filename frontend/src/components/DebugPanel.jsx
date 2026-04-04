import React from 'react';
import { Trash2 } from 'lucide-react';

const DebugPanel = () => {
  const clearAllData = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-100 border border-red-300 rounded-lg p-3 shadow-lg z-50">
      <div className="text-xs text-red-700 mb-2">Debug Panel (Dev Only)</div>
      <button
        onClick={clearAllData}
        className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors"
      >
        <Trash2 className="h-3 w-3" />
        <span>Clear All Data</span>
      </button>
    </div>
  );
};

export default DebugPanel;