'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Button from './button';

export default function AddCompanyButton() {
  const route = useRouter();
  return (
    <>
      <Button onClick={() => route.push('/companies/new')}>Add company</Button>
    </>
  );
}
