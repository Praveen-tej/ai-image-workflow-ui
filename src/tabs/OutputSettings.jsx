export default function OutputSettings({formData,setFormData}) {
  return (
    <>
      <div className="text-center text-2xl font-medium mb-8">
        Output Settings
      </div>


      <div className="space-y-6">

        <div>
          <label className="block mb-2 font-medium">
            Scene Type
          </label>

          <select value={formData.sceneType || ""} onChange={(e) => setFormData({...formData, sceneType:e.target.value})}  className="w-full border border-gray-300 rounded-xl p-3">
            <option value="" disabled>Select Scene Type</option>
            <option value="Beach">Beach</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Number Of Photos
          </label>

          <select value={formData.photoCount || ""} onChange={(e) =>setFormData({...formData , photoCount:e.target.value})}  className="w-full border border-gray-300 rounded-xl p-3">
            <option value="" disabled >Select Number of Photos</option>
            <option value="1 Photo" >1 Photo</option>
            <option value="2 Photos">2 Photos</option>
            <option value="3 Photos">3 Photos</option>
            <option value="4 Photos">4 Photos</option>
            <option value="5 Photos">5 Photos</option>
          </select>
        </div>

      </div>
    </>
  );
}