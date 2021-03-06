import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../layout/layout';
import utilStyles from '../shared/styles/utils.module.css';
import { getSortedPostsData } from '../shared/lib/posts';
import Date from '../components/date/date';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link href={`/search?location=yokohama`}>
              <a>SSR 横浜</a>
            </Link>
          </li>
          <li>
            <Link href={`/search?location=tokyo`}>
              <a>SSR 東京</a>
            </Link>
          </li>

          <li>
            <Link href={`/search2?location=yokohama`}>
              <a>CSR 横浜</a>
            </Link>
          </li>

          <li>
            <Link href={`/search2?location=tokyo`}>
              <a>CSR 東京</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
