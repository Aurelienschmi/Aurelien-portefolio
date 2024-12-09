import React from "react";
import { useTranslation } from "react-i18next";
interface PopupProps {
  title: string;
  message: string;
  image?: string;
  progressBar?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, message, image, progressBar, isOpen, onClose }) => {
  const { t } = useTranslation("global");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        {image && <img src={image} alt="Popup" className="mb-4" />}
        {progressBar && <div className="mb-4">{progressBar}</div>}
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          <p>{t("popUp.Close")}</p>
        </button>
      </div>
    </div>
  );
};

export default Popup;