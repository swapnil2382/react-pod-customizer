import React, { useRef } from "react";
import html2canvas from "html2canvas";

function PreviewSection({
  formData,
  image,
  imageSize,
  textSizes,
  textPositions,
  designPosition,
  textLines,
  defaultTshirtUrl,
  colorPresets,
  setFormData,
  theme,
}) {
  const designRef = useRef(null);

  const handlePrint = () => {
    if (designRef.current) {
      html2canvas(designRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
      })
        .then((canvas) => {
          const link = document.createElement("a");
          link.download = "custom-tshirt-design.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        })
        .catch((error) => {
          console.error("Error generating canvas:", error);
          alert("Failed to download design. Please try again or use a different browser.");
        });
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className={`${theme.classes.card} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold ${theme.classes.text} mb-4`}>Design Preview</h2>
        <div
          ref={designRef}
          className="relative w-full h-96 flex items-center justify-center rounded-lg overflow-hidden"
          style={{ backgroundColor: "#f3f4f6" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: formData.shirtColor }} />
          <img
            src={defaultTshirtUrl}
            alt="T-Shirt"
            className="w-full h-full object-contain absolute top-0 left-0 opacity-95"
          />
          {image && (
            <img
              src={image}
              alt="Custom Design"
              className="absolute max-h-full"
              style={{
                top: designPosition.top,
                left: designPosition.left,
                width: imageSize, // Directly use imageSize as percentage string
                objectFit: "contain",
                transform: "translateX(-50%)",
              }}
            />
          )}
          {textLines.map((line, index) => (
            <div
              key={index}
              className="absolute text-center font-bold"
              style={{
                top: textPositions[index]?.top || "50%",
                left: textPositions[index]?.left || "50%",
                color: formData.textColor,
                fontSize: `${textSizes[index] || 24}px`,
                transform: "translateX(-50%)",
                textShadow: formData.textColor === "#ffffff" ? "1px 1px 3px rgba(0,0,0,0.3)" : "none",
                maxWidth: "80%",
                wordBreak: "break-word",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
      <div className={`${theme.classes.card} rounded-lg shadow-lg p-6`}>
        <h3 className={`text-lg font-semibold ${theme.classes.text} mb-4`}>Quick Color Selection</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {colorPresets.map((color) => (
            <button
              key={color.name}
              onClick={() => setFormData("shirtColor", color.value)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: color.value }}
              title={color.name}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={handlePrint}
            className={`w-full py-2 px-4 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme.classes.button}`}
            style={{ backgroundColor: "#2563eb" }}
          >
            Print Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewSection;
