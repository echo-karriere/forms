import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../components/assets/logonew.png";

const KD24 = dynamic(() => import("../components/KD24"), { ssr: false });
export default function Home() {
  return (
    <div>
      <Head>
        <title>Påmelding til karrieredagene for IT Studente i Bergen</title>
        <meta
          name="description"
          content="Påmeldingsskjemaet for å melde bedriften din på echo karriere sine karrieredager 2023"
        />
        <meta name="theme-color" content="#66023C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="echo karriere logo" width={300} height={300} />
        <br />
        <KD24 />
      </main>
    </div>
  );
}
