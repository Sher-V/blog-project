import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"flex justify-between"}>
        <div>
          <span>logo</span>
        </div>
        <div>Menu</div>
      </div>
      <main>Blog</main>
      <footer>Footer</footer>
    </div>
  );
}
