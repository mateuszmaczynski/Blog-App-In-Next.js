import Layout from 'components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="p-10 font-serif">
      <Head>
        <title>Blog - recent posts</title>
      </Head>
      <Layout>Treść wiadomości</Layout>
    </div>
  );
}
