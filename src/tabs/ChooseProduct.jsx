import React from "react";

export default function ChooseProduct({ formData, setFormData }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Product Category</label>

            <select
              value={formData.category || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl p-3"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Jewellery">Jewellery</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Beauty">Beauty & Cosmetics</option>
              <option value="Footwear">Footwear</option>
              <option value="Watches">Watches</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              SKU ID <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. SKU-2024-001"
              value={formData.sku || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sku: e.target.value,
                })
              }
              className="w-full border border-gray-200 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Product Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Gold chain necklace"
              value={formData.productName || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productName: e.target.value,
                })
              }
              className="w-full border border-gray-200 rounded-2xl p-4"
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <label className="block mb-2 font-medium">Upload Product Image</label>

          <div className="border-2 border-dashed border-gray-200 rounded-3xl h-full min-h-[260px] flex items-center justify-center cursor-pointer hover:border-purple-500 transition-all">
            Click to Upload
          </div>
        </div>
      </div>
    </>
  );
}
