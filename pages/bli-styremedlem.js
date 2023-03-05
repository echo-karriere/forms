import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../components/assets/logonew.png";

const Styremedlem = dynamic(() => import("../components/styremedlem"), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bli styremedlem</title>
        <meta
          name="description"
          content="Skjema for å melde deg på som styremedlem i ITxBERGEN"
        />
        <meta name="theme-color" content="#66023C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="echo karriere logo" width={300} height={300} />
        <br />
        <div className="w-11/12">
          <div className="w-full max-w-lg mx-auto">
            <Styremedlem />
          </div>
        </div>
      </main>
    </div>
  );
}
