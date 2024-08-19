import React from 'react';

import Header from '../components/header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard Page</Header>
      <main></main>
    </>
  );
}
