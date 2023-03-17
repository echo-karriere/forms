import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>echo karriere skjemaer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#66023C" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Aktive skjemaer</h1>
        <br />

        <div className={styles.grid}>
          <Link href="/karrieredagene2023" className={styles.card}>
            <h2>Karrieredagene 2023 &rarr;</h2>
          </Link>
          <Link href="/bli-styremedlem" className={styles.card}>
            <h2>Bli styremedlem &rarr;</h2>
          </Link>
          <Link href="/ixb-whistleblower" className={styles.card}>
            <h2>IxB Whistleblower &rarr;</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}
