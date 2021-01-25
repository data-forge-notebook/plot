import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Simple API',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Plot has a simple API and is easy to learn.
      </>
    ),
  },
  {
    title: 'Built on ApexCharts',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <p>
            Plot is built on the incredible <a href="https://apexcharts.com/">ApexCharts</a>.
        </p>
        
        <p>
            Plot is plugin-based and will support other visualization libraries in the future.
        </p>
      </>
    ),
  },
  {
    title: 'Cross platform',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Plot works in the browser (thanks to <a href="docs/render-dom.renderdom">renderDOM</a>) and in Node.js (thanks to <a href="docs/render-image.renderimage">renderImage</a>).
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline} >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/readme/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
