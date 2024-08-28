'use client';

import React from 'react';

import { Field } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: string;
}

const InputField = ({ label, as, id, ...rest }: InputFieldProps) => {
  if (as) {
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
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        >
          <option value="active">active</option>
          <option value="notActive">not active</option>
          <option value="pending">pending</option>
          <option value="suspended">suspended</option>
        </Field>
      </div>
    );
  }

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
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
};

export default InputField;
