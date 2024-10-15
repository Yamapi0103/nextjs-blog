### 前言

Just practice nextjs.

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

https://github.com/vercel/next-learn/tree/main/basics/

vercel: https://vercel.live/link/nextjs-blog-eta-seven-92.vercel.app?via=deployment-domains-list&p=1

### 重點筆記：

開發階段 vs. 生產階段
在 開發階段（npm run dev 或 yarn dev）, getStaticPaths 在每次請求發生時執行。
在 生產階段，getStaticPaths 在打包階段執行。



### 進階知識

- fallback [文件](https://nextjs.tw/docs/api-reference/data-fetching/get-static-paths#fallback-false)

- 我們目前為止建立了許多範例來闡述 [`getStaticProps`](https://nextjs.tw/docs/basic-features/data-fetching#getstaticprops-static-generation) 及 [`getStaticPaths`](https://nextjs.tw/docs/basic-features/data-fetching#getstaticpaths-static-generation)— 查看原始碼來了解更多：

* [Blog Starter using markdown files](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)（[Demo](https://next-blog-starter.vercel.app/)）
* [WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)（[Demo](https://next-blog-wordpress.vercel.app/)）
* [DatoCMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-datocms)（[Demo](https://next-blog-datocms.vercel.app/)）
* [TakeShape Example](https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape)（[Demo](https://next-blog-takeshape.vercel.app/)）
* [Sanity Example](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity)（[Demo](https://next-blog-sanity.vercel.app/)）
