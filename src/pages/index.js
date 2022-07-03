import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>功能齐全</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
         Minecraft Transit Railway在游戏里添加了完整的铁路系统，全自动化的运行系统以及全面的铁路设施，包括闸机、售票机、屏蔽门等。支持自动驾驶，手动驾驶*测试版 两种驾驶方法。
      </>
    ),
  },
  {
    title: <>方便快捷</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
         只需一次小小的安装，便可享受全部功能；游戏中，只需要一个铁路仪表板，便可操控整个铁路系统！何乐而不为呢？点击下方相关链接试试吧。
      </>
    ),
  },
  {
    title: <>不只是“地铁”</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
         本模组最新版除地铁外还增加了缆车、轮渡、直梯、升降梯等。另有社区玩家制作的追加包，将高铁、巴士等额外内容添加到了游戏内，玩法丰富多样。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              阅读
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
