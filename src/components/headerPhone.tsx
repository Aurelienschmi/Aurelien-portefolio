import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext.tsx";
import { Analytics } from "@vercel/analytics/react";

interface headerPhoneProps {
  setAbout: (value: boolean) => void;
  setResume: (value: boolean) => void;
  setWorks: (value: boolean) => void;
  setContact: (value: boolean) => void;
}
const HeaderPhone: React.FC<headerPhoneProps> = () => {
  const { t } = useTranslation("global");
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const {
    about,
    resume,
    works,
    contact,
    setAbout,
    setResume,
    setWorks,
    setContact,
  } = context;

  return (
    <div className="flex justify-around gap-4 items-center px-4 py-1 bg-white rounded-t-[15px] ring-1 ring-white dark:bg-black dark:ring-slate-800">
      <div className="relative group hover:cursor-pointer p-2 rounded-full transition-all duration-500">
        <button
          className={`${
            about ? "text-blue-500" : "hover:text-blue-500 "
          } transition-colors duration-300`}
          onClick={() => {
            setAbout(true);
            setResume(false);
            setWorks(false);
            setContact(false);
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              about ? "text-blue-500" : "text-black dark:text-white"
            }`}
          >
            <path
              d="M15.0013 0C10.482 0 6.81914 3.50348 6.81914 7.82609V9.13044C6.81914 13.453 10.482 16.9565 15.0013 16.9565C19.5206 16.9565 23.1835 13.453 23.1835 9.13044V7.82609C23.1835 3.50348 19.5206 0 15.0013 0ZM14.9987 20.8696C9.53569 20.8696 2.52628 23.6959 0.509366 26.2041C-0.737054 27.755 0.44947 30 2.49366 30H27.5063C29.5505 30 30.7371 27.755 29.4906 26.2041C27.4737 23.6972 20.4616 20.8696 14.9987 20.8696Z"
              fill="currentColor"
            ></path>
          </svg>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-black bg-white dark:text-white dark:bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 border-2 border-blue-500">
            <p>{t("header.About")}</p>
          </div>
        </button>
      </div>

      <div className="relative group hover:cursor-pointer p-2 rounded-full transition-all duration-500">
        <button
          className={`${
            resume ? "text-blue-500" : "hover:text-blue-500"
          } transition-colors duration-300`}
          onClick={() => {
            setAbout(false);
            setResume(true);
            setWorks(false);
            setContact(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 100 100"
            strokeWidth="2"
            className={`${
              resume ? "text-blue-500" : "text-black dark:text-white"
            } fill-current h-8 w-8`}
          >
            <path d="m84.57 19.078-14.801-14.801c-0.17969-0.17578-0.41797-0.27734-0.66797-0.27734h-48.312c-3.1094 0-5.6289 2.5312-5.6289 5.6289v80.73c0 3.1094 2.5312 5.6289 5.6289 5.6289h58.422c3.1094 0 5.6289-2.5312 5.6289-5.6289v-70.621c0-0.25-0.10156-0.48828-0.26953-0.66016zm-14.531-11.867 11.602 11.602-7.8398-0.003906c-2.0703 0-3.7617-1.6797-3.7617-3.7617zm9.1719 86.91h-58.422c-2.0703 0-3.7617-1.6797-3.7617-3.7617l0.003906-80.73c0-2.0703 1.6797-3.7617 3.7617-3.7617h47.371v9.1719c0 3.1094 2.5312 5.6289 5.6289 5.6289h9.1719v69.691c-0.003906 2.082-1.6836 3.7617-3.7539 3.7617zm-29.211-43.18c9.3789 0 17-7.6289 17-17 0-9.3789-7.6289-17-17-17-9.3789 0-17 7.6289-17 17 0 9.3672 7.6211 17 17 17zm-10.191-5.8633c1.25-4.8203 5.1016-7.7891 10.191-7.7891s8.9492 2.9688 10.191 7.7891c-2.6914 2.4609-6.2617 3.9805-10.191 3.9805s-7.5-1.5078-10.191-3.9805zm10.191-26.27c8.3398 0 15.129 6.7891 15.129 15.129 0 3.6406-1.2891 6.9805-3.4414 9.5898-0.73828-2.1406-1.9805-3.9688-3.6406-5.3594-2.1602-1.8086-4.9492-2.7617-8.0508-2.7617-3.1016 0-5.8789 0.94922-8.0508 2.7617-1.6602 1.3789-2.8906 3.2188-3.6406 5.3594-2.1484-2.6094-3.4414-5.9609-3.4414-9.5898 0.007813-8.3359 6.7969-15.129 15.137-15.129zm0 15.91c3.5703 0 6.4688-2.8984 6.4688-6.4688s-2.8984-6.4688-6.4688-6.4688-6.4688 2.8984-6.4688 6.4688 2.8984 6.4688 6.4688 6.4688zm0-11.059c2.5312 0 4.5898 2.0586 4.5898 4.5898s-2.0586 4.5898-4.5898 4.5898-4.5898-2.0586-4.5898-4.5898 2.0586-4.5898 4.5898-4.5898zm25.602 33.551c0 0.51953-0.42187 0.94141-0.94141 0.94141l-49.32-0.003906c-0.51953 0-0.94141-0.42188-0.94141-0.94141s0.42187-0.94141 0.94141-0.94141h49.32c0.51953 0.003906 0.94141 0.42578 0.94141 0.94531zm-11.273 24.918c0 0.51953-0.42188 0.94141-0.94141 0.94141h-38.047c-0.51953 0-0.94141-0.42187-0.94141-0.94141 0-0.51953 0.42187-0.94141 0.94141-0.94141h38.051c0.51953 0.003906 0.9375 0.42188 0.9375 0.94141zm11.273-16.609c0 0.51953-0.42187 0.94141-0.94141 0.94141h-49.32c-0.51953 0-0.94141-0.42188-0.94141-0.94141s0.42187-0.94141 0.94141-0.94141h49.32c0.51953 0 0.94141 0.42188 0.94141 0.94141zm0 8.3008c0 0.51953-0.42187 0.94141-0.94141 0.94141h-49.32c-0.51953 0-0.94141-0.42188-0.94141-0.94141 0-0.51953 0.42187-0.94141 0.94141-0.94141h49.32c0.51953 0 0.94141 0.42188 0.94141 0.94141z" />
          </svg>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-black bg-white dark:text-white dark:bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 border-2 border-blue-500">
            <p>{t("header.Resume")}</p>
          </div>
        </button>
      </div>

      <div className="relative group hover:cursor-pointer p-2 rounded-full transition-all duration-500">
        <button
          onClick={() => {
            setAbout(false);
            setResume(false);
            setWorks(true);
            setContact(false);
          }}
          className={`${
            works ? "text-blue-500" : "hover:text-blue-500"
          } transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Ebene 1"
            viewBox="0 0 50 45"
            x="0px"
            y="0px"
            fill="none"
            className={`${
              works ? "text-blue-500" : "text-black dark:text-white"
            } fill-current h-10 w-10`}
          >
            <defs></defs>
            <path d="M45.99,13.84a1.14793,1.14793,0,0,0-.02-.21.58169.58169,0,0,0-.03-.19,2.2917,2.2917,0,0,0-.06994-.28,3.00667,3.00667,0,0,0-.37-.82.869.869,0,0,0-.07007-.1,2.06408,2.06408,0,0,0-.13989-.17,3.06289,3.06289,0,0,0-.36011-.36c-.05993-.05-.10986-.1-.17993-.15l-.09009-.06a3.00122,3.00122,0,0,0-.81982-.37,2.2917,2.2917,0,0,0-.28-.07.58258.58258,0,0,0-.19006-.03,1.14838,1.14838,0,0,0-.21009-.02A1.03289,1.03289,0,0,0,43,11H31V9a2.996,2.996,0,0,0-3-3H20a2.996,2.996,0,0,0-3,3v2H5a1.03289,1.03289,0,0,0-.15991.01,1.14838,1.14838,0,0,0-.21009.02.58258.58258,0,0,0-.19006.03,2.2917,2.2917,0,0,0-.28.07,3.00122,3.00122,0,0,0-.81982.37.86584.86584,0,0,0-.1001.07,2.06894,2.06894,0,0,0-.16992.14,3.06289,3.06289,0,0,0-.36011.36c-.05005.06-.1.11-.1499.18L2.5,12.34a3.00667,3.00667,0,0,0-.37.82,2.2917,2.2917,0,0,0-.06994.28.58169.58169,0,0,0-.03.19,1.14793,1.14793,0,0,0-.02.21A1.03546,1.03546,0,0,0,2,14V40a1.00291,1.00291,0,0,0,1,1H45a1.00291,1.00291,0,0,0,1-1V14A1.03546,1.03546,0,0,0,45.99,13.84ZM19,9a1.00291,1.00291,0,0,1,1-1h8a1.00291,1.00291,0,0,1,1,1v2H19ZM4,14.02c0-.03.01-.06.01-.09a.52774.52774,0,0,0,.01-.13,1.25312,1.25312,0,0,1,.1499-.36c.02-.03.05-.06.07007-.09l.03-.03.03-.03a1.5723,1.5723,0,0,1,.11987-.11c.01,0,.02-.01.03-.02.06006-.03.11011-.06.16-.08a.6393.6393,0,0,1,.16-.06h.03A.3416.3416,0,0,0,4.9,13.01.48687.48687,0,0,0,5.02,13H42.98c.03,0,.06006.01.09009.01A.52983.52983,0,0,0,43.2,13.02a1.25247,1.25247,0,0,1,.36011.15c.03.02.05994.05.09.07l.02991.03.03.03a1.552,1.552,0,0,1,.11011.12c0,.01.01.02.02.03.02991.06.05993.11.07983.16a.63871.63871,0,0,1,.06006.16v.03a.33963.33963,0,0,0,.01.1.48615.48615,0,0,0,.01.12V20a5.00181,5.00181,0,0,1-5,5H27.5V24a3.00879,3.00879,0,0,0-3-3h-1a3.00879,3.00879,0,0,0-3,3v1H9a5.00181,5.00181,0,0,1-5-5ZM22.5,24a1.00291,1.00291,0,0,1,1-1h1a1.00291,1.00291,0,0,1,1,1v4a1.00291,1.00291,0,0,1-1,1h-1a1.00291,1.00291,0,0,1-1-1ZM44,39H4V24.89A6.96976,6.96976,0,0,0,9,27H20.5v1a3.00883,3.00883,0,0,0,3,3h1a3.00883,3.00883,0,0,0,3-3V27H39a6.96976,6.96976,0,0,0,5-2.11Z" />
            <path d="M43.98,13.8v-.03a.63871.63871,0,0,0-.06006-.16A.6027.6027,0,0,1,43.98,13.8ZM4.61,13.08a.60353.60353,0,0,1,.19006-.06H4.77A.6393.6393,0,0,0,4.61,13.08Z" />
          </svg>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-black bg-white dark:text-white dark:bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 border-2 border-blue-500">
            <p>{t("header.Works")}</p>
          </div>
        </button>
      </div>

      <div className="relative group hover:cursor-pointer p-2 rounded-full transition-all duration-500">
        <button
          onClick={() => {
            setAbout(false);
            setResume(false);
            setWorks(false);
            setContact(true);
          }}
          className={`${
            contact ? "text-blue-500" : "hover:text-blue-500"
          } transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 25"
            fill="none"
            className={`${
              contact ? "text-blue-500" : "text-black dark:text-white"
            } fill-current h-10 w-10`}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 3.5C6.17157 3.5 5.5 4.17157 5.5 5V7.5H5C4.72386 7.5 4.5 7.72386 4.5 8C4.5 8.27614 4.72386 8.5 5 8.5H5.5V8.66667V11.5H5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H5.5V15.5H5C4.72386 15.5 4.5 15.7239 4.5 16C4.5 16.2761 4.72386 16.5 5 16.5H5.5V19C5.5 19.8284 6.17157 20.5 7 20.5H17C17.8284 20.5 18.5 19.8284 18.5 19V8.66667V5C18.5 4.17157 17.8284 3.5 17 3.5H7ZM6.5 16.5V19C6.5 19.2761 6.72386 19.5 7 19.5H17C17.2761 19.5 17.5 19.2761 17.5 19V8.66667V5C17.5 4.72386 17.2761 4.5 17 4.5H7C6.72386 4.5 6.5 4.72386 6.5 5V7.5H7C7.27614 7.5 7.5 7.72386 7.5 8C7.5 8.27614 7.27614 8.5 7 8.5H6.5V8.66667V11.5H7C7.27614 11.5 7.5 11.7239 7.5 12C7.5 12.2761 7.27614 12.5 7 12.5H6.5V15.5H7C7.27614 15.5 7.5 15.7239 7.5 16C7.5 16.2761 7.27614 16.5 7 16.5H6.5ZM12.3125 9.5C11.8983 9.5 11.5625 9.83579 11.5625 10.25C11.5625 10.6642 11.8983 11 12.3125 11C12.7267 11 13.0625 10.6642 13.0625 10.25C13.0625 9.83579 12.7267 9.5 12.3125 9.5ZM10.5625 10.25C10.5625 9.2835 11.346 8.5 12.3125 8.5C13.279 8.5 14.0625 9.2835 14.0625 10.25C14.0625 11.2165 13.279 12 12.3125 12C11.346 12 10.5625 11.2165 10.5625 10.25ZM12.3125 12.5C11.2516 12.5 10.2342 12.9214 9.48407 13.6716C8.86946 14.2862 8.47554 15.0802 8.35324 15.9305C8.2636 16.5537 8.78304 17 9.3125 17H12.3125H15.3125C15.842 17 16.3614 16.5537 16.2718 15.9305C16.1495 15.0802 15.7555 14.2862 15.1409 13.6716C14.3908 12.9214 13.3734 12.5 12.3125 12.5ZM10.1912 14.3787C10.7538 13.8161 11.5169 13.5 12.3125 13.5C13.1081 13.5 13.8712 13.8161 14.4338 14.3787C14.8772 14.822 15.1674 15.3898 15.2706 16H12.3125H9.35444C9.45758 15.3898 9.74785 14.822 10.1912 14.3787Z"
            />
          </svg>
        </button>

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-black bg-white dark:text-white dark:bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 border-2 border-blue-500">
          <p>{t("header.Contact")}</p>
        </div>
        <Analytics />
      </div>
    </div>
  );
};

export default HeaderPhone;
