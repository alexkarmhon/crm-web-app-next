'use client';

import React from 'react';

import Image from 'next/image';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

const LogoUploader = ({
  label,
  placeholder,
  id,
  square,
  ...rest
}: LogoUploaderProps) => {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor="id"
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full cursor-pointer"
      >
        <Image
          src="/icons/upload.svg"
          alt="upload"
          className="mb-1"
          width={48}
          height={48}
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          type="file"
          id={id}
          accept="image/"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default LogoUploader;
