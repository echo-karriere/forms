import Airtable from "airtable";
import { useRef, useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  useEffect(() => {
    setReferenceCode(generateRandomString(10));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );

    const Varsel = document.getElementById("Varsel").value;

    base("varsel").create(
      {
        Referansekode: referenceCode,
        Varsel: Varsel,
      },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
        formRef.current.reset();
      }
    );
  };

  return (
    <div>
      <>
        <div className="mx-auto w-11/12 max-w-xl my-4">
          <h1 className="text-2xl font-semibold mt-3">IxB Whistleblower</h1>
          <br />

          <p>
            IxB Whistleblower lar deg melde fra kritikkverdige forhold som du
            har opplevd på ITxBergen sine arrangementer. Dette kan være alt fra
            seksuell trakassering til kritikkverdige forhold. Vi vil ta imot
            alle typer meldinger, og vil behandle dem på en konfidensiell måte.
          </p>
        </div>
        <div className="mx-auto w-11/12 max-w-xl my-4">
          <h3 className="text-2xl font-semibold mt-3">Del 1 - referansekode</h3>
          <br />
          <p className="text-red-600 font-bold">
            LES DENNE DELEN NØYE FØR DU FORTSETTER:
          </p>
          <p>
            Under vil du finne en referansekode som du kan bruke for å logge deg
            inn for å lese svaret på varslet ditt. Du kan logge inn når som
            helst ved å gå til{" "}
            <a
              className="text-blue-600 underline"
              href="https://ixb.no/whistleblower">
              ixb.no/whistleblower
            </a>
            . <b>Det er viktig</b> at du husker referansekoden din, da du ikke
            vil få tilgang til svaret fra oss uten den. Vi anbefaler deg å ta
            vare på referansekoden, for eksempel ved å ta et skjembilde av den,
            eller ved å skrive den ned på et papir eller i notatene dine. Etter
            du har sendt inn varslet vil du ikke få se referansekoden din igjen.
          </p>
          <br />
          <input
            type="text"
            className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
            id="Referansekode"
            value={referenceCode}
            disabled
          />
          <br />
        </div>

        <div className="mx-auto w-11/12 max-w-xl my-4">
          <h3 className="text-2xl font-semibold mt-3">Del 2 - Varsel</h3>
          <br />
          <p>
            Vennligst beskriv kort hva som har skjedd. Du kan gjerne bruke
            punktlister eller avsnitt for å gjøre det lettere å lese. Vi vil
            behandle denne informasjonen konfidensielt og kun benytte den til å
            gjøre våre arrangementer tryggere.
          </p>
          <br />
          <form ref={formRef} onSubmit={submitHandler}>
            <textarea
              id="Varsel"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="4"
              placeholder="Skriv ditt varsel her"
              required></textarea>
            <br />
            <button
              type="submit"
              onClick={() => {
                if (Varsel.value !== "") setSuccess(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Send inn varsel
            </button>
            {success && (
              // add a success message over the entire page
              <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-2xl">
                  <h2 className="text-2xl font-semibold mb-4">
                    Varslet ditt er sendt!
                  </h2>
                  <p>
                    Vi vil nå behandle varslet ditt, og ta kontakt med deg hvis
                    det er nødvendig. Du kan nå forlate siden.
                  </p>
                  <br />
                  <p>Din referansekode er:</p>
                  <p className="font-bold">
                    <span className="text-green-600">{referenceCode}</span>
                  </p>
                  <small>
                    Dette er siste gang du ser referansekoden din. Husk å ta
                    vare på den.
                  </small>
                  <br />
                  <br />
                  <a
                    className="bg-[#33030d] hover:bg-fuchsia-900 text-white py-2 px-4"
                    href="https://ixb.no/whistleblower">
                    Gå til ixb.no/whistleblower
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </>
    </div>
  );
}

function generateRandomString(length) {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result.concat("-", Math.floor(Math.random() * 89 + 11));
}
