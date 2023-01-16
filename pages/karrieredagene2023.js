import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../components/assets/logo.png";

const KD23 = dynamic(() => import("../components/KD23"), { ssr: false });
export default function Home() {
  return (
    <div>
      <Head>
        <title>Påmelding til echo karriere sine karrieredager 2023</title>
        <meta
          name="description"
          content="Påmeldingsskjemaet for å melde bedriften din på echo karriere sine karrieredager 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="echo karriere logo" width={190} height={190} />
        <KD23 />
      </main>
    </div>
  );
}
