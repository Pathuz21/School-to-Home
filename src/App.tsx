import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Context Providers
import { AuthProvider } from './contexts/AuthContext';

// Pages
import LoginPage from './pages/LoginPage';
import ParentDashboard from './pages/parent/ParentDashboard';
import HomeworkPage from './pages/parent/HomeworkPage';
import GalleryPage from './pages/parent/GalleryPage';
import AnnouncementsPage from './pages/parent/AnnouncementsPage';
import WeeklySummaryPage from './pages/parent/WeeklySummaryPage';
import TeacherDashboard from './pages/teacher/TeacherDashboard';

// Layouts
import ProtectedRoute from './components/ProtectedRoute';
import ParentLayout from './layouts/ParentLayout';
import TeacherLayout from './layouts/TeacherLayout';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Parent Routes */}
        <Route path="/parent" element={
          <ProtectedRoute role="parent">
            <ParentLayout />
          </ProtectedRoute>
        }>
          <Route index element={<ParentDashboard />} />
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="homework" element={<HomeworkPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="summary" element={<WeeklySummaryPage />} />
        </Route>
        
        {/* Teacher Routes */}
        <Route path="/teacher" element={
          <ProtectedRoute role="teacher">
            <TeacherLayout />
          </ProtectedRoute>
        }>
          <Route index element={<TeacherDashboard />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;