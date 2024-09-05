import React from 'react';

import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <div className="ml-0 sm:ml-60">{children}</div>
    </div>
  );
}
