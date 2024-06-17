"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  user: any;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      console.log('Login response:', response.data);
      setUser(response.data);
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      router.push('/'); // Redirect to the home page after login
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  const logout = () => {
    console.log('Logging out');
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    router.push('/login'); // Redirect to the login page after logout
  };

  const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem('refreshToken')
        const response = await axios.post(
        'https://dummyjson.com/auth/refresh',
            {
            refreshToken: refresh
            },
  
        );
      console.log('Refresh token response:', response.data);
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Failed to refresh token:', error);
      logout();
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      // Optionally, you can validate the token here and fetch user info
      console.log('Token loaded from localStorage:', savedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
