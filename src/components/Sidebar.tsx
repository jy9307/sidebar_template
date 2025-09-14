'use client';

import { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Mail, 
  Calendar,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: Home, label: '대시보드', href: '#' },
  { icon: Users, label: '사용자', href: '#' },
  { icon: BarChart3, label: '분석', href: '#' },
  { icon: FileText, label: '문서', href: '#' },
  { icon: Mail, label: '메시지', href: '#' },
  { icon: Calendar, label: '일정', href: '#' },
  { icon: Settings, label: '설정', href: '#' },
];

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <>
      {/* 모바일 오버레이 */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* 사이드바 */}
      <div className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50
        transition-all duration-300 ease-in-out
        ${isCollapsed 
          ? 'w-16 lg:w-16' 
          : 'w-64 lg:w-64'
        }
        lg:relative lg:z-auto
      `}>
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* 메뉴 아이템들 */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700
                hover:bg-gray-100 hover:text-gray-900 transition-colors
                ${isCollapsed ? 'justify-center' : ''}
              `}
            >
              <item.icon size={20} />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </a>
          ))}
        </nav>

        {/* 사용자 정보 */}
        {!isCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">사용자</p>
                <p className="text-xs text-gray-500 truncate">user@example.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
