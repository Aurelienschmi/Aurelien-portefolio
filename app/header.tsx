import React from "react";

export default function Header() {
  return (
    <header className="flex-row justify-ceter justify-center flex-wrap flex items-center ">
      <a
        href="/"
        className="p-2 m-8 border-b-2 border-transparent hover:border-white sm: m-2 p-1 "
      >
        À propos de moi
      </a>
      <a
        href="/mySkills"
        className="p-2 m-8 border-b-2 border-transparent hover:border-white sm: m-2 p-1"
      >
        Mes compétences
      </a>
      <a
        href="/contactMe"
        className="p-2 m-8 border-b-2 border-transparent hover:border-white sm: p-1 m-2"
      >
        Contactez moi
      </a>
    </header>
  );
}
