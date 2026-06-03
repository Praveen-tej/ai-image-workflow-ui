import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShootType from "./tabs/ShootType";
import "./App.css";
import ChooseProduct from "./tabs/ChooseProduct";
import OutputSettings from "./tabs/OutputSettings";
import AspectRatio from "./tabs/AspectRatio";
import ImageQuality from "./tabs/ImageQuality";
import Sidebar from "./components/Sidebar";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({});

  const tabs = [
    <ShootType formData={formData} setFormData={setFormData} />,
    <ChooseProduct formData={formData} setFormData={setFormData} />,
    <OutputSettings formData={formData} setFormData={setFormData} />,
    <AspectRatio formData={formData} setFormData={setFormData} />,
    <ImageQuality formData={formData} setFormData={setFormData} />,
  ];
  return (
    <div className="min-h-37 flex justify-center pt-32 text-2xl">
      <div className="w-175 min-h-150 border border-purple-500 rounded-3xl p-10 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              x: direction === 1 ? 100 : -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: direction === 1 ? -100 : 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {tabs[currentIndex]}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {tabs.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: index === currentIndex ? 1.3 : 1,
              }}
              transition={{
                duration: 0.2,
              }}
              className={
                index <= currentIndex
                  ? "w-3 h-3 rounded-full bg-purple-500"
                  : "w-3 h-3 rounded-full bg-gray-300"
              }
            />
          ))}
        </div>

        <div className="flex justify-center mt-20 gap-4">
          <button
            disabled={currentIndex === 0}
            onClick={() => {
              setDirection(-1);
              setCurrentIndex(currentIndex - 1);
            }}
            className="px-5 py-3 border border-gray-300 rounded-xl transition-all hover:border-purple-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed cursor-pointer "
          >
            ← Back
          </button>

          <button
            disabled={!formData.shootType}
            onClick={() => {
              setDirection(1);
              setCurrentIndex(currentIndex + 1);
            }}
            className="px-5 py-3 rounded-xl transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed bg-purple-800 text-white hover:opacity-90 cursor-pointer "
          >
            Next →
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: 350 }}
        animate={{ x:0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-80 bg-white border-l shadow-2xl z-50"
      >
        <Sidebar formData={formData} />
      </motion.div>
    </div>
  );
}

export default App;
