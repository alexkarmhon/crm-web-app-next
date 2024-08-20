import React, { ReactNode } from 'react';

import Image from 'next/image';

import SidebarItem from './sidebar-item';

export interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
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
          >
            Companies
          </SidebarItem>
          <SidebarItem
            pathname={'/dashboard'}
            src={'/icons/briefcase.svg'}
            alt={'dashboard icon'}
          >
            Dashboard
          </SidebarItem>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
