import { useState } from "react";

export default function PgpBlock({ pgpKey }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-md shadow transition-colors ${
          copied
            ? "bg-green-600 text-white"
            : "bg-gray-700 hover:bg-gray-600 text-white"
        }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="font-mono text-xs text-red-200 bg-gray-800 p-2 rounded-lg whitespace-pre-wrap break-all max-h-30 overflow-y-auto">
        {pgpKey}
      </pre>
    </div>
  );
}
