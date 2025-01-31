import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";

const PersonalInfo: React.FC = () => {
  const [birthDateIsHovered, setBirthDateIsHovered] = useState(false);
  const [locationIsHovered, setLocationIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);
  const [phoneIsHovered, setPhoneIsHovered] = useState(false);

  const { t } = useTranslation("global");

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
    <div className="flex flex-col justify-items-center place-items-center text-black dark:text-white">
      <img
        src="/images/profile.png"
        className="h-40 w-40 rounded-full -mt-20"
        alt="Profile Aurélien SCHMIEDER"
      />
      <h1 className="mt-3 text-2xl font-bold">Aurélien SCHMIEDER</h1>
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
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-3 w-full">
        <div className="flex border-b-2 dark:border-zinc-600 py-2.5 ml-5">
          <button
            className="bg-white dark:bg-black m-1 rounded-lg p-1 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-600"
            onMouseEnter={() => setBirthDateIsHovered(true)}
            onMouseLeave={() => setBirthDateIsHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -5.0 110.0 120.0"
              fill={birthDateIsHovered ? "white" : "#C17CEB"}
              className="h-8 w-8"
            >
              <path d="m89.344 10.055h-9.1367v-5.3242c0-0.86328-0.69922-1.5625-1.5625-1.5625s-1.5625 0.69922-1.5625 1.5625v5.3242h-15.973v-5.3242c0-0.86328-0.69922-1.5625-1.5625-1.5625s-1.5625 0.69922-1.5625 1.5625v5.3242h-15.973v-5.3242c0-0.86328-0.69922-1.5625-1.5625-1.5625s-1.5625 0.69922-1.5625 1.5625v5.3242h-15.973v-5.3242c0-0.86328-0.69922-1.5625-1.5625-1.5625-0.86328 0-1.5625 0.69922-1.5625 1.5625v5.3242h-9.1367c-4.1523 0-7.5312 3.3789-7.5312 7.5312v71.758c0 4.1523 3.3789 7.5312 7.5312 7.5312h78.688c4.1523 0 7.5312-3.3789 7.5312-7.5312l0.003906-71.758c0-4.1523-3.3789-7.5312-7.5312-7.5312zm4.4062 79.289c0 2.4297-1.9766 4.4062-4.4062 4.4062h-78.688c-2.4297 0-4.4062-1.9766-4.4062-4.4062v-71.758c0-2.4297 1.9766-4.4062 4.4062-4.4062h9.1367v5.3242c0 0.86328 0.69922 1.5625 1.5625 1.5625s1.5625-0.69922 1.5625-1.5625v-5.3242h15.973v5.3242c0 0.86328 0.69922 1.5625 1.5625 1.5625s1.5625-0.69922 1.5625-1.5625v-5.3242h15.973v5.3242c0 0.86328 0.69922 1.5625 1.5625 1.5625s1.5625-0.69922 1.5625-1.5625v-5.3242h15.973v5.3242c0 0.86328 0.69922 1.5625 1.5625 1.5625 0.86328 0 1.5625-0.69922 1.5625-1.5625v-5.3242h9.1367c2.4297 0 4.4062 1.9766 4.4062 4.4062v71.758z" />
              <path d="m27.391 34.836h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m46.441 34.836h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m65.488 34.836h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m84.539 34.836h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m27.391 53.359h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m46.441 53.359h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m65.488 53.359h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m84.539 53.359h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.684h-8.8047v-8.5586h8.8047z" />
              <path d="m27.391 71.883h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.68h-8.8047v-8.5586h8.8047z" />
              <path d="m46.441 71.883h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.68h-8.8047v-8.5586h8.8047z" />
              <path d="m65.488 71.883h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.68h-8.8047v-8.5586h8.8047z" />
              <path d="m84.539 71.883h-11.93c-0.86328 0-1.5625 0.69922-1.5625 1.5625v11.684c0 0.86328 0.69922 1.5625 1.5625 1.5625h11.93c0.86328 0 1.5625-0.69922 1.5625-1.5625v-11.684c0-0.86328-0.69922-1.5625-1.5625-1.5625zm-1.5625 11.68h-8.8047v-8.5586h8.8047z" />
            </svg>
          </button>

          <div>
            <p className="text-sm ml-5">
              <em>{t("personnalInfo.Age")}</em>
            </p>
            <p className="ml-5">{age} ans</p>
          </div>
        </div>

        <div className="flex border-b-2 dark:border-zinc-600 py-2.5 ml-5">
          <button
            onClick={openLocation}
            className="bg-white dark:bg-black m-1 rounded-lg p-1 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-600"
            onMouseEnter={() => setLocationIsHovered(true)}
            onMouseLeave={() => setLocationIsHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={locationIsHovered ? "white" : "#FD7590"}
              className="h-8 h-8"
            >
              <path d="M11,11.9V18h2v-6.1c2.3-0.5,4-2.5,4-4.9c0-2.8-2.2-5-5-5S7,4.2,7,7C7,9.4,8.7,11.4,11,11.9z M12,4c1.7,0,3,1.3,3,3  s-1.3,3-3,3S9,8.7,9,7S10.3,4,12,4z M22,16.8c-0.1-0.7-0.5-1.3-0.9-1.7c-0.9-1-2.5-1.6-4.3-2.1L16.3,15c1.6,0.4,2.8,1,3.3,1.5  c0.3,0.3,0.4,0.5,0.4,0.6c0,0.1,0,0.3-0.1,0.5c-0.3,0.5-1.2,1.1-2.7,1.6C15.7,19.7,13.9,20,12,20c-1.9,0-3.7-0.3-5.2-0.7  c-1.5-0.5-2.4-1.1-2.7-1.6C4,17.5,4,17.3,4,17.2c0-0.1,0.1-0.4,0.4-0.6C5,15.9,6.1,15.4,7.7,15L7.3,13c-1.8,0.4-3.3,1.1-4.3,2.1  c-0.5,0.5-0.8,1.1-0.9,1.7c-0.1,0.7,0.1,1.3,0.4,1.9c0.7,1.1,2.1,1.9,3.8,2.4C7.9,21.7,9.9,22,12,22c2.1,0,4.1-0.3,5.8-0.8  c1.6-0.5,3-1.3,3.8-2.4C21.9,18.2,22.1,17.5,22,16.8z" />
            </svg>
          </button>
          <div>
            <p className="text-sm ml-5">
              <em>{t("personnalInfo.Localisation")}</em>
            </p>

            <p className="ml-5">59510, HEM</p>
          </div>
        </div>

        <div className="flex border-b-2 dark:border-zinc-600 ml-5">
          <a href="mailto:schmieder.aurelien@gmail.com">
            <button
              className="bg-white dark:bg-black m-1 rounded-lg p-1 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-600"
              onMouseEnter={() => setEmailIsHovered(true)}
              onMouseLeave={() => setEmailIsHovered(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 10 100 80"
                fill={emailIsHovered ? "white" : "#6AB5B9"}
                className="h-8 w-8"
              >
                <path d="m88.66 82.555h-77.32c-4.2617-0.003907-7.7109-3.4531-7.7188-7.7148v-49.68c0.007812-4.2617 3.457-7.7109 7.7188-7.7148h77.32c4.2617 0.003907 7.7109 3.4531 7.7188 7.7148v49.68c-0.007812 4.2617-3.457 7.7109-7.7188 7.7148zm-74.391-6.25h71.457l-21.637-21.863-8.6016 8.6953c-3.0273 3.0273-7.9336 3.0312-10.965 0.011719l-8.6133-8.707zm54.219-26.305 21.637 21.867 0.003906-43.734zm-58.617-21.867v43.734l21.641-21.867zm4.4023-4.4375 34.68 35.047c0.58594 0.57031 1.5234 0.56641 2.1055-0.015626l34.668-35.031z" />
                <text
                  x="0.0"
                  y="117.5"
                  font-size="5.0"
                  font-weight="bold"
                  font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                ></text>
                <text
                  x="0.0"
                  y="122.5"
                  font-size="5.0"
                  font-weight="bold"
                  font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                ></text>
              </svg>
            </button>
          </a>
          <div className="w-full box-border overflow-hidden max-w-full break-words">
            <p className="text-sm ml-5">
              <em>{t("personnalInfo.Email")}</em>
            </p>
            <p className="whitespace-pre-wrap-sm ml-5">
              schmieder.aurelien@gmail.com
            </p>
          </div>
        </div>

        <div className="flex py-2.5 ml-5">
          <a href="tel:+33781650003">
            <button
              className="bg-white dark:bg-black m-1 rounded-lg p-1 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-600"
              onMouseEnter={() => setPhoneIsHovered(true)}
              onMouseLeave={() => setPhoneIsHovered(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="50 0 240 350"
                x="0px"
                y="0px"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill={phoneIsHovered ? "white" : "#E93B81"}
                stroke={phoneIsHovered ? "white" : "#E93B81"}
                stroke-width="5"
                className="h-8 w-8"
              >
                <defs>
                  <style type="text/css"></style>
                </defs>
                <g>
                  <path d="M101.67 10.02l130 0c9.15,0 17.48,3.75 23.52,9.78 6.06,6.07 9.81,14.39 9.81,23.55l0 246.62c0,9.15 -3.75,17.48 -9.78,23.52 -6.07,6.06 -14.39,9.81 -23.55,9.81l-130 0c-9.15,0 -17.48,-3.75 -23.52,-9.78 -6.06,-6.07 -9.81,-14.39 -9.81,-23.55l0 -246.62c0,-9.15 3.75,-17.48 9.78,-23.52 6.07,-6.06 14.39,-9.81 23.55,-9.81zm65 237.2c5.81,0 11.09,2.36 14.9,6.17 3.81,3.81 6.17,9.08 6.17,14.9 0,5.82 -2.36,11.09 -6.17,14.9l-0.46 0.42c-3.78,3.57 -8.87,5.75 -14.44,5.75 -5.79,0 -11.05,-2.36 -14.87,-6.17l-0.04 -0.04c-3.8,-3.82 -6.16,-9.07 -6.16,-14.85 0,-5.79 2.37,-11.06 6.19,-14.88 3.8,-3.83 9.06,-6.19 14.88,-6.19zm5.47 15.6c-1.4,-1.4 -3.34,-2.27 -5.47,-2.27 -2.14,0 -4.07,0.87 -5.47,2.27 -1.41,1.38 -2.27,3.32 -2.27,5.47 0,2.15 0.86,4.09 2.24,5.47 1.41,1.41 3.35,2.27 5.5,2.27 2.02,0 3.85,-0.76 5.21,-1.99l0.26 -0.28c1.4,-1.4 2.27,-3.33 2.27,-5.47 0,-2.13 -0.87,-4.07 -2.27,-5.47zm-19.67 -213.46c-3.67,0 -6.64,-2.97 -6.64,-6.64 0,-3.67 2.97,-6.64 6.64,-6.64l28.39 -0.01c3.67,0 6.64,2.97 6.64,6.64 0,3.67 -2.97,6.64 -6.64,6.64l-28.39 0.01zm79.19 -26.01l-130 0c-5.5,0 -10.51,2.25 -14.13,5.87 -3.61,3.62 -5.87,8.63 -5.87,14.13l0 246.62c0,5.5 2.25,10.51 5.87,14.13 3.62,3.61 8.63,5.87 14.13,5.87l130 0c5.5,0 10.51,-2.25 14.13,-5.87 3.61,-3.62 5.87,-8.63 5.87,-14.13l0 -246.62c0,-5.5 -2.25,-10.51 -5.87,-14.13 -3.62,-3.61 -8.63,-5.87 -14.13,-5.87z" />
                </g>
              </svg>
            </button>
          </a>
          <div>
            <p className="text-sm ml-5">
              <em>{t("personnalInfo.Phone")}</em>
            </p>
            <p className="ml-5">07 81 65 00 03</p>
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white font-semibold rounded-lg p-2 mt-8 border hover:bg-blue-100 hover:text-black hover:border hover:border-blue-500 transition-all duration-300 dark:border-blue-500 dark:hover:text-white dark:hover:bg-zinc-800"
        onClick={() => {
          window.open("/images/cv-aurelien-schmieder.pdf", "_blank");
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
          <p>{t("personnalInfo.Cv")}</p>
        </div>
      </button>
    </div>
  );
};

export default PersonalInfo;
