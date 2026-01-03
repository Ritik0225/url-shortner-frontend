import { motion, type Variants } from "framer-motion";

const blobAnimation: Variants = {
  animate: {
    x: [0, 30, -20, 0],
    y: [0, -20, 30, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  },
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] via-[#020617] to-black" />

      {/* Blob 1 */}
      <motion.div
        variants={blobAnimation}
        animate="animate"
        className="absolute -top-40 -left-40 h-128 w-lg rounded-full bg-indigo-500/10 blur-3xl"
      />

      {/* Blob 2 */}
      <motion.div
        variants={blobAnimation}
        animate="animate"
        className="absolute top-1/3 -right-40 h-112 w-md rounded-full bg-purple-500/10 blur-3xl"
      />

      {/* Blob 3 */}
      <motion.div
        variants={blobAnimation}
        animate="animate"
        className="absolute bottom-0 left-1/4 h-120 w-120 rounded-full bg-fuchsia-500/10 blur-3xl"
      />
    </div>
  );
};

export default AnimatedBackground;
