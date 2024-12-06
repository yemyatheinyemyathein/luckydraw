import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bg from "../assets/luckydrawBg.jpg";

const generateSampleData = () => {
  const names = [];
  for (let i = 1; i <= 200; i++) {
    names.push(`Participant ${i}`);
  }
  return names;
};

const items = generateSampleData();

const LuckyDraw = () => {
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(1);
  const [presetResult] = useState([
    "Participant 5",
    "Participant 5",
    "Participant 5",
  ]);
  const [initialRender, setInitialRender] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const itemHeight = 70;

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const handleSpin = () => {
    if (rolling) return;
    setRolling(true);
    setShowResult(false);

    const randomIndex = Math.floor(Math.random() * presetResult.length);
    const winner = presetResult[randomIndex];
    const winnerIndex = items.indexOf(winner);

    setTimeout(() => {
      setResult(winnerIndex);
      setRolling(false);
      setShowResult(true);
    }, 4000);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen relative"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-red-900 opacity-30"></div>

      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-yellow-300 z-10"
        style={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
        }}
      >
        🎰 Lucky Draw 🎰
      </h1>

      {/* Gold Stars */}
      <div className="absolute top-8 z-10">
        <span className="text-xl sm:text-xl md:text-3xl text-yellow-500">
          ⭐⭐⭐⭐⭐
        </span>
      </div>

      {/* Boxes */}
      <div className="bg-yellow-400 p-2 sm:p-4 rounded-lg flex flex-wrap space-x-1 sm:space-x-4 justify-center mb-8 z-10">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="relative w-24 sm:w-32 md:w-40 h-[200px] overflow-hidden bg-yellow-200 rounded-lg border-4 border-yellow-500 shadow-gray-600 mb-2"
            >
              <motion.div
                animate={{
                  y: rolling
                    ? -(items.length * itemHeight)
                    : -(result !== null ? result * itemHeight : 0) +
                      itemHeight * 1,
                }}
                initial={{
                  y: initialRender
                    ? 0
                    : -(result !== null ? result * itemHeight : 0) +
                      itemHeight * 1,
                }}
                transition={{
                  duration: rolling ? 4 : 1,
                  ease: rolling ? "linear" : "easeOut",
                  repeat: rolling ? Infinity : 0,
                  repeatType: "loop",
                }}
                className="flex flex-col"
              >
                {Array(3)
                  .fill(items)
                  .flat()
                  .map((item, i) => (
                    <div
                      key={i}
                      className="h-[67.67px] w-full flex items-center justify-center text-xs sm:text-sm md:text-lg font-bold text-yellow-700 shadow-lg"
                      style={{
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
              </motion.div>
            </div>
          ))}
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-red-900 font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition disabled:opacity-50 z-10"
        disabled={rolling}
      >
        {rolling ? "Rolling..." : "Spin"}
      </button>

      {/* Show result */}
      {showResult && !rolling && (
        <div
          className="animate-bounce mt-6 text-lg sm:text-xl md:text-2xl font-bold text-white z-10"
          style={{
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Winner: {items[result]}
        </div>
      )}
    </div>
  );
};

export default LuckyDraw;
