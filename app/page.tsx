import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex-row flex justify-evenly flex justify-center flexx flex-wrap flex items-center border-b-4 border-slate-50">
        <a className="nx-cursor-default dark:nx-text-gray-400 nx-text-gray-600 m-7 ">About Me</a>
        <a href="/app/MySkills.tsx" className="m-10">My skills</a>
        <a href="/ContactMe.tsx" className="m-10">Contact me</a>
      </header>
      <main className="flex-col flex p-8 items-center justify-center bg-slate-100 font-medium text-black">
        <h1>Aurélien SCHMIEDER</h1>
        <Image className="m-10 rounded-lg border-4"
          src="/images/profile.jpg"
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <p>
          I'm a software engineer and a web developer. I'm passionate about
          technology and I love to learn new things.
        </p>
    
      </main>
    
    
    <footer className="mt-40 float-right">
      <div>
        <p>Aurélien SCHMIEDER.</p>
      </div>
    </footer>
    </div>
    
  );
}
