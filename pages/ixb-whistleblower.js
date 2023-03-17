import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../components/assets/logonew.png";

const Whistleblower = dynamic(() => import("../components/whistleblower"), { ssr: false });
export default function Home() {
  return (
    <div>
      <Head>
        <title>IxB Whistleblower</title>
        <meta
          name="description"
          content="Skjema for å melde fra varsler til ITxBERGEN"
        />
        <meta name="theme-color" content="#66023C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="echo karriere logo" width={300} height={300} />
        <br />
        <Whistleblower />
      </main>
    </div>
  );
}
