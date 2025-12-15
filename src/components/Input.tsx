import axios from "axios";
import { useState } from "react";

const Input = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const handleSubmit = async () => {
    if (!url) return;
    const urlInput = url.trim();
    try {
      const res = await axios.post("http://localhost:8000/url", {
        url: urlInput,
      });
      setShortUrl(res.data.id);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full my-10">
        <h1 className="text-5xl mb-10">
          Welcome to the{" "}
          <span className="text-indigo-500">
            CLIP <span className="font-bold">URL</span>
          </span>
        </h1>
        <input
          type="text"
          placeholder="Enter your URL here..."
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border-2 border-indigo-500 px-4 py-2 min-w-100 rounded-2xl"
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 mt-4 px-10 py-2 mb-5 rounded-full text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {shortUrl && (
          <h2>{`Your short url is : http://localhost:8000/${shortUrl}`}</h2>
        )}
      </div>
    </>
  );
};

export default Input;
