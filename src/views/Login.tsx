import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { loginUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

interface LoginTypes {
  email: string;
  password: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginTypes>({
    email: "",
    password: "",
  });

  const {setUser} = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };
      // console.log(payload);
     const res =  await loginUser(payload);
      setUser(res.data.user);
      navigate("/urlShortner");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl"
        >
          <motion.h2
            variants={itemsVariants}
            className="text-2xl text-center font-bold text-gray-800 mb-2"
          >
            Login
          </motion.h2>
          <motion.p
            variants={itemsVariants}
            className="text-center text-gray-500 text-sm mb-6"
          >
            Shorten and manage your URLs securely
          </motion.p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <motion.div variants={containerVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none  transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </motion.div>
            <motion.div variants={containerVariants}>
              <label
                htmlFor="password"
                className="text-sm block font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showpassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-500 hover:underline"
                  onClick={() => setShowPassword(!showpassword)}
                >
                  {showpassword ? "Hide" : "Show"}
                </button>
              </div>
            </motion.div>
            <motion.button
              variants={itemsVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-indigo-700"
            >
              Submit
            </motion.button>
          </form>
          <motion.p
            variants={itemsVariants}
            className="mt-6 text-center text-sm text-gray-500"
          >
            Don't have an account?{" "}
            <Link to="/register">
            <span className="cursor-pointer font-medium text-indigo-600 hover:underline">
              Register
            </span>
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
