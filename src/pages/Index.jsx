import React from 'react';
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-500">
      <header className="bg-blue-700 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white">My Application</h1>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-blue-300 rounded-lg h-96 flex items-center justify-center bg-blue-400">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Your Application</h2>
                <p className="text-blue-100 mb-4">This is a starting point. Begin adding your components and features here.</p>
                <Button className="bg-white text-blue-500 hover:bg-blue-100">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-blue-200 text-sm">
            © 2023 My Application. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;