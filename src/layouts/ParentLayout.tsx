import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, Book, Image, Bell, BarChart2, LogOut } from 'lucide-react';

const ParentLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const getTitle = () => {
    switch(location.pathname) {
      case '/parent/dashboard': return 'Dashboard';
      case '/parent': return 'Dashboard';
      case '/parent/homework': return 'Homework';
      case '/parent/gallery': return 'Gallery';
      case '/parent/announcements': return 'Announcements';
      case '/parent/summary': return 'Weekly Summary';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white shadow-lg border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <NavLink 
              to="/parent/dashboard" 
              className={({ isActive }) => 
                `${isActive ? 'nav-item-active' : 'nav-item-inactive'} nav-item w-1/5 py-2`
              }
            >
              <Home className="h-6 w-6" />
              <span>Dashboard</span>
            </NavLink>
            
            <NavLink 
              to="/parent/homework" 
              className={({ isActive }) => 
                `${isActive ? 'nav-item-active' : 'nav-item-inactive'} nav-item w-1/5 py-2`
              }
            >
              <Book className="h-6 w-6" />
              <span>Homework</span>
            </NavLink>
            
            <NavLink 
              to="/parent/gallery" 
              className={({ isActive }) => 
                `${isActive ? 'nav-item-active' : 'nav-item-inactive'} nav-item w-1/5 py-2`
              }
            >
              <Image className="h-6 w-6" />
              <span>Gallery</span>
            </NavLink>
            
            <NavLink 
              to="/parent/announcements" 
              className={({ isActive }) => 
                `${isActive ? 'nav-item-active' : 'nav-item-inactive'} nav-item w-1/5 py-2`
              }
            >
              <Bell className="h-6 w-6" />
              <span>Updates</span>
            </NavLink>
            
            <NavLink 
              to="/parent/summary" 
              className={({ isActive }) => 
                `${isActive ? 'nav-item-active' : 'nav-item-inactive'} nav-item w-1/5 py-2`
              }
            >
              <BarChart2 className="h-6 w-6" />
              <span>Summary</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ParentLayout;