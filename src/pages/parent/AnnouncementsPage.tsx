import React from 'react';
import { announcementsData } from '../../data/mockData';
import { AlertCircle, Calendar, User } from 'lucide-react';

const AnnouncementsPage: React.FC = () => {
  // Sort announcements by priority first, then by date
  const sortedAnnouncements = [...announcementsData].sort((a, b) => {
    if (a.isPriority && !b.isPriority) return -1;
    if (!a.isPriority && b.isPriority) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Get priority announcements for the sticky banner
  const priorityAnnouncements = sortedAnnouncements.filter(a => a.isPriority);
  
  return (
    <div className="space-y-6 fade-in">
      <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
      
      {priorityAnnouncements.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Important Announcement</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{priorityAnnouncements[0].content}</p>
              </div>
              <div className="mt-1">
                <div className="flex space-x-2 text-xs text-red-600">
                  <span className="font-medium">{priorityAnnouncements[0].author}</span>
                  <span>•</span>
                  <span>{new Date(priorityAnnouncements[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        {sortedAnnouncements.map((announcement) => (
          <div 
            key={announcement.id} 
            className={`card ${announcement.isPriority ? 'border border-red-200 bg-red-50' : ''}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
              {announcement.isPriority && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-medium">
                  Priority
                </span>
              )}
            </div>
            
            <p className="text-gray-600 text-sm mt-2">{announcement.content}</p>
            
            <div className="mt-4 flex items-center text-xs text-gray-500">
              <div className="flex items-center">
                <User className="h-3.5 w-3.5 mr-1" />
                <span>{announcement.author}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>
                  {new Date(announcement.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;