import Airtable from "airtable";
import { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  const formRef = useRef();
  const [offentlig, setOffentlig] = useState(false);
  const [price, setPrice] = useState(0);
  const [lynpresentasjon, setLynpresentasjon] = useState(false);
  const [standprice, setStandprice] = useState(0);
  const [konseptpresentasjon, setKonseptpresentasjon] = useState(false);
  const [workshop, setWorkshop] = useState(false);
  const [bankett, setBankett] = useState(false);
  const [leveranse, setLeveranse] = useState(false);
  const [both, setBoth] = useState(false);
  const [stand, setStand] = useState("");
  const [policy, setPolicy] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

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
    const Dato = document.getElementById("Dato").value;
    const Stand = document.getElementById("Stand").value;
    const Lynpresentasjon = document.getElementById("Lynpresentasjon").value;
    const Konseptpresentasjon = document.getElementById(
      "Konseptpresentasjon"
    ).value;
    const Workshop = document.getElementById("Workshop").value;
    const Bankett = document.getElementById("Bankett").value;
    const Leveranse = document.getElementById("Leveranse").value;
    const Annet = document.getElementById("Annet").value;
    const Policy = document.getElementById("Policy").value;
    base("event-ek2023").create(
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
        Dato: Dato,
        Stand: Stand,
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
        formRef.current.reset();
      }
    );
  };

  return (
    <div>
      <>
        <div className="mx-auto w-11/12 max-w-6xl my-4">
          <h1 className="text-2xl font-semibold mt-3">
            P??melding til karrieredagene for IT studenter i Bergen
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
            <input
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Bedrift"
              type="text"
              required
            />
            <label htmlFor="Organisasjonsnummer" className="font-bold">
              Organisasjonsnummer*
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200  focus:border-b-2"
              id="Organisasjonsnummer"
              type="text"
              inputMode="numeric"
              required
            />
            <label htmlFor="Offentlig" className="font-bold">
              Er bedriften offentlig?*
            </label>

            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                Vi har ulike priser for offentlige og private bedrifter. Om
                bedriften er en statlig organisasjon, eller at staten har en
                100% eierandel, har vi et annet pristilbud. Endre menyen under
                til Ja om dette er tilfelle for dere.
              </p>

              <hr className="my-4" />
              <select
                className="border py-2 px-4 mb-5 mt-2  max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
                id="Offentlig"
                onChange={(e) => {
                  if (e.target.value == "Ja") {
                    setOffentlig(true);
                  } else {
                    setOffentlig(false);
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
              Navn p?? kontaktperson*
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
                Feltet for "annen informasjon til faktura" er obligatorisk ??
                fylle ut. Skal fakturaen merkes med noe spesielt skal dette
                fylles ut her. Faktura forfaller 30 dager etter utsendelse, ta
                kontakt med ??konomiansvarlig om det skulle v??re et problem. Hvis
                dere ikke har noen spesielle ??nsker, kan dette feltet fylles ut
                med "Ingen merknader".
              </p>
            </div>
            <h2 className="text-xl font-semibold mb-4">
              Del 4 - Valg av grunnpakke
            </h2>
            <hr className="mb-4 max-w-2xl" />
            <label htmlFor="Dato" className="font-bold">
              Dato for deltakelse*
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                Karrieredagene for 2023 skal arrangeres 14. og 15. september
                2023. Velg datoene du ??nsker ?? delta p?? ved ?? velge et valg fra
                listen.
              </p>

              <hr className="my-4" />
              <select
                className="border py-2 px-4 mb-5 mt-2  w-full focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
                id="Dato"
                required
                onChange={(e) => {
                  setStand("");

                  if (e.target.value == "Begge dagene") {
                    setBoth(true);
                  } else {
                    setBoth(false);
                  }
                }}>
                <option value="" disabled selected hidden>
                  Velg en dato
                </option>
                <option value="Bare 14. september">Bare 14. september</option>
                <option value="Bare 15. september">Bare 15. september</option>
                <option value="Begge dagene">Begge dagene</option>
              </select>
            </div>
            <label htmlFor="Stand" className="font-bold">
              Velg standtype*
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                Vi tilbyr to typer stander, en stor med m??lene 5m x 3m og en
                vanlig med m??lene 3m x 3m. Alle standplasser inkluderer 1. bord,
                2 stoler og en str??mpadde med minst 3 uttak.
              </p>

              <hr className="my-4" />
              <select
                className="border py-2 px-4 mb-5 mt-2  w-full focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
                id="Stand"
                required
                value={stand}
                onChange={(e) => {
                  setStand(e.target.value);
                  if (!offentlig) {
                    if (both && e.target.value == "Vanlig stand") {
                      setStandprice(10000);
                    } else if (both && e.target.value == "Stor stand") {
                      setStandprice(15000);
                    } else if (e.target.value == "Vanlig stand") {
                      setStandprice(7000);
                    } else if (e.target.value == "Stor stand") {
                      setStandprice(10000);
                    }
                  }
                  if (offentlig) {
                    if (both && e.target.value == "Vanlig stand") {
                      setStandprice(4000);
                    } else if (both && e.target.value == "Stor stand") {
                      setStandprice(15000);
                    } else if (e.target.value == "Vanlig stand") {
                      setStandprice(3000);
                    } else if (e.target.value == "Stor stand") {
                      setStandprice(10000);
                    }
                  }
                }}>
                <option value="" disabled selected hidden>
                  Velg en standtype
                </option>
                <option value="Vanlig stand">Vanlig stand (3m x 3m)</option>
                <option value="Stor stand">Stor stand (5m x 3m)</option>
              </select>
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
                3 minutters kort introduksjon av bedriften for ?? informere
                studentene om at dere st??r p?? stand og gjerne litt kort om
                hvorfor de skal bes??ke nettopp deres stand. Skjer p?? starten av
                dagen f??r standomr??det ??pnes. Vi har ballongslipp med premier
                f??r lynpresentasjonene for ?? tiltrekke oss flere studenter p??
                morgenen. Lynpresentasjonene starter klokken 10:00.
                Presentasjonen skal sendes inn til oss innen 1. september, alt
                som blir sendt inn etter dette er ikke garantert at blir med,
                dersom ingenting er blitt sendt inn vil dere f?? en slide med
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
                spesielt interessant for deres bedrift. Det vil v??re enkel
                snacks og drikke tilgjengelig, uten ekstra kostnader. Tema for
                presentasjonen sendes inn innen 1. september. Vi kj??rer f??rste
                mann til m??lla prinsippet n??r det gjelder valg av tema. Vi lager
                p??meldingsside for presentasjonen. Dersom det er ledige plasser
                ved start slipper vi inn de som ??nsker, s?? lenge det er ledig
                plass. Dere er selv ansvarlige for ?? promotere deres
                presentasjon, men dere vil f?? mulighet til ?? benytte dere av
                v??re kanaler dersom dere ??nsker. Ta kontakt p?? mail
                kontakt@echokarriere.no for ?? avtale.
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
              Workshop (+ 4 000 NOK)
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
              <p className="ml-8 -mt-6">
                60 minutter workshop med studenter. Det vil v??re enkel snacks og
                drikke tilgjengelig, uten ekstra kostnader. Tema for workshopen
                sendes inn innen 1. september. Vi kj??rer f??rste mann til m??lla
                prinsippet n??r det gjelder valg av tema. Vi lager p??meldingsside
                for presentasjonen. Dersom det er ledige plasser ved start
                slipper vi inn de som ??nsker, s?? lenge det er ledig plass. Dere
                er selv ansvarlige for ?? promotere deres workshop, men dere vil
                f?? mulighet til ?? benytte dere av v??re kanaler dersom dere
                ??nsker. Ta kontakt p?? mail kontakt@echokarriere.no for ?? avtale.
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
              {!offentlig ? (
                <p>Bankett (+12 000 NOK)</p>
              ) : (
                <p>Bankett (+14 500 NOK)</p>
              )}
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <p>
                <i className="ri-information-fill text-lg mt-12 mr-2 "></i>

                {!offentlig ? (
                  <p className="ml-8 -mt-6">
                    Avholdes p?? Scandic Bergen City fredag 15. september etter
                    karrieredagene. Inkluderer ett rundt bord med plass til 10
                    personer, 3-retters middag, 2 enheter til maten og
                    velkomstdrink. Prisen er den samme uansett om dere stiller
                    med f??rre enn 10 personer.
                  </p>
                ) : (
                  <p className="ml-8 -mt-6">
                    Avholdes p?? Scandic Bergen City fredag 15. september etter
                    karrieredagene. Inkluderer ett rundt bord med plass til 10
                    personer, 3-retters middag, 2 enheter til maten, 2 bonger
                    hver og velkomstdrink. Prisen er den samme uansett om dere
                    stiller med f??rre enn 10 personer.
                  </p>
                )}
              </p>
              <hr className="my-4" />
              <input
                type="checkbox"
                id="Bankett"
                name="Bankett"
                value={bankett ? "Ja" : "Nei"}
                className="h-5 w-5 accent-[#66023C]"
                onChange={() => {
                  if (offentlig) {
                    if (bankett) {
                      setBankett(false);
                      setPrice(price - 14500);
                    } else {
                      setBankett(true);
                      setPrice(price + 14500);
                    }
                  } else {
                    if (bankett) {
                      setBankett(false);
                      setPrice(price - 12000);
                    } else {
                      setBankett(true);
                      setPrice(price + 12000);
                    }
                  }
                }}
              />
              <label htmlFor="Bankett" className="ml-2 text-md -mt-4">
                Legg til bankett
              </label>
            </div>
            <label htmlFor="Leveranse" className="font-bold">
              Leveranse av stand
            </label>
            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <p>
                <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
                <p className="ml-8 -mt-6">
                  ??nsker dere ?? f?? stand sendt og levert til oss? Ved ?? velge
                  dette godtar dere at vi videresender faktura informasjon til
                  en tredjepart som er ansvarlig for frakt og lagring, som vil
                  sende dere et tilbud.
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
                Ja, jeg ??nsker ?? f?? stand sendt og levert til dere
              </label>
            </div>
            <h2 className="text-xl font-semibold">Del 6 - Annet</h2>
            <hr className="my-4" />
            <label htmlFor="Annet" className="font-bold">
              Har du noe annet p?? hjertet?
            </label>
            <textarea
              id="Annet"
              name="Annet"
              rows="4"
              className="border border-gray-300 -md p-4 mt-2 mb-6 focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"></textarea>
            <h2 className="text-xl font-semibold">Del 7 - Vilk??r</h2>
            <hr className="my-4" />
            <label htmlFor="Policy" className="font-bold">
              Aksepter vilk??r*
            </label>

            <div className="border border-gray-300 -md p-4 -pb-2 mt-2 mb-6">
              <p>
                <i className="ri-information-fill text-lg mt-12 mr-2 "></i>
                <p className="ml-8 -mt-6">
                  Ettersom det er begrenset antall plasser, vil vi praktisere
                  bindende p??melding. Dersom betalingsfristen ikke overholdes,
                  vil deres plass p?? arrangementet automatisk falle bort. Dersom
                  dere ikke m??ter, eller avbestiller etter at p??melding og
                  betaling har skjedd, vil ikke innbetalt forskudd refunderes.
                  Det samme gjelder dersom dere ikke overholder obligatoriske
                  frister for tilbakemelding. Vi er avhengig av at bedriftene
                  overholder sin del, slik at vi sammen f??r til et velfungerende
                  arrangement.
                  <br />
                  <br />
                  Du bekrefter at du ogs?? har lest gjennom vilk??rene v??re i
                  <a
                    href="https://old.echokarriere.no/files/invitation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500">
                    {" "}
                    invitasjonen
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
                Vi bekrefter at vi har lest vilk??rene og aksepterer vilk??rene
                for kontrakten.
              </label>
            </div>

            <hr className="my-4" />
          </div>
          <p>
            Deres pris:{" "}
            <span className="font-bold">
              {(standprice + price).toLocaleString("no-NO", {
                style: "currency",
                currency: "NOK",
              })}

              {leveranse ? " + frakt" : ""}
            </span>
          </p>
          <small>Prisen er oppgitt eks. mva. med forbehold om feil.</small>
          <br /> <br />
          <button
            type="submit"
            className="bg-[#33030d] hover:bg-fuchsia-900 text-white py-2 px-4"
            // Show an success message on form submition
            onClick={() => {
              if (
                Bedrift.value !== "" &&
                Organisasjonsnummer.value !== "" &&
                Kontaktperson.value !== "" &&
                Epost.value.includes("@") &&
                Epost.value.includes(".") &&
                Telefonnummer.value !== "" &&
                Fakturamail.value !== "" &&
                Fakturaperson.value !== "" &&
                Fakturaadresse.value !== "" &&
                Fakturainfo.value !== "" &&
                Dato.value !== "" &&
                Stand.value !== "" &&
                policy === true
              )
                setSuccess(true);
            }}>
            Send p??meldingsskjemaet
          </button>
          {success && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative mt-4 max-w-2xl"
              role="alert">
              <strong className="font-bold">
                Takk for p??meldingen {Kontaktperson.value}!
              </strong>{" "}
              <span className="block sm:inline">
                <br /> Vi har mottatt din p??melding og du vil innen kort tid f??
                en bekreftelse sendt til eposten {Epost.value}. Om noe er feil i
                e-posten, eller at du ikke har mottatt den innen 5 minutter, ta
                kontakt med oss p??{" "}
                <a
                  href="mailto:kontakt@echokarriere.no"
                  className="text-blue-500">
                  kontakt@echokarriere.no
                </a>
              </span>
            </div>
          )}
        </form>
      </>
    </div>
  );
}
