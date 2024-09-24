import React from "react";

interface ProgressBarProps {
  percentage: number;
  color: string;
  text: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color, text }) => {
  return (
    <div className="space-y-4">
      <div>
        {text}
        <div className="bg-gray-200 dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
          <div
            className={`absolute top-0 left-0 h-full ${color}`}
            style={{ width: `${percentage}%` }}
          >
            <span className={`absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-black`}>
              <span className={`absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm ${color}`}></span>
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;