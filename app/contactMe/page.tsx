import Footer from "../footer";
import Header from "../header";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-500 text-white">
      <Header />
      <main className="flex p-20 items-center justify-center items-baseline bg-gradient-to-r from-black to-gray-500 font-medium text-white h-auto ">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfPxjUFOO0kcR-gOetzN9KUb1oAebuYi7yTOj2UH27obiHNSQ/viewform?embedded=true"
          width="580"
          height="580"
        >
          Chargement…
        </iframe>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
