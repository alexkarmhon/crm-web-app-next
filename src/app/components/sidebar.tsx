'use client';

import React from 'react';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import SidebarItem from './sidebar-item';

export interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleExitButtonClick = () => {
    router.push('/');
  };
  return (
    <aside className="fixed top-0 left-0 x-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul>
          <SidebarItem
            pathname={'/companies'}
            src={'/icons/squares.svg'}
            alt={'companies icon'}
            current={pathname === '/companies'}
          >
            Companies
          </SidebarItem>
          <SidebarItem
            pathname={'/dashboard'}
            src={'/icons/briefcase.svg'}
            alt={'dashboard icon'}
            current={pathname === '/dashboard'}
          >
            Dashboard
          </SidebarItem>
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitButtonClick}
        >
          <Image
            src={'/icons/arrow-left-on-rectangle.svg'}
            alt={'exit icon'}
            width={18}
            height={18}
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
