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
      <main className="sm:flex-col justify-center font-medium text-white ">
        <div className="relative bg-black">
          <div
            className="absolute inset-0 bg-fixed bg-no-repeat bg-cover border-b-4 border-t-4 border-white"
            style={{
              backgroundImage: "url(/images/background_network.webp)",
              opacity: 0.4,
            }}
          />
          <div className="relative flex flex-col items-center py-10 text-white ">
            <h3 className="p-4 border-b-2 border-white">Systèmes et réseaux</h3>
            <div className="relative flex flex-col items-center">
              <h4 className="sm:p-10 p-2 pb-0 font-bold sm:text-3xl text-xl xl:w-1/3 w-auto">
                Expertise en Réseautique : Certifications CCNAV007, CCNA et CSNA
                en Cours
              </h4>

              <p className="text-center break-auto xl:w-1/3 w-auto sm:p-10 p-2 mb-9">
                Certifié CCNAv7 et en cours de préparation pour les
                certifications CCNA et CSNA, je possède de nombreuses
                compétences en réseautique. Ma formation m&apos;a permis de
                maîtriser les principes fondamentaux des réseaux informatiques
                et de développer des compétences pratiques en configuration,
                gestion et dépannage.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-black ">
          <div
            className="absolute inset-0 bg-fixed bg-no-repeat bg-cover border-b-4 border-white"
            style={{
              backgroundImage: "url(/images/background_developpement.webp)",
              opacity: 0.4,
            }}
          />
          <div className="relative flex flex-col items-center py-10 text-white ">
            <h3 className="p-4 border-b-2 border-white">Développement</h3>
            <h4 className="sm:p-10 p-2 pb-0 font-bold sm:text-3xl text-xl xl:w-1/3 w-auto">
              Polyvalence en Développement : Maîtrise des Langages C, Java,
              Python, HTML, CSS et JavaScript
            </h4>
            <p className="text-center break-auto xl:w-1/3 w-auto sm:p-10 p-2 mb-9">
              Avec une expérience diversifiée dans les langages de programmation
              tels que le C, Java, Python, HTML, CSS et JavaScript, je possède
              une polyvalence solide en développement logiciel. Ayant travaillé
              sur une variété de projets, de la programmation système avec C à
              la création d&apos;applications web dynamiques avec JavaScript, je
              suis à l&apos;aise dans des environnements variés.
            </p>
          </div>
        </div>

        <div className="relative bg-black h-4/6">
          <div
            className="absolute inset-0 bg-fixed bg-no-repeat bg-cover border-white"
            style={{
              backgroundImage: "url(/images/background_data.webp)",
              opacity: 0.4,
            }}
          />
          <div className="relative flex flex-col items-center py-10 text-white ">
            <h3 className="p-4 border-b-2 border-white">Systèmes et réseaux</h3>
            <h4 className="sm:p-10 p-2 pb-0 font-bold sm:text-3xl text-xl xl:w-1/3 w-auto">
              Maîtrise de la Modélisation de Bases de Données et de SQL :
              Conception et Gestion de Données Efficace
            </h4>
            <p className="text-center break-auto xl:w-1/3 w-auto sm:p-10 p-2 mb-9">
              Je suis compétent dans la création, la gestion et
              l&apos;utilisation de bases de données, ainsi que dans
              l&apos;écriture de requêtes SQL. Ma capacité à concevoir des
              schémas de base de données efficaces et à écrire des requêtes
              complexes me permet de développer des solutions robustes pour
              répondre aux besoins métier.
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
