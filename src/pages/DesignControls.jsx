import React from "react";
import TextTab from "../components/TextTab";
import ImageTab from "../components/ImageTab";
import ColorTab from "../components/ColorTab";
import SizingTab from "../components/SizingTab";

function DesignControls({
  activeTab,
  setActiveTab,
  formData,
  register,
  textLines,
  textSizes,
  textPositions,
  handleTextSizeChange,
  handleTextPositionChange,
  handleImageSizeChange,
  image,
  handleImage,
  imageSize,
  designPosition,
  handleImagePositionChange,
  setFormData,
  theme,
}) {
  return (
    <div className="w-full lg:w-1/2">
      <div className={`${theme.classes.card} rounded-lg shadow-lg p-6`}>
        <h2 className={`text-xl font-semibold ${theme.classes.text} mb-6`}>Customize Your T-Shirt</h2>
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-6">
            {["text", "image", "color", "sizing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 font-medium border-b-2 ${
                  activeTab === tab
                    ? `border-blue-500 text-blue-600`
                    : `border-transparent ${theme.classes.text} hover:text-gray-700`
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        {activeTab === "text" && (
          <TextTab
            formData={formData}
            register={register}
            textLines={textLines}
            textSizes={textSizes}
            textPositions={textPositions}
            handleTextSizeChange={handleTextSizeChange}
            handleTextPositionChange={handleTextPositionChange}
            theme={theme}
          />
        )}
        {activeTab === "image" && (
          <ImageTab
            image={image}
            handleImage={handleImage}
            imageSize={imageSize}
            designPosition={designPosition}
            handleImagePositionChange={handleImagePositionChange}
             handleImageSizeChange={handleImageSizeChange}
            theme={theme}
          />
        )}
        {activeTab === "color" && (
          <ColorTab formData={formData} setFormData={setFormData} register={register} theme={theme} />
        )}
        {activeTab === "sizing" && <SizingTab register={register} theme={theme} />}
      </div>
    </div>
  );
}

export default DesignControls;