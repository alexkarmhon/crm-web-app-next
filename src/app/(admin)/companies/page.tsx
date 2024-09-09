'use client';

import React, { useState } from 'react';

import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTable from '@/app/components/company-table';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput onSearchChange={handleSearchChange} />
      </Toolbar>
      <CompanyTable searchTerm={searchTerm} />
    </>
  );
}
