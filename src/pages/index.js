import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostsData }) {


  console.log(allPostsData);


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, My name is Dara sovita
        </p>
        <Link href="/posts/first-post">Goto First Post</Link><br></br>
        <Link href="/comments/myComment">Goto Comment</Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}



export async function getStaticProps() {
  
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}