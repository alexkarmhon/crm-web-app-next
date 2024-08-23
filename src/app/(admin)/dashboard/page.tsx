import React from 'react';

import ErrorTriggerButton from '@/app/components/error-trigger-button';
import Header from '@/app/components/header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard Page</Header>
      <main>
        <ErrorTriggerButton />
      </main>
    </>
  );
}
