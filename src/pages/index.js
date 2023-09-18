import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
  </Layout>
  )
}
