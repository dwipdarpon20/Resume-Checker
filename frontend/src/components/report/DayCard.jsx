import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

export function DayCard({ day, focus, tasks, isLast = false }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
      {!isLast && <div className="absolute left-0 top-0 w-px h-full bg-gray-200" />}

      <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />

      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 mb-4 ml-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            Day {day}
          </span>
        </div>
        <h4 className="text-base font-medium text-gray-900 mb-3">{focus}</h4>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
