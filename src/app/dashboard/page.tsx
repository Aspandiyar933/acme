import React from "react";
import LogoutButton from "../../components/logout-button";
import { LoadingPage } from "../../components/loading-page";
import { useAuth } from "../../context/AuthContext";
import withAuth from "../../components/withAuth";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <LoadingPage />;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user}</p>
      <LogoutButton />
    </div>
  );
};

export default withAuth(Dashboard);
