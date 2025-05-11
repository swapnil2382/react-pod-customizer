import React from "react";

function TextTab({
  formData,
  register,
  textLines,
  textSizes,
  textPositions,
  handleTextSizeChange,
  handleTextPositionChange,
  theme,
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className={`block font-medium ${theme.classes.text} mb-2`}>Text to Print</label>
        <textarea
          {...register("textPrint")}
          rows={3}
          className={`w-full p-2 border rounded-md ${theme.classes.text} ${theme.classes.border}`}
          placeholder="Enter text for up to 3 lines..."
        />
      </div>

      <div>
        <label className={`block font-medium ${theme.classes.text} mb-2`}>Text Color</label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            {...register("textColor")}
            className="w-12 h-12 rounded cursor-pointer border-0"
          />
          <span className={theme.classes.text}>{formData.textColor}</span>
        </div>
      </div>

      {textLines.map((_, index) => (
        <div key={index} className={`${theme.classes.card} p-4 rounded-lg ${theme.classes.border}`}>
          <h4 className={`font-medium ${theme.classes.text} mb-3`}>Line {index + 1} Settings</h4>
          <div className="mb-4">
            <label className={`block font-medium ${theme.classes.text} mb-2`}>Size</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="12"
                max="100"
                value={textSizes[index] || 24}
                onChange={(e) => handleTextSizeChange(index, e.target.value)}
                className="w-full"
              />
              <span className={`${theme.classes.text} w-8`}>{textSizes[index] || 24}px</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block font-medium ${theme.classes.text} mb-2`}>Vertical Position</label>
              <input
                type="range"
                min="0"
                max="100"
                value={parseInt(textPositions[index]?.top || "50%")}
                onChange={(e) => handleTextPositionChange(index, "top", `${e.target.value}%`)}
                className="w-full"
              />
            </div>
            <div>
              <label className={`block font-medium ${theme.classes.text} mb-2`}>Horizontal Position</label>
              <input
                type="range"
                min="20"
                max="80"
                value={parseInt(textPositions[index]?.left || "50%")}
                onChange={(e) => handleTextPositionChange(index, "left", `${e.target.value}%`)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TextTab;
