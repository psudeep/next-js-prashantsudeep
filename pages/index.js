import { SkipNavContent } from '@reach/skip-nav';
import { useAmp } from 'next/amp';

import Page from '../components/page';
import Footer from '../components/footer';
import Newsletter from '../components/home/newsletter';

import { ORG_NAME } from '../lib/constants';


export default () => {
  const isAmp = useAmp();

  return (
    <Page title={`Next.js by ${ORG_NAME} - The React Framework`}>
{/*      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js by ${ORG_NAME} - The React Framework`}
        url="https://nextjs.org"
        description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build static and dynamic websites and web applications.`}
      />*/}
      <SkipNavContent />
      {/*<Notification href="/blog/next-9-3" title="Next 9.3 is out!" titleMobile="Next 9.3 is out!">
        <b>Next 9.3 is out!</b> — Next-gen SSG Support, Preview Mode, Sass Support, and more!
        <span className="highlight">Learn More →</span>
      </Notification>*/}
      {/*<Intro isAmp={isAmp} />
      <Demo />
      <Features />
      <Customers />
      <Learn />*/}
      <Newsletter />
      <Footer />
    </Page>
  );
};

export const config = {
  amp: 'hybrid'
};
