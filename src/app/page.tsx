import React from 'react';

import AddCompanyButton from './components/add-company-button';
import ErrorButton from './components/error-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <ErrorButton />
    </main>
  );
}
