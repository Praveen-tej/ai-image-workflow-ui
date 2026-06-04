import React from "react";

export default function Sidebar({ formData }) {
  return (
    <div className="h-screen w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-2">Summary</h2>
      <p className="text-gray-500 text-xs ">
        Your selections will appear here as you complete each step.
      </p>

      {formData.shootType && (
        <div className="border border-purple-200 rounded-2xl mt-3 p-4 mb-4 bg-purple-50">
          <h3 className="font-semibold text-purple-700"> Shoot Type</h3>

          <p>{formData.shootType}</p>
        </div>
      )}

      {formData.category && (
        <div className="border border-purple-200 rounded-2xl mt-3 p-4 bg-purple-50">
          <h3 className="font-semibold text-purple-700"> Product Details</h3>

          <p>{formData.category}</p>
          <p>{formData.sku}</p>
          <p>{formData.productName}</p>
        </div>
      )}
      {formData.sceneType && (
        <div className="border border-purple-200 rounded-2xl mt-3 p-4 mb-4 bg-purple-50">
          <h3 className="font-semibold text-purple-700">Output Settings</h3>

          <p>{formData.sceneType}</p>
          <p>{formData.photoCount}</p>
        </div>
      )}

      {formData.aspectRatio && (
        <div className="border border-purple-200 rounded-2xl mt-3 p-4 mb-4 bg-purple-50">
          <h3 className="font-semibold text-purple-700">Aspect Ratio</h3>

          <p>{formData.aspectRatio}</p>
        </div>
      )}

      {formData.imageQuality && (
        <div className="border border-purple-200 rounded-2xl mt-3 p-4 mb-4 bg-purple-50">
          <h3 className="font-semibold text-purple-700"> Image Quality</h3>

          <p>{formData.imageQuality}</p>
        </div>
      )}
    </div>
  );
}
