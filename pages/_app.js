import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-[#33030d] h-2 w-full fixed top-0" />

        <Component {...pageProps} />

    </>
  );
}

export default MyApp;
