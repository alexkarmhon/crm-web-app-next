<<<<<<< HEAD
import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar
      action={
        <>
          <AddPromotionButton companyId={params.id} />
        </>
      }
    >
      <SearchInput />
    </Toolbar>
  );
=======
export interface PageProps {}

export default function Page({}: PageProps) {
  return null;
>>>>>>> parent of 2bb2747 (ClientProvider)
}
