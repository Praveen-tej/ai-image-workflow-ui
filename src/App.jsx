import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ShootType from "./tabs/ShootType";
import "./App.css";
import ChooseProduct from "./tabs/ChooseProduct";
import OutputSettings from "./tabs/OutputSettings";
import AspectRatio from "./tabs/AspectRatio";
import ImageQuality from "./tabs/ImageQuality";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
    <>
      <Header />

      <div className="ml-7 mt-5">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
          ✨ AI Product Image Generator
        </div>

        <TypeAnimation
          sequence={["Create Stunning Product Images"]}
          wrapper="h1"
          speed={30}
          cursor={true}
          repeat={0}
          className="text-3xl font-bold mt-3"
        />
      </div>

      <div className="flex justify-center pt-3 text-lg">
        <div className="w-175 min-h-120 mr-80 mb-5 border border-purple-500 rounded-3xl p-6 relative">
          {" "}
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
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <button
              disabled={currentIndex === 0}
              onClick={() => {
                setDirection(-1);
                setCurrentIndex(currentIndex - 1);
              }}
              className="px-4 py-2 border  border-gray-300 rounded-xl transition-all hover:border-purple-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Back
            </button>
            <div className="flex gap-2 mt-5">
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
            <button
              disabled={!formData.shootType}
              onClick={() => {
                setDirection(1);
                setCurrentIndex(currentIndex + 1);
              }}
              className="px-4 py-2 rounded-xl transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed bg-purple-800 text-white hover:opacity-90 cursor-pointer"
            >
              Next →
            </button>
          </div>
        </div>

        <motion.div
          initial={{ x: 350 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 h-full w-80 bg-white border-l shadow-2xl z-50"
        >
          <Sidebar formData={formData} />
        </motion.div>
      </div>
    </>
  );
}

export default App;
