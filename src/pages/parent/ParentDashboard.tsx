import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { studentData, homeworkData, announcementsData, galleryData } from '../../data/mockData';
import { CheckCircle, XCircle, BookOpen, Image, Bell } from 'lucide-react';

const ParentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Get counts for dashboard
  const newHomeworkCount = homeworkData.filter(hw => hw.isNew).length;
  const latestAnnouncement = announcementsData[0];
  const recentPhotos = galleryData.flatMap(album => album.images).slice(0, 4);
  
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome, {user?.name} 👋
        </h1>
        <p className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
      
      {/* Student profile card */}
      <div className="card bg-gradient-to-r from-indigo-600 to-primary-700 text-white">
        <div className="flex items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white mr-4">
            <img 
              src={studentData.image} 
              alt={studentData.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{studentData.name}</h2>
            <p className="opacity-80">{studentData.grade}, {studentData.className}</p>
          </div>
        </div>
      </div>
      
      {/* Main dashboard cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Attendance Card */}
        <div className="card">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">Today's Attendance</h3>
            <div>
              {studentData.attendance.today ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-1" />
                  <span>Present</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <XCircle className="h-5 w-5 mr-1" />
                  <span>Absent</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-sm text-gray-500">This Week</p>
              <div className="flex mt-1 space-x-1">
                {studentData.attendance.thisWeek.map((present, idx) => (
                  <div 
                    key={idx}
                    className={`h-2 w-6 rounded ${present ? 'bg-green-500' : 'bg-red-500'}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Monthly Rate</p>
              <p className="font-medium">
                {(studentData.attendance.thisMonth * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
        
        {/* Homework Card */}
        <Link to="/parent/homework" className="card hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">Homework</h3>
            <div className="bg-primary-100 text-primary-800 font-medium px-2 py-1 rounded-full text-sm">
              {newHomeworkCount} new
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
              <p className="text-gray-800 truncate">{homeworkData[0].title}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Due: {new Date(homeworkData[0].dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
          </div>
        </Link>
        
        {/* Photos Card */}
        <Link to="/parent/gallery" className="card hover:bg-gray-50 sm:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Recent Photos</h3>
            <div className="flex items-center text-primary-600 text-sm">
              <Image className="h-4 w-4 mr-1" />
              <span>View all</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {recentPhotos.map((photo) => (
              <div key={photo.id} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Link>
        
        {/* Announcements Card */}
        <Link to="/parent/announcements" className="card hover:bg-gray-50 sm:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-900">Latest Announcement</h3>
            <div className="flex items-center text-primary-600 text-sm">
              <Bell className="h-4 w-4 mr-1" />
              <span>View all</span>
            </div>
          </div>
          {latestAnnouncement && (
            <div>
              <div className="flex items-center">
                <h4 className="font-medium">{latestAnnouncement.title}</h4>
                {latestAnnouncement.isPriority && (
                  <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
                    Priority
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{latestAnnouncement.content}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(latestAnnouncement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {latestAnnouncement.author}
              </p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ParentDashboard;