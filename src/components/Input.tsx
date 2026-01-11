import { useState } from "react";
import { motion } from "framer-motion";
import ax from "../lib/ax";

const Input = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async () => {
    if (!url.trim()) return;

    try {
      const res = await ax.post("/url", {
        url: url.trim(),
      });
      setShortUrl(res.data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = async () => {
    const fullUrl = `http://localhost:8000/${shortUrl}`;
    await navigator.clipboard.writeText(fullUrl);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-2xl rounded-3xl 
               bg-white/10 backdrop-blur-xl 
               border border-white/20 
               shadow-[0_0_80px_rgba(99,102,241,0.25)]
               p-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center items-center w-full my-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to{" "}
            <span className="text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.9)]">
              CLIP URL
            </span>
          </h1>

          <p className="text-gray-300 text-sm mb-10">
            Shorten, manage and share your links securely
          </p>

          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-full px-6 py-4 text-sm
             bg-white/10 text-white placeholder-gray-400
             border border-white/20
             outline-none
             focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30
             transition"
          />
          <button
            onClick={handleSubmit}
            className="mt-6 px-10 py-3 rounded-full
             bg-indigo-600 hover:bg-indigo-700
             text-white font-medium
             shadow-lg shadow-indigo-600/30
             transition active:scale-95"
          >
            Shorten URL
          </button>

          {shortUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex items-center justify-between gap-4
               bg-white/10 border border-white/20
               backdrop-blur-lg rounded-xl px-5 py-3"
            >
              <span className="text-sm text-white truncate">
                http://localhost:8000/{shortUrl}
              </span>

              <button
                onClick={handleCopy}
                className="px-4 py-1 rounded-full
                 bg-indigo-500 hover:bg-indigo-600
                 text-xs text-white transition"
              >
                Copy
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Input;
