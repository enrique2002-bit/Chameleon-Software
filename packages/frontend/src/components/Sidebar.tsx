import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('sidebarCollapsed') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', String(collapsed));
  }, [collapsed]);

  const width = collapsed ? 'w-16' : 'w-56';

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded hover:bg-surface-dark ${isActive ? 'text-brand font-bold' : ''}`;

  return (
    <div className={`bg-surface-dark text-white flex flex-col ${width} transition-all`}>
      <div className="flex-1 p-2 space-y-2">
        <NavLink to="/chat" className={linkClass} end>
          Chat
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>
      </div>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-2 border-t border-gray-600 hover:bg-surface-dark"
      >
        {collapsed ? '»' : '«'}
      </button>
    </div>
  );
}