import { Company, Promotion } from '../api';

const getActualPromotions = (promotions: Promotion[], companies: Company[]) => {
  const actualCompanies = companies.map(company => company.title);
  const actualPromotions = promotions.filter(promotion =>
    actualCompanies.includes(promotion.companyTitle),
  );

  return actualPromotions;
};

export default getActualPromotions;
