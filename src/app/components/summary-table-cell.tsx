import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface SummaryTableCellProps {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

export default function SummaryTableCell({
  align,
  children,
}: SummaryTableCellProps) {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-1',
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
}
