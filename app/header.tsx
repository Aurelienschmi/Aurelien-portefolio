import React from "react";

export default function Header() {
  return (
    <header className="sm:flex-row sm:justify-ceter sm:justify-center sm:flex-wrap sm:flex items-center flex flex-col">
      <a
        href="/"
        className="sm:p-2 sm:m-8 border-b-2 border-transparent hover:border-white m-2 p-1 "
      >
        À propos de moi
      </a>
      <a
        href="/mySkills"
        className="sm:p-2 sm:m-8 border-b-2 border-transparent hover:border-white m-2 p-1 "
      >
        Mes compétences
      </a>
      <a
        href="/contactMe"
        className="sm:p-2 sm:m-8 border-b-2 border-transparent hover:border-white m-2 p-1 "
      >
        Contactez moi
      </a>
    </header>
  );
}
