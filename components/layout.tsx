import Head from "next/head";
import Footer from "../components/Home/Footer";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "Hey, I'm Marian Garcia";
const logo = ":)";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Marian Garcia. Frontend Engineer." />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.headingXl}>{logo}</h1>
      </header>
      <>{children}</>
      <Footer />
    </>
  );
}
