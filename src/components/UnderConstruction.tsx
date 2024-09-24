import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-gray-800">
        Page en cours de développement
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Cette page sera bientôt disponible, restez à l'écoute !
      </p>
      <div className="mt-6"></div>
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
