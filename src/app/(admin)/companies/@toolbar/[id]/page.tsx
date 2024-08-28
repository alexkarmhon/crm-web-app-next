'use client';

import AddPromotionButton from '@/app/components/add-promotion-button';
import DeleteCompanyButton from '@/app/components/delete-company-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';
import { deleteCompany } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      router.back();
    },
  });

  const onDelete = async () => {
    await mutateAsync(params.id);
  };

  return (
    <Toolbar
      action={
        <>
          <AddPromotionButton companyId={params.id} />
          <DeleteCompanyButton onClick={onDelete}>
            Delete company {params.id}
          </DeleteCompanyButton>
        </>
      }
    >
      <SearchInput />
    </Toolbar>
  );
}
