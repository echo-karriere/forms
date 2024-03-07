import Airtable from "airtable";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Status() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading to true
  const router = useRouter();
  const { ref } = router.query;

  useEffect(() => {
    if (ref) {
      // Ensure loading state is true when a ref is present
      setLoading(true);
      const fetchRecords = async () => {
        const base = new Airtable({
          apiKey: process.env.AIRTABLE_API_KEY,
        }).base(process.env.AIRTABLE_BASE_ID);

        const records = await new Promise((resolve, reject) => {
          base("info")
            .select({
              view: "Grid view",
            })
            .all((err, records) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(records);
              }
            });
        });

        const foundRecord = records.find(
          (record) => record.get("Organisasjonsnummer").toString() === ref
        );
        setIsRegistered(Boolean(foundRecord));
        setRecord(foundRecord); // Update record state
        setLoading(false); // Update loading state to false after data is fetched
      };

      // Delay the fetchRecords call to ensure the loading state is shown for at least 5 seconds
      setTimeout(() => {
        fetchRecords();
      }, 5000);
    } else {
      // Immediately set loading to false if there's no ref
      setLoading(false);
    }
  }, [ref]);

  return (
    <>
      <Head>
        <title>{loading ? "Vennligst vent..." : "Status"}</title>
      </Head>
      <div>
        {loading ? (
          <>
            <h1 className="text-xl font-semibold mt-6 mx-6">
              Vennligst vent mens vi sjekker om bedrift med organisasjonsnummer{" "}
              {ref} er påmeldt...
            </h1>
            <p className="mt-6 mx-6">
              Dette bør nok ikke ta lenger tid enn 5 sekunder
            </p>
          </>
        ) : (
          <>
            {ref && (
              <h1 className="text-2xl font-semibold mt-6 mx-6">
                Bedrift med organisasjonsnummer {ref} er{" "}
                {isRegistered ? "påmeldt" : "ikke påmeldt"}
              </h1>
            )}
            {!isRegistered && (
              <p className="mt-6 mx-6">
                Du kan melde på bedriften ved å gå til{" "}
                <a
                  href="https://www.itxbergen.no/for-bedrifter/pamelding"
                  className="text-blue-500 underline">
                  denne siden
                </a>
                <br />
                <br />
                Mener du dette er feil? Ta kontakt med oss på{" "}
                <a
                  href="mailto:kontakt@itxbergen.no"
                  className="text-blue-500 underline">
                  kontakt@itxbergen.no
                </a>
              </p>
            )}
            {isRegistered && record && (
              <div className="mx-6">
                <p className="mt-6">
                  <b>Bedrift:</b> {record.get("Bedrift")}
                </p>
                <p>
                  <b>Rabatt:</b> {record.get("Offentlig")}
                </p>
                {/* <p>
                  <b>Deltar:</b> {record.get("Dato")}
                </p>
                <p>
                  <b>Stand:</b> {record.get("Stand")}
                </p> */}
                <br />
                <p>
                  <b>Lynpresentasjon:</b> {record.get("Lynpresentasjon")}
                </p>
                <p>
                  <b>Konseptpresentasjon:</b>{" "}
                  {record.get("Konseptpresentasjon")}
                </p>
                <p>
                  <b>Workshop:</b> {record.get("Workshop")}
                </p>
                <p>
                  <b>Bankett:</b> {record.get("Bankett")}
                </p>
                <p>
                  <b>Leveranse:</b> {record.get("Leveranse")}
                </p>
                <br />
                <p>
                  Grunnet personvern viser vi ikke kontaktinformasjonen eller
                  fakturainformasjon her. Ta kontakt med oss på{" "}
                  <a
                    href="mailto:kontakt@itxbergen.no"
                    className="text-blue-500 underline">
                    kontakt@itxbergen.no
                  </a>{" "}
                  om du lurer på noe.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
