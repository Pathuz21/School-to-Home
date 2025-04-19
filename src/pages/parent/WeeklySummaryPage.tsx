import React from 'react';
import { Bar } from 'react-chartjs-2';
import { weeklySummaryData } from '../../data/mockData';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { CheckCircle, XCircle } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklySummaryPage: React.FC = () => {
  // Format attendance data for chart
  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const attendanceValues = [
    weeklySummaryData.attendance.monday ? 1 : 0,
    weeklySummaryData.attendance.tuesday ? 1 : 0,
    weeklySummaryData.attendance.wednesday ? 1 : 0,
    weeklySummaryData.attendance.thursday ? 1 : 0,
    weeklySummaryData.attendance.friday ? 1 : 0
  ];
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Attendance',
        data: attendanceValues,
        backgroundColor: '#4F46E5',
        borderRadius: 6,
        maxBarThickness: 30
      }
    ]
  };
  
  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 1,
          callback: function(value: number) {
            return value === 0 ? 'Absent' : 'Present';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return context.raw === 0 ? 'Absent' : 'Present';
          }
        }
      }
    }
  };
  
  const attendanceRate = (attendanceValues.reduce((sum, value) => sum + value, 0) / 5) * 100;
  
  return (
    <div className="space-y-6 fade-in">
      <h1 className="text-2xl font-bold text-gray-900">Weekly Summary</h1>
      
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Attendance This Week</h2>
        <div className="h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="mt-4 flex justify-center">
          <div className="text-center bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-sm text-gray-600">Weekly Attendance Rate</p>
            <p className={`text-2xl font-bold ${attendanceRate >= 80 ? 'text-green-600' : attendanceRate >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
              {attendanceRate}%
            </p>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Teacher's Behavior Note</h2>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-700">{weeklySummaryData.behaviorNote}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Homework Completion</h2>
          <div className="flex justify-center">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle 
                  cx="18" 
                  cy="18" 
                  r="16" 
                  fill="none" 
                  stroke="#E5E7EB" 
                  strokeWidth="4"
                />
                <circle 
                  cx="18" 
                  cy="18" 
                  r="16" 
                  fill="none" 
                  stroke="#4F46E5" 
                  strokeWidth="4" 
                  strokeDasharray={`${(weeklySummaryData.homeworkCompleted / weeklySummaryData.totalHomework) * 100} 100`}
                  strokeDashoffset="25"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">{weeklySummaryData.homeworkCompleted}</p>
                  <p className="text-xs text-gray-500">of {weeklySummaryData.totalHomework}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Highlights</h2>
          <ul className="space-y-2">
            {weeklySummaryData.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeeklySummaryPage;