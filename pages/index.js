import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts.js';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          Welcome to <Link href="/posts/first-post">Next.js!</Link>
        </h1>
        <p>
          我是葉皓晢，畢業於台灣科技大學資工系。 曾在系微Insyde -
          當了近兩年的BIOS工程師，曾多次到廣達onsite協助debug，了解如何判斷bug並逐步追蹤。
          不想被硬體綁得死死的我，認為寫網頁滿適合我的，於是選擇資策會前端班走上轉職之路。前端社群資源完善，在學習這條路上比較不孤單。
          2019年來到辰城科技，當中曾試圖排除各個裝置因相容性所造成的各種疑難雜症，並能與後端同仁和SA友善溝通，協力在時程內完成專案。
          2020年末來到順立智慧接觸電商，與前一份公司相比，這裡多了code
          review嚴格把關的機制，也引用了typescript，後端使用RoR，有後端問題基本上人人都可自己去rails
          console操作後端資料，讓我不只是一個前端工程師。不斷的學習各種前端新技術是我對自己的要求，更期許自己能夠在未來替公司帶來更多不同的技術以及產值。感謝撥空閱讀這份履歷，希望能有和您面談的機會。
        </p>
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
  );
}
