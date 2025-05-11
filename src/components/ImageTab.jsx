import React from "react";

function ImageTab({ image, handleImage, designPosition, handleImagePositionChange, theme }) {
  return (
    <div className="space-y-6">
      <div
        className={`${theme.classes.card} p-4 rounded-lg ${theme.classes.border} border-dashed text-center`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleImage}
      >
        <label className={`block font-medium ${theme.classes.text} mb-3`}>Upload Design Image</label>
        <p className={`${theme.classes.text} mb-2`}>Drop an image here or</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="mt-4 w-24 h-24 object-contain mx-auto"
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={`block font-medium ${theme.classes.text} mb-2`}>Vertical Position</label>
          <input
            type="range"
            min="0"
            max="100"
            value={parseInt(designPosition.top || "30%")}
            onChange={(e) => handleImagePositionChange("top", `${e.target.value}%`)}
            className="w-full"
          />
        </div>
        <div>
          <label className={`block font-medium ${theme.classes.text} mb-2`}>Horizontal Position</label>
          <input
            type="range"
            min="20"
            max="80"
            value={parseInt(designPosition.left || "50%")}
            onChange={(e) => handleImagePositionChange("left", `${e.target.value}%`)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageTab;