import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Types
type Role = 'parent' | 'teacher' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: Role) => Promise<void>;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | null>(null);

// Provider component
export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('edupulse_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function - simulating API call
  const login = async (email: string, password: string, role: Role) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock users for demonstration
    const mockUsers = {
      parent: {
        id: 'p1',
        name: 'Sarah Johnson',
        email: 'parent@example.com',
        role: 'parent',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      teacher: {
        id: 't1',
        name: 'Mark Wilson',
        email: 'teacher@example.com',
        role: 'teacher',
        avatar: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    };
    
    // Simple validation
    if (email && password) {
      const loggedInUser = role === 'parent' ? mockUsers.parent : mockUsers.teacher;
      setUser(loggedInUser);
      localStorage.setItem('edupulse_user', JSON.stringify(loggedInUser));
      
      // Redirect based on role
      if (role === 'parent') {
        navigate('/parent/dashboard');
      } else {
        navigate('/teacher/dashboard');
      }
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('edupulse_user');
    navigate('/login');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};