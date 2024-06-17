"use client";

import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { LoadingPage } from '@/components/loading-page';
import PostsPage from '../components/posts';

const HomePage: React.FC = () => {
  const { user, refreshToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log('User not authenticated, redirecting to login');
      router.push('/login');
    } else {
      console.log('User authenticated, refreshing token');
      refreshToken();
    }
  }, [user, router, refreshToken]);

  if (!user) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome to the home page!</h1>
        <PostsPage />
    </div>
  );
};

export default HomePage;
