import React from "react";

export default function Header() {
  return (
    <header className="flex-row justify-center flex-wrap flex items-center sm:text-xl text-sm">
      <a
        href="/"
        className="sm:p-2 sm:m-8 sm:border-b-2 sm:border-r-0 sm:border-transparent sm:hover:border-white m-0 p-2"
        title="À propos de moi"
      >
        <h2>Profil</h2>
      </a>
      <a
        href="/mySkills"
        className="sm:p-2 sm:m-8 sm:border-b-2 sm:border-r-0 sm:border-transparent sm:hover:border-white m-0 p-2"
        title="Mes compétences"
      >
        <h2>Compétences</h2>
      </a>
      <a
        href="/contactMe"
        className="sm:p-2 sm:m-8 sm:border-b-2 sm:border-r-0 sm:border-transparent sm:hover:border-white m-0 p-2"
        title="Contactez-moi"
      >
        <h2>Contact</h2>
      </a>
    </header>
  );
}
