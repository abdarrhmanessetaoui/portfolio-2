import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Abderrahman Settaoui" />
        <meta
          name="description"
          content="Abderrahman Settaoui - Full Stack Web Developer portfolio"
        />
        <meta
          name="keywords"
          content="Full Stack, web development, portfolio, React, Laravel, Node.js"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
    </>
  );
};

export default MetaTags;
