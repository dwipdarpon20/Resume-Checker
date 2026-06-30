import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";



export function Accordion({ title, count, icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-gray-500">{icon}</span>}
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          {count !== undefined && (
            <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
              {count}
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">{children}</div>
      </div>
    </div>
  );
}
