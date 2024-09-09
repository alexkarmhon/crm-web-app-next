'use client';

import AddPromotionButton from '@/app/components/add-promotion-button';
import DeleteCompanyButton from '@/app/components/delete-company-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';
import { deleteCompany } from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isNewPromotionPage = pathname.endsWith('/new-promotion');

  const { mutateAsync } = useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      router.back();
    },
  });

  const onDelete = async () => {
    await mutateAsync(params.id);
  };

  if (isNewPromotionPage) return null;

  return (
    <Toolbar
      action={
        <>
          <div className="grid grid-cols-2 gap-2">
            <AddPromotionButton companyId={params.id} />
            <DeleteCompanyButton onClick={onDelete}>
              Delete company {params.id}
            </DeleteCompanyButton>
          </div>
        </>
      }
    >
      <></>
    </Toolbar>
  );
}
