import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { classData } from '../../data/mockData';
import { 
  UserCheck, PlusCircle, Upload, BellRing, X, Check, Send, RefreshCw
} from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'attendance' | 'homework' | 'photos' | 'announcements'>('attendance');
  const [students, setStudents] = useState(classData.students);
  const [homeworkTitle, setHomeworkTitle] = useState('');
  const [homeworkDesc, setHomeworkDesc] = useState('');
  const [homeworkSubject, setHomeworkSubject] = useState('');
  const [homeworkDueDate, setHomeworkDueDate] = useState('');
  const [attachmentName, setAttachmentName] = useState('');
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('');
  const [isPriority, setIsPriority] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  
  const handleAttendanceToggle = (studentId: string) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, present: !student.present } 
        : student
    ));
  };
  
  const markAllPresent = () => {
    setStudents(students.map(student => ({ ...student, present: true })));
  };

  const submitHomework = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setSuccess('Homework assigned successfully!');
      setIsSubmitting(false);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setHomeworkTitle('');
        setHomeworkDesc('');
        setHomeworkSubject('');
        setHomeworkDueDate('');
        setAttachmentName('');
        setSuccess(null);
      }, 2000);
    }, 1500);
  };
  
  const submitAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setSuccess('Announcement posted successfully!');
      setIsSubmitting(false);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setAnnouncementTitle('');
        setAnnouncementContent('');
        setIsPriority(false);
        setSuccess(null);
      }, 2000);
    }, 1500);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachmentName(file.name);
    }
  };

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
      
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`pb-4 px-1 ${
              activeTab === 'attendance'
                ? 'tab-active'
                : 'tab-inactive'
            }`}
            onClick={() => setActiveTab('attendance')}
          >
            <span className="flex items-center">
              <UserCheck className="h-5 w-5 mr-2" />
              Attendance
            </span>
          </button>
          
          <button
            className={`pb-4 px-1 ${
              activeTab === 'homework'
                ? 'tab-active'
                : 'tab-inactive'
            }`}
            onClick={() => setActiveTab('homework')}
          >
            <span className="flex items-center">
              <PlusCircle className="h-5 w-5 mr-2" />
              Homework
            </span>
          </button>
          
          <button
            className={`pb-4 px-1 ${
              activeTab === 'photos'
                ? 'tab-active'
                : 'tab-inactive'
            }`}
            onClick={() => setActiveTab('photos')}
          >
            <span className="flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Upload Photos
            </span>
          </button>
          
          <button
            className={`pb-4 px-1 ${
              activeTab === 'announcements'
                ? 'tab-active'
                : 'tab-inactive'
            }`}
            onClick={() => setActiveTab('announcements')}
          >
            <span className="flex items-center">
              <BellRing className="h-5 w-5 mr-2" />
              Announcements
            </span>
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="mt-4">
        {/* Attendance Tab */}
        {activeTab === 'attendance' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">{classData.name} Attendance</h2>
              <button 
                className="btn-primary text-sm"
                onClick={markAllPresent}
              >
                Mark All Present
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button
                            onClick={() => handleAttendanceToggle(student.id)}
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                              student.present
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {student.present ? (
                              <>
                                <Check className="h-4 w-4 mr-1.5" />
                                Present
                              </>
                            ) : (
                              <>
                                <X className="h-4 w-4 mr-1.5" />
                                Absent
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Homework Tab */}
        {activeTab === 'homework' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Assign New Homework</h2>
            
            <form onSubmit={submitHomework} className="bg-white rounded-xl shadow-md p-6">
              {success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  {success}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="homeworkTitle" className="form-label">Title</label>
                  <input
                    type="text"
                    id="homeworkTitle"
                    className="input-field"
                    placeholder="e.g., Math: Fractions Practice"
                    value={homeworkTitle}
                    onChange={(e) => setHomeworkTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="homeworkSubject" className="form-label">Subject</label>
                  <select
                    id="homeworkSubject"
                    className="input-field"
                    value={homeworkSubject}
                    onChange={(e) => setHomeworkSubject(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select subject...</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Art">Art</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="homeworkDesc" className="form-label">Description</label>
                  <textarea
                    id="homeworkDesc"
                    rows={4}
                    className="input-field"
                    placeholder="Provide detailed instructions for the assignment"
                    value={homeworkDesc}
                    onChange={(e) => setHomeworkDesc(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="dueDate" className="form-label">Due Date</label>
                  <input
                    type="date"
                    id="dueDate"
                    className="input-field"
                    value={homeworkDueDate}
                    onChange={(e) => setHomeworkDueDate(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="form-label">Attachment (optional)</label>
                  <div className="mt-1 flex items-center">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    >
                      <span>Upload file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    {attachmentName && (
                      <span className="ml-2 text-sm text-gray-500">
                        {attachmentName}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="animate-spin h-4 w-4 mr-2" />
                      Assigning...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Assign Homework
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Upload Photos</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-6">
                <label className="form-label">Event Title</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., Field Trip, Science Project, Sports Day"
                />
              </div>
              
              <div className="mb-6">
                <label className="form-label">Photos</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload-photos"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                      >
                        <span>Upload files</span>
                        <input id="file-upload-photos" type="file" className="sr-only" multiple accept="image/*" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="btn-primary">
                  Upload Photos
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Create Announcement</h2>
            
            <form onSubmit={submitAnnouncement} className="bg-white rounded-xl shadow-md p-6">
              {success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  {success}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="announcementTitle" className="form-label">Title</label>
                  <input
                    type="text"
                    id="announcementTitle"
                    className="input-field"
                    placeholder="e.g., Parent-Teacher Conference"
                    value={announcementTitle}
                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="announcementContent" className="form-label">Content</label>
                  <textarea
                    id="announcementContent"
                    rows={6}
                    className="input-field"
                    placeholder="Write your announcement here..."
                    value={announcementContent}
                    onChange={(e) => setAnnouncementContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="isPriority"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    checked={isPriority}
                    onChange={(e) => setIsPriority(e.target.checked)}
                  />
                  <label htmlFor="isPriority" className="ml-2 block text-sm text-gray-900">
                    Mark as priority announcement
                  </label>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="animate-spin h-4 w-4 mr-2" />
                      Posting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Post Announcement
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;