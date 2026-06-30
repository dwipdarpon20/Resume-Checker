import { ReactNode } from "react";


export function StatCard({ label, value, icon }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
    </div>
  );
}
