'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Button from './button';

const AddCompanyButton = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
};

export default AddCompanyButton;
