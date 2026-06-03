import React from "react";

export default function AspectRatio({ formData, setFormData }) {
  const ratios = [
    {
      ratio: "1:1",
      label: "Square",
    },
    {
      ratio: "4:5",
      label: "Instagram Portrait",
    },
    {
      ratio: "9:16",
      label: "Reels / Stories",
    },
    {
      ratio: "16:9",
      label: "Landscape",
    },
    {
      ratio: "3:2",
      label: "Photography",
    },
  ];

  return (
    <>
      <div className="text-center text-2xl font-medium mb-4">Aspect Ratio</div>

      <p className="text-center text-gray-500 text-sm mb-8">
        Customize image dimensions for the best visual fit.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {ratios.map((item) => (
          <div
            onClick={() =>
              setFormData({
                ...formData,
                aspectRatio: item.ratio,
              })
            }
            key={item.ratio}
            className={
              formData.aspectRatio === item.ratio
                ? "border-2 border-purple-500 bg-purple-50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all"
                : "border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-all"
            }
          >
            <div className="w-6 h-6 border-2 border-gray-300 rounded-md mb-4"></div>

            <h3 className="font-semibold text-lg">{item.ratio}</h3>

            <p className="text-sm text-gray-500 text-center mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
