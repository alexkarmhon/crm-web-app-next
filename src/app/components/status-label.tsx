import React from 'react';

import { CompanyStatus } from '@/lib/api';
import clsx from 'clsx';

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

const StatusLabel = ({ status, disabled }: StatusLabelProps) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center py-0.5 px-2 sm:py-1 sm:px-3.5 rounded-3xl text-sm font-medium',
        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      <div className="w-1 h-1 sm:mr-2 rounded-full bg-current" />
      {/* <span className="hidden sm:inline sm:text-[8px]"> */}
      {labelByStatus[status]}
      {/* </span> */}
    </div>
  );
};

export default StatusLabel;
