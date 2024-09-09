import React, { ReactNode } from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: ReactNode;
  current?: boolean;
}

export const SidebarItem = ({
  pathname,
  src,
  alt,
  children,
  current,
}: SidebarItemProps) => {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-1 gap-3.5',
          current &&
            'relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-200 sm:after:w-[2px] sm:after:h-full sm:after:top-0 sm:after:right-[-12px] sm:after:ml-auto sm:after:rounded-sm',

          // 'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm',
        )}
      >
        <Image className="ml-0" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
