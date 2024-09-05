import React, { ReactNode } from 'react';

import Image from 'next/image';

export interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    // <header className="flex items-center gap-5 py-6	px-10 border-b border-gray-300">
    //   <h1 className="flex-1 text-3xl font-semibold text-gray-900">
    //     {children}
    //   </h1>
    //   <div className="w-px self-stretch bg-gray-300" />
    //   <div className="flex gap-3">
    //     <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
    //     <div>
    //       <p className="text-base	font-semibold text-gray-900">Adam Smith</p>
    //       <p className="text-sm	font-light text-gray-900">adamsmith@gmail.com</p>
    //     </div>
    //   </div>
    // </header>
    <header className="flex items-center gap-5 py-6 px-3 border-b border-gray-300 mt-52 sm:mt-0 sm:px-6 md:px-12">
      <h1 className="flex-1 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
        {children}
      </h1>
      <div className="w-px self-stretch bg-gray-300" />
      <div className="flex gap-3">
        <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
        <div>
          <p className="text-base	font-semibold text-gray-900">Adam Smith</p>
          <p className="hidden sm:block text-sm	font-light text-gray-900">
            adamsmith@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
