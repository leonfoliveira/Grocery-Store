import React from 'react';

import Layout from '@/components/Layout';
import Shelf from '@/components/Shelf';

import tmpData from './tmpDataFetch';

interface SectionProps {
  name: string;
}
const Section: React.FC<SectionProps> = ({ name }) => {
  const data = tmpData[name];

  return (
    <Layout title={name as string}>
      <Shelf items={data} />
    </Layout>
  );
};

export default Section;
