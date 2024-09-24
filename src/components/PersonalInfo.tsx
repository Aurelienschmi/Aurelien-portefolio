import React from "react";

const PersonalInfo: React.FC = () => {
  const calculateAge = (birthDate: string): number => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const openLocation = () => {
    window.open("https://www.google.com/maps?q=Hem, France", "_blank");
  };

  const age = calculateAge("2002-02-24");
  return (
    <div className="flex flex-col justify-items-center place-items-center">
      <img
        src="/images/profile.png"
        className="h-40 w-40 rounded-full -mt-20"
        alt="Profile Aurélien SCHMIEDER"
      />
      <h1 className="mt-3">Aurélien SCHMIEDER</h1>
      <div className="social-media flex flex-wrap space-x-4 m-4">
        <section className="m-4">
          <button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/aurelien-schmieder-0017391ab/"
              );
            }}
            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] m-4 me-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1.1em"
              viewBox="0 0 512 512"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
            </svg>
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              Linkedin
            </span>
          </button>
        </section>
        <section className="m-4">
          <button
            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413] m-4"
            onClick={() => {
              window.open("https://github.com/Aurelienschmi");
            }}
          >
            <svg
              className="w-5"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              GitHub
            </span>
          </button>
        </section>
      </div>
      <div className="bg-slate-100 rounded-lg p-3">
        <div className="flex border-b-2 py-2.5">
          <img
            src="/images/calendar.svg"
            className="h-10 ml-5"
            alt="icon phone"
          />
          <div>
            <p className="text-sm ml-5">
              <em>Âge</em>
            </p>
            <p className="ml-5">{age} ans</p>
          </div>
        </div>

        <div className="flex border-b-2 py-2.5">
          <button onClick={openLocation}>
            <img
              src="/images/localisation.svg"
              className="h-10 ml-5"
              alt="icon localisation"
            />
          </button>
          <div>
            <p className="text-sm ml-5">
              <em>Localisation:</em>
            </p>

            <p className="ml-5">59510, HEM</p>
          </div>
        </div>

        <div className="flex border-b-2 py-2.5">
          <a href="mailto:schmieder.aurelien@gmail.com">
            <button className="holder:bg-white">
              <img
                src="/images/email.svg"
                className="h-10 ml-5"
                alt="icon phone"
              />
            </button>
          </a>
          <div>
            <p className="text-sm ml-5">
              <em>Email:</em>
            </p>
            <p className="ml-5">schmieder.aurelien@gmail.com</p>
          </div>
        </div>

        <div className="flex py-2.5">
          <button>
            <img
              src="/images/phone.svg"
              className="h-10 ml-5"
              alt="icon phone"
            />
          </button>
          <div>
            <p className="text-sm ml-5">
              <em>Téléphone:</em>
            </p>
            <a href="tel:+33781650003" className="ml-5">
              07 81 65 00 03
            </a>
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white font-semibold rounded-lg p-2 mt-4 border hover:bg-blue-100 hover:text-black hover:border hover:border-blue-500 transition-all duration-300"
        onClick={() => {
          window.open("/images/CV-Aurelien-SCHMIEDER.pdf", "_blank");
        }}
      >
        <div className="flex items-center space-x-2">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 64 80"
        x="0px"
        y="0px"
        className="h-9 group-hover:fill-black"
          >
        <title>download</title>
        <path
          d="M27.294 5.724c-1.243 0-2.271 1.042-2.271 2.276v19.375h-6.198c-0.91 0-1.752 0.544-2.104 1.406-0.343 0.839-0.156 1.823 0.495 2.474l13.182 13.182c0.442 0.435 1.013 0.658 1.599 0.661h0.011c0.576-0.003 1.166-0.233 1.599-0.667l13.177-13.177c0.642-0.642 0.852-1.622 0.495-2.479-0.352-0.844-1.191-1.401-2.099-1.401h-6.198v-19.375c0-1.243-1.033-2.276-2.276-2.276zM29.57 10.276h4.865v19.37c0 1.243 1.033 2.276 2.276 2.276h2.979l-7.688 7.688-7.688-7.688h2.979c1.243 0 2.276-1.033 2.276-2.276zM4.706 37.724c-1.243 0-2.276 1.033-2.276 2.276v16c0 1.243 1.033 2.276 2.276 2.276h54.589c1.243 0 2.276-1.033 2.276-2.276v-16c0-1.243-1.033-2.276-2.276-2.276h-13.49c-1.243 0-2.276 1.033-2.276 2.276s1.033 2.276 2.276 2.276h11.219v11.448h-50.042v-11.448h11.214c1.243 0 2.276-1.033 2.276-2.276s-1.033-2.276-2.276-2.276z"
          fill="currentColor"
        />
          </svg>
          <p>Télécharger mon CV</p>
        </div>
      </button>
    </div>
  );
};

export default PersonalInfo;
