'use client';

import React, { InputHTMLAttributes } from 'react';

import { CompanyStatus } from '@/lib/api';
import { Field } from 'formik';

export interface SelectStatusFieldProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  as?: string;
  label?: string;
}

export const SelectStatusField: React.FC<SelectStatusFieldProps> = ({
  id,
  as,
  label,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        as={as}
        className="p-3 h-8 sm:h-11 text-xs sm:text-sm rounded border border-gray-300 shadow"
      >
        <option></option>
        <option value={CompanyStatus.Active}>Active</option>
        <option value={CompanyStatus.NotActive}>Not active</option>
        <option value={CompanyStatus.Pending}>Pending</option>
        <option value={CompanyStatus.Suspended}>Suspended</option>
      </Field>
    </div>
  );
};

export default SelectStatusField;
