import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  children,
  stats,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  return (
    // <div>
    //   {children}
    //   <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
    //     <div className="col-span-12">{stats}</div>
    //     <div className="col-span-5">{sales}</div>
    //     <div className="col-span-7">{categories}</div>
    //     <div className="col-span-6">{countries}</div>
    //     <div className="col-span-6">{promotions}</div>
    //   </main>
    // </div>
    <div>
      {children}
      <main className="grid grid-cols-1 gap-3 py-6 pl-4 pr-4 sm:grid-cols-2 sm:gap-5 sm:py-10 sm:pl-10 sm:pr-7 lg:grid-cols-12 xl:grid-cols-12">
        <div className="col-span-1 sm:col-span-3 md:col-span-12 lg:col-span-12 xl:col-span-12">
          {stats}
        </div>
        <div className="col-span-1 sm:col-span-3 md:col-span-12 lg:col-span-7">
          {sales}
        </div>
        <div className="col-span-1 sm:col-span-3 md:col-span-12 lg:col-span-5">
          {categories}
        </div>
        <div className="col-span-1 sm:col-span-3 md:col-span-12 lg:col-span-6">
          {countries}
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-12 lg:col-span-6">
          {promotions}
        </div>
      </main>
    </div>
  );
}
