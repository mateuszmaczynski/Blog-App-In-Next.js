import Layout from 'components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="p-10 font-serif">
      <Head>
        <title>About me</title>
      </Head>
      <Layout>O mnie</Layout>
    </div>
  );
}
