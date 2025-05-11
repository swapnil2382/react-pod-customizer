import React from "react";

function SizingTab({ register, theme }) {
  return (
    <div className="space-y-6">
      <div>
        <label className={`block font-medium ${theme.classes.text} mb-2`}>Height (cm)</label>
        <input
          type="number"
          {...register("height", { valueAsNumber: true })}
          className={`w-full border ${theme.classes.border} rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500`}
          placeholder="180"
        />
      </div>
      <div>
        <label className={`block font-medium ${theme.classes.text} mb-2`}>Weight (kg)</label>
        <input
          type="number"
          {...register("weight", { valueAsNumber: true })}
          className={`w-full border ${theme.classes.border} rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500`}
          placeholder="80"
        />
      </div>
      <div>
        <label className={`block font-medium ${theme.classes.text} mb-2`}>Build</label>
        <select
          {...register("build")}
          className={`w-full border ${theme.classes.border} rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500`}
        >
          <option value="lean">Lean</option>
          <option value="regular">Regular</option>
          <option value="athletic">Athletic</option>
          <option value="big">Big</option>
        </select>
      </div>
    </div>
  );
}

export default SizingTab;