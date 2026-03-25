
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const NavLink: React.FC<{
  label: string;
  view: View;
  activeView: View;
  onClick: (view: View) => void;
}> = ({ label, view, activeView, onClick }) => {
  const isActive = activeView === view;
  return (
    <button
      onClick={() => onClick(view)}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
        isActive
          ? 'bg-sky-500 text-white shadow-md'
          : 'text-slate-600 hover:bg-sky-100'
      }`}
    >
      {label}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
          <h1 className="text-xl font-bold text-slate-800">Aura</h1>
        </div>
        <nav className="flex items-center space-x-2 bg-slate-100 p-1 rounded-full">
          <NavLink label="Chat" view={View.CHAT} activeView={activeView} onClick={setActiveView} />
          <NavLink label="Resources" view={View.RESOURCES} activeView={activeView} onClick={setActiveView} />
          <NavLink label="Coping" view={View.STRATEGIES} activeView={activeView} onClick={setActiveView} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
