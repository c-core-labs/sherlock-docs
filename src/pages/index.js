import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Geospatial search and discovery</>,
    imageUrl: 'https://c-core.app/img/search_space.svg',
    description: (
      <>
        UAV, SAR, EO, and legacy raster data: Indexed, cataloged, searchable, and ARD ready in the cloud on your computer.
      </>
    )
  },
  {
    title: <>Simplify your catalog</>,
    imageUrl: 'https://c-core.app/img/marketing-2.svg',
    description: (
      <>
        Catalogue your own private data, and link to other public STAC catalogs, all searchable and useable through your own interface. By extending our Irregulars tool, you can map metadata from virtually any source to the STAC standard.
      </>
    )
  },
  {
    title: <>Analysis ready data</>,
    imageUrl: 'https://c-core.app/img/analysis.svg',
    description: (
      <>
        UAV, SAR, EO, and legacy raster data come in a variety of formats, often requiring specialist or proprietary software. We convert all the major formats to COG's, ready to be streamed over the web or downloaded and used on your computer.
      </>
    )
  }
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/sherlock/sherlock-implement')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
