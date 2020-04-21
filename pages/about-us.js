import { SkipNavContent } from '@reach/skip-nav';
import { useAmp } from 'next/amp';

import Page from '../components/page';
import Footer from '../components/footer';
import Features from '../components/home/about';

import { ORG_NAME } from '../lib/constants';


export default () => {
  const isAmp = useAmp();

  return (
    <Page title={`Next.js by ${ORG_NAME} - The React Framework`}>
      <SkipNavContent />
      <Features />
      <Footer />
    </Page>
  );
};

export const config = {
  amp: 'hybrid'
};
