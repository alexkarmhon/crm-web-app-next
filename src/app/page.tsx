import React from 'react';

import AddCompanyButton from './components/add-company-button';
import EnterButton from './components/enter-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <EnterButton />
    </main>
  );
}
