import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface SummaryTableCellProps {
  align?: 'left' | 'right' | 'center';
  children: ReactNode;
}

export const SummaryTableCell = ({
  align = 'left',
  children,
}: SummaryTableCellProps) => {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
};

export default SummaryTableCell;
