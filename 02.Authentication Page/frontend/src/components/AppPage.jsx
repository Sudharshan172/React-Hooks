import React from 'react';

const AppPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Protected App Page</h1>
      <p className="text-lg text-gray-700">You are authenticated and can view this page.</p>
    </div>
  );
};

export default AppPage;
