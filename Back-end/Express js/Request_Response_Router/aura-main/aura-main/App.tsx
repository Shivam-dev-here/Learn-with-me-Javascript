
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWindow from './components/ChatWindow';
import ResourceHub from './components/ResourceHub';
import CopingStrategies from './components/CopingStrategies';
import { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.CHAT);

  const renderContent = () => {
    switch (activeView) {
      case View.CHAT:
        return <ChatWindow />;
      case View.RESOURCES:
        return <ResourceHub />;
      case View.STRATEGIES:
        return <CopingStrategies />;
      default:
        return <ChatWindow />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-sky-50 text-slate-800">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-grow container mx-auto p-4 flex justify-center items-start">
        <div className="w-full max-w-4xl">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
