import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Bell, LogOut } from 'lucide-react';

const TeacherLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const getTitle = () => {
    return 'Teacher Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold text-gray-900">{getTitle()}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                  <Bell className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={user?.avatar || 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=150'}
                  alt={user?.name || 'User'}
                />
                <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">{user?.name}</span>
              </div>
              <div>
                <button 
                  onClick={logout}
                  className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;