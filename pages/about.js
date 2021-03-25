import Layout from 'components/Layout';
import Head from 'next/head';

export default function About() {
  return (
    <div className="p-10 font-serif">
      <Head>
        <title>About me</title>
      </Head>
      <Layout>O mnie</Layout>
    </div>
  );
}
