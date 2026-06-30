import { useState } from "react";
import { Copy, Check, Target, Lightbulb } from "lucide-react";



export function QuestionCard({ question, intention, answer, intentionLabel = "Why Interviewer asks" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium text-gray-900 mb-1">{question}</h4>
        </div>

        <div className="flex items-start gap-2">
          <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{intentionLabel}</p>
            <p className="text-sm text-gray-600">{intention}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Suggested Answer</p>
            <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-200">{answer}</p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Answer</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
