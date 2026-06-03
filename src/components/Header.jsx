import { useState } from "react";

export default function Header() {
    const [activeTab, setActiveTab] = useState("How It Works");
  return (
    <header className="flex items-center justify-between px-10 py-5 border-b border-gray-200 mr-80">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight">
        <span className="text-black">KOTOOR</span> 
        <span className="px-2 text-purple-600">AI</span></div>

      {/* Navigation */}
      <nav className="flex gap-4 font-medium">
        {["How It Works", "Gallery", "Results", "Pricing"].map((item) => (
            <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={activeTab === item 
                ? "text-white bg-purple-600 rounded-xl px-2 py-2 transition-all" 
                : "text-gray-500 px-4 py-2 hover:text-purple-600 transition-all"}
            >
                {item}
            </button>
        ))}
      </nav>
    </header>
  );
}
