import React from "react";

function ColorTab({ formData, setFormData, register, theme }) {
  return (
    <div className="space-y-6">
      <div>
        <label className={`block font-medium ${theme.classes.text} mb-2`}>T-Shirt Color</label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            {...register("shirtColor")}
            className="w-12 h-12 rounded cursor-pointer border-0"
          />
          <span className={theme.classes.text}>{formData.shirtColor}</span>
        </div>
      </div>
      <div>
        <h4 className={`font-medium ${theme.classes.text} mb-3`}>Popular Colors</h4>
        <div className="grid grid-cols-5 gap-3">
          {[
            "#3b82f6",
            "#ef4444",
            "#10b981",
            "#f59e0b",
            "#8b5cf6",
            "#ec4899",
            "#000000",
            "#ffffff",
            "#6b7280",
            "#78350f",
          ].map((color, idx) => (
            <button
              key={idx}
              onClick={() => setFormData("shirtColor", color)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              style={{
                backgroundColor: color,
                transform: formData.shirtColor === color ? "scale(1.1)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorTab;