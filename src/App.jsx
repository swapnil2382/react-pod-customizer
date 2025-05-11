import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PreviewSection from "./pages/PreviewSection";
import DesignControls from "./pages/DesignControls";

function App() {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      textPrint: "",
      shirtColor: "#ffffff",
      textColor: "#000000",
      height: 180,
      weight: 80,
      build: "athletic",
    },
  });

  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [imageSize] = useState(28);
  const [textSizes, setTextSizes] = useState([24]);
  const [designPosition, setDesignPosition] = useState({ top: "30%", left: "50%" });
  const [textPositions, setTextPositions] = useState([{ top: "50%", left: "50%" }]);
  const [activeTab, setActiveTab] = useState("text");
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [
    {
      name: "Light",
      classes: {
        bg: "bg-gray-50",
        button: "bg-blue-600 hover:bg-blue-700",
        text: "text-gray-800",
        card: "bg-white",
        border: "border-gray-300",
      },
    },
    {
      name: "Dark",
      classes: {
        bg: "bg-gray-900",
        button: "bg-purple-600 hover:bg-purple-700",
        text: "text-white",
        card: "bg-gray-800",
        border: "border-gray-700",
      },
    },
    {
      name: "Vibrant",
      classes: {
        bg: "bg-yellow-100",
        button: "bg-red-600 hover:bg-red-700",
        text: "text-gray-900",
        card: "bg-white",
        border: "border-yellow-300",
      },
    },
  ];

  const currentTheme = themes[themeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key === "q") {
        setThemeIndex((prev) => (prev + 1) % themes.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const defaultTshirtUrl = "https://cdn2.iconfinder.com/data/icons/shirts/100/shirts-06-1024.png";

  const handleImage = (e) => {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const textLines = watch("textPrint")?.split("\n").slice(0, 3) || [""];

  const handleTextPositionChange = (index, positionType, value) => {
    const newPositions = [...textPositions];
    if (!newPositions[index]) {
      newPositions[index] = { top: "50%", left: "50%" };
    }
    newPositions[index] = { ...newPositions[index], [positionType]: value };
    setTextPositions(newPositions);
  };

  const handleTextSizeChange = (index, value) => {
    const newSizes = [...textSizes];
    newSizes[index] = value;
    setTextSizes(newSizes);
  };

  const handleImagePositionChange = (positionType, value) => {
    setDesignPosition((prev) => ({
      ...prev,
      [positionType]: value,
    }));
  };

  const colorPresets = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#10b981" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#ffffff" },
  ];

  return (
    <div className={`min-h-screen ${currentTheme.classes.bg}`}>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <PreviewSection
            formData={watch()}
            image={image}
            imageSize={imageSize}
            textSizes={textSizes}
            textPositions={textPositions}
            designPosition={designPosition}
            textLines={textLines}
            defaultTshirtUrl={defaultTshirtUrl}
            colorPresets={colorPresets}
            setFormData={setValue}
            theme={currentTheme}
          />
          <DesignControls
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            formData={watch()}
            register={register}
            textLines={textLines}
            textSizes={textSizes}
            textPositions={textPositions}
            handleTextSizeChange={handleTextSizeChange}
            handleTextPositionChange={handleTextPositionChange}
            image={image}
            handleImage={handleImage}
            imageSize={imageSize}
            designPosition={designPosition}
            handleImagePositionChange={handleImagePositionChange}
            setFormData={setValue}
            theme={currentTheme}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
