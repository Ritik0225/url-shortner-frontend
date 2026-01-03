import { motion } from "framer-motion";

const Topbar: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-linear-to-r from-indigo-600 via-indigo-700 to-indigo-800 shadow-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="cursor-pointer text-xl font-semibold tracking-wide text-white"
        >
          CLIP <span className="font-bold text-indigo-200">URL</span>
        </motion.h1>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-indigo-100 transition hover:text-white">
            Login
          </button>

          <button className="rounded-xl bg-white px-4 py-1.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100">
            Register
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
