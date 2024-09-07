'use client';

import React, { InputHTMLAttributes } from 'react';

import { Categories } from '@/lib/api';
import { Field } from 'formik';

export interface SelectCategoryFieldProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  as?: string;
  label?: string;
}

export const SelectCategoryField: React.FC<SelectCategoryFieldProps> = ({
  id,
  as,
  label,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 sm:mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        as={as}
        className="p-1 sm:p-3 h-8 sm:h-11 text-xs sm:text-sm rounded border border-gray-300 shadow"
      >
        <option></option>
        <option value={Categories.Category1}>Category 1</option>
        <option value={Categories.Category2}>Category 2</option>
        <option value={Categories.Category3}>Category 3</option>
        <option value={Categories.Category4}>Category 4</option>
        <option value={Categories.Category5}>Category 5</option>
        <option value={Categories.Category6}>Category 6</option>
        <option value={Categories.Category7}>Category 7</option>
        <option value={Categories.Category8}>Category 8</option>
      </Field>
    </div>
  );
};

export default SelectCategoryField;
