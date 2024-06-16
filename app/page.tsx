import Image from "next/image";
import Footer from "./footer";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-500 text-white">
      <Header />
      <main className="sm:flex items-center sm:justify-center sm:flex-row flex flex-col-reverse bg-gradient-to-r from-black to-gray-500 font-medium text-white sm:h-screen h-auto">
        <div className="flex-col flex justify-between	flex items-baseline sm:-mt-20 sm:w-1/3 w-11/12">
          <div className="">
            <p className="m-3 sm:text-2xl text-lg text-gray-300">
              Salut! Je suis
            </p>
            <h1 className="m-3 sm:text-4xl text-2xl capitalize font-bold">
              Aurélien Schmieder, étudiant à Enigma, Lille
            </h1>
            <p className="m-3 font-light text-sm">
              Jeune de 22 ans, je suis passionné d&apos;informatique,
              particulièrement dans les systèmes et réseaux. Adepte de rugby et
              de musculation, je trouve un équilibre entre l&apos;effort
              physique et mental. Je suis motivé pour contribuer à des projets
              innovants et enrichir mes compétences.
            </p>
          </div>

          <a
            href="../images/CV-Aurelien-SCHMIEDER.pdf"
            target="_blank"
            aria-label="CV"
          >
            <button
              className="flex flex-col p-3 m-5 text-white rounded-full border-2 border-white hover:border-transparent font-bold uppercase"
              title="Téléchargez mon CV !"
              aria-label="Download CV"
            >
              Télécharger CV
            </button>
          </a>
        </div>
        <div className="m-10 sm:-mt-20 rounded-lg border-4 border-white border-opacity-50">
          <Image
            src="/images/profile.webp"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
