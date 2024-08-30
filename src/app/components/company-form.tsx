'use client';

import React from 'react';

import LogoUploader from '@/app/components/logo-uploader';
import { CompanyStatus, createCompany } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

import Button from './button';
import InputField from './input-field';
import SelectCategoryField from './select-category-field';
import SelectStatusField from './select-status-field';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

const CompanyForm = ({ onSubmit }: CompanyFormProps) => {
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      router.push('/companies');
    },
  });

  const handleSubmit = async (values: CompanyFieldValues) => {
    const { name, description, date, category, country, status } = values;
    await mutateAsync({
      title: name,
      description: description,
      status: status as CompanyStatus,
      joinedDate: date,
      hasPromotions: false,
      categoryId: category,
      categoryTitle: category,
      countryId: country,
      countryTitle: country,
    });

    router.push('/companies');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <SelectStatusField label="Status" name="status" as="select" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            {/* <InputField
              label="Category"
              placeholder="Category"
              name="category"
            /> */}
            <SelectCategoryField label="Category" name="category" as="select" />
            <InputField label="Joined date" type="date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
};

export default CompanyForm;
