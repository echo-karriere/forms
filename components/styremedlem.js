import Airtable from "airtable";
import { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );

    const Navn = document.getElementById("Navn").value;
    const Epost = document.getElementById("Epost").value;
    const Årstrinn = document.getElementById("Årstrinn").value;
    const Studiested = document.getElementById("Studiested").value;
    const Studie = document.getElementById("Studie").value;
    const Tekst = document.getElementById("Tekst").value;

    base("styremedlemmer").create(
      {
        Navn: Navn,
        Epost: Epost,
        Årstrinn: Årstrinn,
        Studiested: Studiested,
        Studie: Studie,
        Tekst: Tekst,
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
            Søknad som styremedlem til ITxBERGEN
          </h1>
        </div>
        <form
          className="w-11/12 max-w-6xl my-8"
          ref={formRef}
          onSubmit={submitHandler}>
          <hr className="mb-4 max-w-2xl" />
          <div className="flex flex-col max-w-2xl text-sm mb-2">
            <label htmlFor="Navn" className="font-bold">
              Navnet ditt *
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Navn"
              type="text"
              required
            />

            <label htmlFor="Epost" className="font-bold">
              E-posten din *
            </label>
            <input
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Epost"
              type="email"
              required
            />

            <label htmlFor="Årstrinn" className="font-bold">
              Årstrinn *
            </label>
            <select
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Årstrinn"
              required>
              <option value="1. årstrinn">1. årstrinn</option>
              <option value="2. årstrinn">2. årstrinn</option>
              <option value="3. årstrinn">3. årstrinn</option>
              <option value="4. årstrinn">4. årstrinn</option>
              <option value="5. årstrinn">5. årstrinn</option>
              <option value="annet">Annet</option>
            </select>

            <label htmlFor="Studiested" className="font-bold">
              Studiested *
            </label>
            <select
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Studiested"
              required>
              <option value="Univeristet i Bergen - MatNat">
                Universitetet i Bergen - Matematisk-Naturvitenskapelig Fakultet
              </option>
              <option value="Univeristet i Bergen - SV">
                Universitetet i Bergen - Det samfunnsvitenskapelige fakultet
              </option>
              <option value="Univeristet i Bergen - Øvrige">
                Universitetet i Bergen - Øvrige
              </option>
              <option value="Høgskulen på Vestlandet - Fakultet for ingeniør- og naturvitskap">
                Høgskulen på Vestlandet - Fakultet for ingeniør- og
                naturvitenskap
              </option>
              <option value="Høgskulen på Vestlandet - Øvrige">
                Høgskulen på Vestlandet - Øvrige
              </option>
              <option value="Kristiania - Campus Hansaparken">
                Kristiania - Campus Hansaparken
              </option>
              <option value="Kristiania - Nettstudier">
                Kristiania - Nettstudier
              </option>
              <option value="Forsvarets Høgskole - Sjøkrigsskolen">
                Forsvarets Høgskole - Sjøkrigsskolen
              </option>
              <option value="Noroff - Campus Bergen">
                Noroff - Campus Bergen
              </option>
              <option value="Noroff - Nettstudier">Noroff - Nettstudier</option>
              <option value="Annet">Annet</option>
            </select>

            <label htmlFor="Studie" className="font-bold">
              Studieprogram *
            </label>
            <small>
              Unngå å bruke forkortelser, skriv navnet på studiet ditt i sin
              helhet.
            </small>
            <input
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Studie"
              type="text"
              required
            />

            <label htmlFor="Tekst" className="font-bold">
              Hvorfor vil du bli styremedlem i ITxBERGEN? *
            </label>
            <small>
              Fortell litt om hvorfor du ønsker å bli med. Motivasjoner, hva du
              kan bidra med, litt om deg selv og studiet ditt.
            </small>
            <textarea
              className="border py-2 px-4 mb-5 mt-2 max-w-2xl focus:outline-none focus:border-b-[#66023C] focus:bg-gray-200 focus:border-b-2"
              id="Tekst"
              type="text"
              rows="5"
              required
            />
          </div>
          <br /> <br />
          <button
            type="submit"
            className="bg-[#33030d] hover:bg-fuchsia-900 text-white py-2 px-4"
            // Show an success message on form submition
            onClick={() => {
              if (
                Navn.value !== "" &&
                Epost.value !== "" &&
                Årstrinn.value !== "" &&
                Studiested.value !== "" &&
                Studie.value !== "" &&
                Tekst.value !== ""
              )
                setSuccess(true);
            }}>
            Send søknaden
          </button>
          {success && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative mt-4 max-w-2xl"
              role="alert">
              <strong className="font-bold">
                Takk for din søknad {Navn.value}!
              </strong>{" "}
              <span className="block sm:inline">
                <br /> Vi vil snart sende deg en e-post til {Epost.value} med en
                bekreftelse på at vi har mottatt søknaden din, og med videre
                info om hva som skjer videre.
              </span>
            </div>
          )}
        </form>
      </>
    </div>
  );
}
