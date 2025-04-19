import React, { useState } from 'react';
import { homeworkData } from '../../data/mockData';
import { Calendar, Clock, Paperclip as PaperClip, Filter } from 'lucide-react';

const HomeworkPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'new'>('all');
  
  const filteredHomework = filter === 'all' 
    ? homeworkData 
    : homeworkData.filter(hw => hw.isNew);
  
  const getSubjectColor = (subject: string) => {
    switch(subject) {
      case 'Mathematics': return 'bg-blue-100 text-blue-800';
      case 'English': return 'bg-purple-100 text-purple-800';
      case 'Science': return 'bg-green-100 text-green-800';
      case 'Social Studies': return 'bg-orange-100 text-orange-800';
      case 'Art': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold text-gray-900">Homework</h1>
        
        <div className="mt-4 sm:mt-0 flex items-center bg-white rounded-xl shadow-sm p-1 border border-gray-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg ${
              filter === 'all' 
                ? 'bg-primary-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg flex items-center ${
              filter === 'new' 
                ? 'bg-primary-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            New
            {homeworkData.filter(hw => hw.isNew).length > 0 && (
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                filter === 'new' ? 'bg-white text-primary-800' : 'bg-primary-600 text-white'
              }`}>
                {homeworkData.filter(hw => hw.isNew).length}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredHomework.map((homework) => (
          <div key={homework.id} className={`card relative border-l-4 ${homework.isNew ? 'border-primary-600' : 'border-gray-300'}`}>
            {homework.isNew && (
              <div className="absolute top-3 right-3 bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                New
              </div>
            )}
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getSubjectColor(homework.subject)}`}>
                    {homework.subject}
                  </span>
                  <span className="text-xs text-gray-600 flex items-center">
                    <Calendar className="inline-block h-3.5 w-3.5 mr-1" />
                    Assigned: {new Date(homework.assignedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{homework.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{homework.description}</p>
              </div>
              
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:text-right flex flex-col justify-between">
                <div className="flex items-center text-gray-700 text-sm sm:justify-end">
                  <Clock className="inline-block h-4 w-4 mr-1" />
                  <span>Due: </span>
                  <span className="font-medium ml-1">
                    {new Date(homework.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                
                {homework.hasAttachment && (
                  <div className="mt-4">
                    <button className="btn-secondary text-sm flex items-center">
                      <PaperClip className="h-4 w-4 mr-1.5" />
                      Download
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredHomework.length === 0 && (
          <div className="text-center py-10">
            <div className="text-gray-400 mb-2">
              <Filter className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No homework found</h3>
            <p className="text-gray-600">
              {filter === 'new' 
                ? 'There are no new homework assignments.'
                : 'There are no homework assignments.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeworkPage;