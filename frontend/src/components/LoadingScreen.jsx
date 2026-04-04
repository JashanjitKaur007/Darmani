import React from 'react';
import { Brain, Loader } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl animate-pulse">
            <Brain className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          MindCare AI
        </h1>
        
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Loader className="h-5 w-5 animate-spin" />
          <span>Loading your wellness companion...</span>
        </div>
        
        <div className="mt-8">
          <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;