'use client';

import React from 'react';

import CompanyForm, {
  CompanyFieldValues,
  CompanyFormProps,
} from './company-form';
import Modal, { ModalProps } from './modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export const CompanyFormModal = ({
  onSubmit,
  ...rest
}: CompanyFormModalProps) => {
  const handleSubmit = (values: CompanyFieldValues) => {
    console.log(values);
  };
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={handleSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
