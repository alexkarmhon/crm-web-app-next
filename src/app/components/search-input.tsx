'use client';

import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import Image from 'next/image';

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onSearchChange: (value: string) => void;
}

export const SearchInput = ({ onSearchChange, ...rest }: SearchInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearchChange(newValue);
  };

  return (
    <div className="relative w-96">
      <input
        {...rest}
        type="text"
        className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
        value={value}
        onChange={handleChange}
      />
      <button type="button" className="absolute top-0	right-0 p-3">
        <Image
          width={20}
          height={20}
          src="/icons/magnifying-glass.svg"
          alt="search icon"
        />
      </button>
    </div>
  );
};

export default SearchInput;
