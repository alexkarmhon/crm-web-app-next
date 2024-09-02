import { Company, Country } from '../api';

const getCountByCountryTitle = (
  countries: Country[],
  companies: Company[],
): Record<string, number> => {
  const countryMap = countries.reduce(
    (map, country) => {
      map[country.id] = country.title;
      return map;
    },
    {} as Record<string, string>,
  );

  return companies.reduce(
    (counts, company) => {
      const countryId = company.countryId;
      const countryTitle = countryMap[countryId] || 'Unknown';

      if (!counts[countryTitle]) counts[countryTitle] = 0;
      counts[countryTitle] += 1;

      return counts;
    },
    {} as Record<string, number>,
  );
};

export default getCountByCountryTitle;
