import { useEffect, useState } from "react";


export function ProgressRing({ progress, size = 200, strokeWidth = 12 }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedProgress / 100) * circumference;

  const getColor = () => {
    if (progress >= 90) return { stroke: "#10b981", text: "text-emerald-600" };
    if (progress >= 70) return { stroke: "#eab308", text: "text-yellow-500" };
    return { stroke: "#ef4444", text: "text-red-500" };
  };

  const getStatus = () => {
    if (progress >= 90) return "Excellent Match";
    if (progress >= 70) return "Good Match";
    return "Needs Improvement";
  };

  const color = getColor();

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress), 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color.stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className={`text-5xl font-bold ${color.text}`}>{animatedProgress}%</span>
        <span className="text-sm text-gray-500 mt-1">{getStatus()}</span>
      </div>
    </div>
  );
}
