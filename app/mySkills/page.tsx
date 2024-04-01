import Image from "next/image";
import Footer from "../footer";
import Header from "../header";

export default function Home() {
  function About() {
    return <div>About</div>;
  }

  return (
    <div>
      <div className="bg-black bg-opacity-90 text-white ">
        <Header />
      </div>
      <main className="flex-col justify-center font-medium text-white h-screen ">
        <div className="relative bg-black h-4/6">
          <div
            className="absolute inset-0 bg-fixed bg-no-repeat bg-cover border-b-4 border-t-4 border-white "
            style={{
              backgroundImage: "url(/images/background_network.jpg)",
              opacity: 0.5,
            }}
          />
          <div className="relative flex flex-col items-center py-10 text-white">
            <h2 className="p-4 border-b-2 border-white">Systèmes et réseaux</h2>
            <h3 className="p-10 pb-0 text-3xl w-1/3">
              Expertise en Réseautique : Certifications CCNAV007, CCNA et CSNA
              en Cours
            </h3>
            <p className="text-center break-auto p-10 w-1/3">
              Certifié CCNAv7 et en cours de préparation pour les certifications
              CCNA et CSNA, je possède une solide expertise en réseautique. Ma
              formation m&aposa permis de maîtriser les principes fondamentaux des
              réseaux informatiques et de développer des compétences pratiques
              en configuration, gestion et dépannage.
            </p>
          </div>
        </div>
        <div className="relative bg-black h-4/6">
          <div
            className="absolute inset-0 bg-fixed bg-no-repeat bg-cover border-b-4 border-white"
            style={{
              backgroundImage: "url(/images/background_developpement.jpg)",
              opacity: 0.5,
            }}
          />
          <div className="relative flex flex-col items-center py-10 text-white">
            <h2 className="p-4 border-b-2 border-white">Développement</h2>
            <h3 className="p-10 pb-0 text-3xl w-1/3">
              Polyvalence en Développement : Maîtrise des Langages C, Java,
              Python, HTML, CSS et JavaScript
            </h3>
            <p className="text-center break-all p-10 w-1/3">
              Avec une expérience diversifiée dans les langages de programmation
              tels que le C, Java, Python, HTML, CSS et JavaScript, je possède
              une polyvalence solide en développement logiciel. Ayant travaillé
              sur une variété de projets, de la programmation système avec C à
              la création d&aposapplications web dynamiques avec JavaScript, je suis
              à l&aposaise dans des environnements variés.
            </p>
          </div>
        </div>

        <div className="relative bg-black h-4/6">
          <div
            className="absolute inset-0 bg-fixed bg-no-repeat bg-cover border-white"
            style={{
              backgroundImage: "url(/images/background_data.jpg)",
              opacity: 0.5,
            }}
          />
          <div className="relative flex flex-col items-center py-10 text-white">
            <h2 className="p-4 border-b-2 border-white">Systèmes et réseaux</h2>
            <h3 className="p-10 pb-0 text-3xl w-1/3">
              Maîtrise de la Modélisation de Bases de Données et de SQL :
              Conception et Gestion de Données Efficace
            </h3>
            <p className="text-center break-all p-10 w-1/3">
              Je suis compétent dans la création, la gestion et l&aposutilisation de
              bases de données, ainsi que dans l&aposécriture de requêtes SQL. Ma
              capacité à concevoir des schémas de base de données efficaces et à
              écrire des requêtes complexes me permet de développer des
              solutions robustes pour répondre aux besoins métier.
            </p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
