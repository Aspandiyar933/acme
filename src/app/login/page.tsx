"use client";

import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/login-form';
import { LoadingPage } from '@/components/loading-page';

const LoginPage: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log('User already authenticated, redirecting to home');
      router.push('/');
    }
  }, [user, router]);

  if (user) {
    return <LoadingPage />; // Optionally show a loading indicator while redirecting
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
