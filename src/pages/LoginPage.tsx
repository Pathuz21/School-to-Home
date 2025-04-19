import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpenText, Loader2 } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'parent' | 'teacher' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!role) {
      setError('Please select your role');
      return;
    }
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setError(null);
    
    try {
      await login(email, password, role);
    } catch (err) {
      setError('Invalid credentials');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-primary-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center">
              <BookOpenText className="h-8 w-8" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">EduPulse</h2>
          <p className="mt-2 text-sm text-gray-600">School-to-Home Live Dashboard</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex justify-between gap-4">
              <button
                type="button"
                className={`${
                  role === 'parent' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300'
                } w-1/2 py-3 px-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                onClick={() => setRole('parent')}
              >
                I am a Parent
              </button>
              
              <button
                type="button"
                className={`${
                  role === 'teacher' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300'
                } w-1/2 py-3 px-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                onClick={() => setRole('teacher')}
              >
                I am a Teacher
              </button>
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-field"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {error && (
              <div className="text-red-600 text-sm font-medium">{error}</div>
            )}
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
          
          <div className="text-center text-sm">
            <p className="text-gray-600">
              For demo: Use any email and password with your selected role
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;