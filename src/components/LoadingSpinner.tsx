import { motion } from "framer-motion";
import cendevLogo from "/cendev.svg";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  fullScreen?: boolean;
}

const LoadingSpinner = ({
  size = "md",
  fullScreen = true,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  const spinner = (
    <motion.div
      className={`${sizeClasses[size]} relative`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spinning Logo - Fast spin then stop */}
      <motion.img
        src={cendevLogo}
        alt="Loading..."
        className="w-full h-full"
        animate={{
          rotate: [0, 1080], // Spin 3 full rotations (1080 degrees)
        }}
        transition={{
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96], // Deceleration curve
          times: [0, 1],
        }}
      />

      {/* Pulsing Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );

  if (fullScreen) {
    return (
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-gray-950/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-center gap-6">
          {spinner}

          {/* Loading Text */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-emerald-400 font-semibold text-lg">
              Loading
            </span>
            <motion.span
              className="flex gap-1"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-emerald-400">.</span>
              <span className="text-emerald-400">.</span>
              <span className="text-emerald-400">.</span>
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
