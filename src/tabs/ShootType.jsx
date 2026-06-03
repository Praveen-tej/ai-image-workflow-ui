export default function ShootType({ formData, setFormData }) {
  return (
    <>
      <div className="text-center text-2xl font-semibold mb-8">
        Select the Shoot Type
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() =>
            setFormData({
              ...formData,
              shootType: "Standalone Product Visuals",
            })
          }
          className={
            formData.shootType === "Standalone Product Visuals"
              ? "w-full border-2 border-purple-500 bg-purple-50 rounded-xl p-4 text-left transition-all text-purple-700 font-semibold"
              : "w-full border border-gray-200 rounded-xl p-4 text-left hover:border-purple-300 transition-all"
          }
        >
          Standalone Product Visuals
        </button>

        <button
          onClick={() =>
            setFormData({
              ...formData,
              shootType: "Styled Model Photography",
            })
          }
          className={
            formData.shootType === "Styled Model Photography"
              ? "w-full border-2 text-purple-700 font-semibold border-purple-500 bg-purple-50 rounded-xl p-4 text-left transition-all"
              : "w-full border border-gray-200 rounded-xl p-4 text-left hover:border-purple-300 transition-all"
          }
        >
          Styled Model Photography
        </button>
      </div>
    </>
  );
}