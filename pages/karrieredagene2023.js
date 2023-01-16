import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const KD23 = dynamic(() => import("../components/KD23"), { ssr: false });
export default function Home() {
  return (
    <div>
      <Head>
        <title>Påmelding til echo karriere sine karrieredager 2023</title>
        <meta
          name="description"
          content="Påmelding til echo karriere sine karrieredager 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <KD23 />
      </main>
    </div>
  );
}
