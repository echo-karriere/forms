import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-[#33030d] h-2 w-full fixed top-0" />
      <div
        className="bg-[#33030d] text-white px-6 py-3 relative flex justify-center"
        role="alert">
        <span className="block sm:inliner">
          <strong className="font-bold">OBS! </strong>
          echo karriere har byttet navn, og vil fra 1. mars være kjent om
          ITxBergen. Du kan lese mer om navnbytte på{" "}
          <a
            className="underline cursor-pointer"
            href="https://www.ixb.no/nytt-navn">
            ixb.no/nytt-navn
          </a>
        </span>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
