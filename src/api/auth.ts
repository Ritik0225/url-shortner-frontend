import ax from "../lib/ax";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  await ax.post("/user/register", data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return await ax.post("/user/login", data);
};

export const logoutUser = async () => {
  return await ax.post("/user/logout");
};

export const getUser = async () => {
  return await ax.get("/user/me");
};
