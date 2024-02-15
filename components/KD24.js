import Airtable from "airtable";
import { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="p-5 bg-white rounded-lg">
        Vennligst vent...
        <br /> Ikke lukk vinduet mens vi sender påmeldingsskjemaet.
      </div>
    </div>
  );
};

export default function Home() {
  const formRef = useRef();
  const [offentlig, setOffentlig] = useState(false);
  const [price, setPrice] = useState(0);
  const [lynpresentasjon, setLynpresentasjon] = useState(false);
  const [konseptpresentasjon, setKonseptpresentasjon] = useState(false);
  const [workshop, setWorkshop] = useState(false);
  const [bankett, setBankett] = useState(false);
  const [leveranse, setLeveranse] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [success, setSucess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSucess(true);
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );

    const Bedrift = document.getElementById("Bedrift").value;
    const Organisasjonsnummer = document.getElementById(
      "Organisasjonsnummer"
    ).value;
    const Kontaktperson = document.getElementById("Kontaktperson").value;
    const Telefonnummer = document.getElementById("Telefonnummer").value;
    const Offentlig = document.getElementById("Offentlig").value;
    const Epost = document.getElementById("Epost").value;
    const Fakturamail = document.getElementById("Fakturamail").value;
    const Fakturaperson = document.getElementById("Fakturaperson").value;
    const Fakturaadresse = document.getElementById("Fakturaadresse").value;
    const Fakturainfo = document.getElementById("Fakturainfo").value;
    const Lynpresentasjon = document.getElementById("Lynpresentasjon").value;
    const Konseptpresentasjon = document.getElementById(
      "Konseptpresentasjon"
    ).value;
    const Workshop = document.getElementById("Workshop").value;
    const Bankett = document.getElementById("Bankett").value;
    const Leveranse = document.getElementById("Leveranse").value;
    const Annet = document.getElementById("Annet").value;
    const Policy = document.getElementById("Policy").value;
    base("event-ek2024").create(
      {
        Bedrift: Bedrift,
        Organisasjonsnummer: Organisasjonsnummer,
        Offentlig: Offentlig,
        Kontaktperson: Kontaktperson,
        Telefonnummer: Telefonnummer,
        Epost: Epost,
        Fakturamail: Fakturamail,
        Fakturaperson: Fakturaperson,
        Fakturaadresse: Fakturaadresse,
        Fakturainfo: Fakturainfo,
        Lynpresentasjon: Lynpresentasjon,
        Konseptpresentasjon: Konseptpresentasjon,
        Workshop: Workshop,
        Bankett: Bankett,
        Leveranse: Leveranse,
        Annet: Annet,
        Policy: Policy,
      },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
        setSucess(true);
        formRef.current.reset();
        window.location.href = "https://success.ixb.no";
      }
    );
  };

  return (
    <div>
      <>
        <div className="mx-auto w-11/12 max-w-6xl my-4">
          <h1 className="text-2xl font-semibold mt-3">
            Påmelding til karrieredagene for IT studenter i Bergen
          </h1>
        </div>
        <form
          className="mx-auto w-11/12 max-w-6xl my-8"
          ref={formRef}
          onSubmit={submitHandler}>
          <h2 className="text-xl font-semibold mb-4">
            Del 1 - Bedriftsinformasjon
          </h2>
          <hr className="mb-4 max-w-2xl" />
          <div className="flex flex-col max-w-2xl text-sm mb-2">
            <label htmlFor="Bedrift" className="font-bold">
              Bedrift*
            </label>
            <p>
              Skriv hvilket navn dere ønsker bedriften skal bli markedsført som
              for studentene
            </p>
            <input
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Bedrift"
              type="text"
              required
            />
            <label htmlFor="Organisasjonsnummer" className="font-bold">
              Organisasjonsnummer*
            </label>
            <p>Skriv organisasjonsnummeret uten mellomrom</p>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200  focus:border-b-2"
              id="Organisasjonsnummer"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{9}"
              required
            />

            <label htmlFor="Offentlig" className="font-bold">
              Er bedriften statlig eller en startup?*
            </label>

            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                Vi har rabatterte priser for enkelte statlige bedrifter og
                startup bedrifter i henhold til avtale- og påmeldingsvilkårene.
                Endre dette feltet til "Ja" for å få rabattert pris.
                <br /> <br />
                <b>NB:</b> Les del III.a og III.b i avtale- og
                påmeldingsvilkårene for å se om bedriften dekker kravene for
                rabattert pris. Om disse kravene ikke er oppfylt, vil vi
                fakturere bedriften for fullpris.
                <br />
                <br />
                <a
                  href="https://itxbergen.no/files/kontrakt.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500">
                  {" "}
                  Åpne avtale- og påmeldingsvilkårene i ny fane
                </a>
              </p>

              <hr className="my-4" />
              <select
                className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
                id="Offentlig"
                onChange={(e) => {
                  if (e.target.value == "Ja") {
                    setOffentlig(true);
                    setPrice(price - 5000);
                  } else {
                    setOffentlig(false);
                    setPrice(price + 5000);
                  }
                }}>
                <option value="Nei">Nei</option>
                <option value="Ja">Ja</option>
              </select>
            </div>

            <h2 className="text-xl font-semibold mb-4">
              Del 2 - Kontaktperson
            </h2>
            <hr className="mb-4 max-w-2xl" />
            <label htmlFor="Kontaktperson" className="font-bold">
              Navn på kontaktperson*
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Kontaktperson"
              type="text"
              required
            />
            <label htmlFor="Telefonnummer" className="font-bold">
              Telefonnummer til kontaktperson*
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Telefonnummer"
              type="tel"
              inputMode="tel"
              required
            />
            <label htmlFor="Epost" className="font-bold">
              E-post til kontaktperson*
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Epost"
              type="email"
              inputMode="email"
              required
            />
            <h2 className="text-xl font-semibold mb-4">
              Del 3 - Fakturainformasjon
            </h2>
            <hr className="mb-4 max-w-2xl" />
            <label htmlFor="Fakturamail" className="font-bold">
              E-post for faktura/EHF referanse*
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Fakturamail"
              type="text"
              inputMode="text"
              required
            />
            <label htmlFor="Fakturaperson" className="font-bold">
              Kontaktperson for faktura*
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Fakturaperson"
              type="text"
              inputMode="text"
              required
            />
            <label htmlFor="Fakturaadresse" className="font-bold">
              Fakturaadresse*
            </label>
            <textarea
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Fakturaadresse"
              type="text"
              inputMode="text"
              rows="3"
              required
            />
            <label htmlFor="Fakturainfo" className="font-bold">
              Annen informasjon til faktura*
            </label>
            <textarea
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Fakturainfo"
              type="text"
              inputMode="text"
              rows="3"
              required
            />
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                Feltet for "annen informasjon til faktura" er obligatorisk å
                fylle ut. Skal fakturaen merkes med noe spesielt skal dette
                fylles ut her. Faktura forfaller 30 dager etter utsendelse, ta
                kontakt med økonomiansvarlig om det skulle være et problem. Hvis
                dere ikke har noen spesielle ønsker, kan dette feltet fylles ut
                med "Ingen merknader".
              </p>
            </div>
            <h2 className="text-xl font-semibold mb-4">
              Del 4 - Valg av grunnpakke
            </h2>
            <hr className="mb-4 max-w-2xl" />

            <label htmlFor="Stand" className="font-bold">
              Grunnpakken*
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                Grunnpakken er inkludert i prisen og inneholder standplass og
                inneholder:
                <ul className="list-disc pl-6">
                  <li>
                    Stand plass (inkl. 1 bord, 2 stoler og strømpadde med minst
                    3 uttak)
                  </li>
                  <li>
                    Lynpresentasjon av bedriften i 3 minutter (Valgfritt, og må
                    velges under)
                  </li>
                  <li>Mulighet for lynintervju med studenter</li>
                  <li>Standplass på 3 x 3 meter</li>
                </ul>
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4">
              Del 5 - Valg av tilleggstjenester
            </h2>
            <hr className="mb-4 max-w-2xl" />
            <label htmlFor="Lynpresentasjon" className="font-bold">
              Lynpresentasjon (Gratis)
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                3 minutters kort introduksjon av bedriften for å informere
                studentene om at dere står på stand og gjerne litt kort om
                hvorfor de skal besøke nettopp deres stand. Skjer på starten av
                dagen før standområdet åpnes. Vi har ballongslipp med premier
                før lynpresentasjonene for å tiltrekke oss flere studenter på
                morgenen. Lynpresentasjonene starter klokken 10:00.
                Presentasjonen skal sendes inn til oss innen 1. september, alt
                som blir sendt inn etter dette er ikke garantert at blir med,
                dersom ingenting er blitt sendt inn vil dere få en slide med
                logoen deres i bakgrunnen mens dere snakker.
              </p>

              <hr className="my-4" />

              <input
                type="checkbox"
                id="Lynpresentasjon"
                name="Lynpresentasjon"
                value={lynpresentasjon ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                onChange={(e) => {
                  if (e.target.checked) {
                    setLynpresentasjon(true);
                  } else {
                    setLynpresentasjon(false);
                  }
                }}
              />
              <label htmlFor="Lynpresentasjon" className="ml-2 text-md -mt-4">
                Legg til lynpresentasjon
              </label>
            </div>
            <label htmlFor="Konseptpresentasjon" className="font-bold">
              Konseptpresentasjon (+ 2 000 NOK)
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                20 minutters presentasjon av bedriften eller et tema som er
                spesielt interessant for deres bedrift. Det vil være enkel
                snacks og drikke tilgjengelig, uten ekstra kostnader. Tema for
                presentasjonen sendes inn innen 1. september. Vi kjører første
                mann til mølla prinsippet når det gjelder valg av tema. Vi lager
                påmeldingsside for presentasjonen. Dersom det er ledige plasser
                ved start slipper vi inn de som ønsker, så lenge det er ledig
                plass. Dere er selv ansvarlige for å promotere deres
                presentasjon, men dere vil få mulighet til å benytte dere av
                våre kanaler dersom dere ønsker. Ta kontakt på mail
                kontakt@itxbergen.no for å avtale.
              </p>

              <hr className="my-4" />
              <input
                type="checkbox"
                id="Konseptpresentasjon"
                name="Konseptpresentasjon"
                // value send Ja if checked, otherwise send Nei
                value={konseptpresentasjon ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                onChange={() => {
                  if (konseptpresentasjon) {
                    setKonseptpresentasjon(false);
                    setPrice(price - 2000);
                  } else {
                    setKonseptpresentasjon(true);
                    setPrice(price + 2000);
                  }
                }}
              />
              <label
                htmlFor="Konseptpresentasjon"
                className="ml-2 text-md -mt-4">
                Legg til konseptpresentasjon
              </label>
            </div>
            <label htmlFor="Workshop" className="font-bold">
              Workshop (+ 4 000 NOK) - Fullt
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                60 minutter workshop med studenter. Det vil være enkel snacks og
                drikke tilgjengelig, uten ekstra kostnader. Tema for workshopen
                sendes inn innen 1. september. Vi kjører første mann til mølla
                prinsippet når det gjelder valg av tema. Vi lager påmeldingsside
                for presentasjonen. Dersom det er ledige plasser ved start
                slipper vi inn de som ønsker, så lenge det er ledig plass. Dere
                er selv ansvarlige for å promotere deres workshop, men dere vil
                få mulighet til å benytte dere av våre kanaler dersom dere
                ønsker. Ta kontakt på mail kontakt@itxbergen.no for å avtale.
                <br /> <br />
                <b>
                  Workshop er fullt, meld bedriften på venteliste. NB! Dette er
                  ikke bindende før en eventuell plass er tilbudt og dere har
                  takket ja til denne.
                </b>
              </p>

              <hr className="my-4" />
              <input
                type="checkbox"
                id="Workshop"
                name="Workshop"
                value={workshop ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                onChange={() => {
                  if (workshop) {
                    setWorkshop(false);
                    setPrice(price - 4000);
                  } else {
                    setWorkshop(true);
                    setPrice(price + 4000);
                  }
                }}
              />
              <label htmlFor="Workshop" className="ml-2 text-md -mt-4">
                Legg til workshop
              </label>
            </div>
            <label htmlFor="Bankett" className="font-bold">
              <p>Interesse for bankett</p>
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <p>
                <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
                <p className="ml-8 -mt-6">
                  Banketten vil avholdes den 19. september kl. 19:00 et sted i
                  Bergen Sentrum. Pakken inneholder ett rundt bord med 10
                  plasser, der dere selv inviterer studenter fra karrieredagen.
                  Inkl. 3-retters middag, 4 enheter hver og velkomstdrink.
                  Veiledende pris for denne pakken vil ligge mellom 16 000 NOK
                  og 20 000 NOK. Dette vil bli fakturert i tilegg til beløpet
                  som er oppgitt nederst i dette skjemaet. Dette vil være
                  bindende etter vi har mottatt en endelig bekreftelse fra
                  bedriften at dere ønsker å delta på banketten. Per nå er dette
                  kun for å vise interesse for å delta på bankett.
                </p>
              </p>
              <hr className="my-4" />
              <input
                type="checkbox"
                id="Bankett"
                name="Bankett"
                value={bankett ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                onChange={() => {
                  if (bankett) {
                    setBankett(false);
                  } else {
                    setBankett(true);
                  }
                }}
              />
              <label htmlFor="Bankett" className="ml-2 text-md -mt-4">
                Vi ønsker å vise interesse for å delta på bankett.
              </label>
            </div>
            <label htmlFor="Leveranse" className="font-bold">
              Leveranse av stand
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <p>
                <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
                <p className="ml-8 -mt-6">
                  Ønsker dere å få stand sendt og levert til oss? Ved å velge
                  dette godtar dere at vi videresender faktura informasjon til
                  en tredjepart som er ansvarlig for frakt og lagring, som vil
                  sende dere et tilbud. Om dere ikke velger dette alternativet,
                  har dere selv ansvar for å få sende og hente utstyr til og fra
                  arrangementet.
                </p>
              </p>
              <hr className="my-4" />
              <input
                type="checkbox"
                id="Leveranse"
                name="Leveranse"
                value={leveranse ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                onChange={() => {
                  if (leveranse) {
                    setLeveranse(false);
                  } else {
                    setLeveranse(true);
                  }
                }}
              />
              <label htmlFor="Leveranse" className="ml-2 text-md -mt-4">
                Ja, vi ønsker å få stand sendt og levert til dere
              </label>
            </div>
            <h2 className="text-xl font-semibold">Del 6 - Annet</h2>
            <hr className="my-4" />
            <label htmlFor="Annet" className="font-bold">
              Har du noe annet på hjertet?
            </label>
            <textarea
              id="Annet"
              name="Annet"
              rows="4"
              className="border border-gray-300 -md p-4 mt-2 mb-6 focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"></textarea>
            <h2 className="text-xl font-semibold">Del 7 - Vilkår</h2>
            <hr className="my-4" />
            <label htmlFor="Policy" className="font-bold">
              Aksepter vilkår*
            </label>

            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <p>
                <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
                <p className="ml-8 -mt-6">
                  Vi har lest gjennom vilkårene som står skrevet i avtale- og
                  påmeldingsvilkårene. Vi aksepterer disse vilkårene og
                  forplikter oss til å følge disse. <br />
                  <br />
                  <a
                    href="https://itxbergen.no/files/kontrakt.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500">
                    {" "}
                    Åpne avtale- og påmeldingsvilkårene i ny fane
                  </a>
                </p>
              </p>
              <hr className="my-4" />
              <input
                type="checkbox"
                id="Policy"
                name="Policy"
                value={policy ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                required
                onChange={() => {
                  if (policy) {
                    setPolicy(false);
                  } else {
                    setPolicy(true);
                  }
                }}
              />
              <label htmlFor="Policy" className="ml-2 text-md -mt-4">
                Vi bekrefter at vi har lest vilkårene og aksepterer vilkårene
                for kontrakten.
              </label>
            </div>

            <hr className="my-4" />
          </div>
          <p>
            Deres pris:{" "}
            <span className="font-bold">
              {(8500 + price).toLocaleString("no-NO", {
                style: "currency",
                currency: "NOK",
              })}

              {leveranse ? " + frakt" : ""}
            </span>
          </p>
          <small>Prisen er oppgitt eks. mva. med forbehold om feil.</small>
          <br /> <br />
          {success && (
            <p className="text-black font-bold">
              Sender påmeldingsskjemaet, vennligst vent...
              <br />
              <br />
            </p>
          )}
          {!success && (
            <button
              type="submit"
              className="bg-[#33030d] hover:bg-fuchsia-900 text-white py-2 px-4">
              Send påmeldingsskjemaet
            </button>
          )}
        </form>
        {success && <LoadingOverlay />}
      </>
    </div>
  );
}
