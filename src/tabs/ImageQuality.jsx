export default function ImageQuality({ formData, setFormData }) {
  const qualities = [
    {
      quality: "1080p",
      label: "STANDARD",
    },
    {
      quality: "2K",
      label: "PRINT-READY",
    },
    {
      quality: "4K",
      label: "ULTRA HD",
    },
  ];

  return (
    <>
      <div className="text-center text-2xl font-medium mb-4">Image Quality</div>

      <p className="text-center text-gray-500 mb-8">
        Optimize quality for crisp visuals and high-resolution output.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {qualities.map((item) => (
          <div
            onClick={(e) =>
              setFormData({ ...formData, imageQuality: item.quality })
            }
            key={item.quality}
            className={
              formData.imageQuality === item.quality
                ? "border-2 border-purple-500 bg-purple-50 rounded-3xl h-44 flex flex-col justify-center items-center cursor-pointer transition-all"
                : "border border-gray-200 rounded-3xl h-44 flex flex-col justify-center items-center cursor-pointer hover:border-purple-500 transition-all"
            }
          >
            <h2 className="text-2xl font-semibold">{item.quality}</h2>
            <p className="text-gray-400 font-medium mt-3 text-2xl">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
