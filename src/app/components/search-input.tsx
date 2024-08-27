import React from 'react';

import Image from 'next/image';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
  return (
    <div className="relative w-96">
      <input
        type="text"
        {...rest}
        className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
      />
      <button
        type="button"
        onClick={onSearchClick}
        className="absolute top-0 right-0 p-3"
      >
        <Image
          width={20}
          height={20}
          alt="search icon"
          src="/icons/magnifying-glass.svg"
        />
      </button>
    </div>
  );
}
