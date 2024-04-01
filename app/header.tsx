import React from "react";

export default function Header() {
  return (
    <header className="flex-row justify-ceter justify-center flex-wrap flex items-center ">
      <a
        href="/aboutMe"
        className="p-2 m-8 border-b-2 border-transparent hover:border-white"
      >
        À propos de moi
      </a>
      <a
        href="/mySkills"
        className="p-2 m-8 border-b-2 border-transparent hover:border-white"
      >
        Mes compétences
      </a>
      <a
        href="/contactMe"
        className="p-2 m-8 border-b-2 border-transparent hover:border-white"
      >
        Contactez moi
      </a>
    </header>
  );
}
