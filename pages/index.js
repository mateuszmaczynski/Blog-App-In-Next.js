import Head from 'next/head';

export default function Home({children}) {
  return (
    <div className="p-10 font-serif">
      <nav className="bg-blue-400 p-5 flex justify-center">
        <a className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-300">
          Blog
        </a>
      </nav>

      <main className="bg-gray-100 p-5">
        {children}
      </main>

      <footer className="bg-blue-400 p-5 text-gray-100 text-center">
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}
