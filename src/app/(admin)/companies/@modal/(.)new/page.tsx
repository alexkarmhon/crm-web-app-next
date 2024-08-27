'use client';

import React from 'react';

import CompanyFormModal from '@/app/components/company-form-modal';
import Modal from '@/app/components/modal';
import { useRouter } from 'next/navigation';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyFormModal
        onSubmit={console.log}
        show={true}
        onClose={() => router.back()}
      />
    </Modal>
  );
}
