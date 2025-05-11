import React from "react";

function TextInputBox({ textPrint, setTextPrint, theme }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <textarea
        value={textPrint}
        onChange={(e) => setTextPrint(e.target.value)}
        rows={3}
        maxLength={120}
        placeholder="Enter text to print (max 3 lines)"
        className={`w-full border ${theme.classes.border} rounded-lg p-4 shadow-lg text-lg ${theme.classes.text} focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  );
}

export default TextInputBox;