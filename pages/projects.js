import Layout from 'components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="p-10 font-serif">
      <Head>
        <title>My projects in next.js</title>
      </Head>
      <Layout>Moje projekty</Layout>
    </div>
  );
}
