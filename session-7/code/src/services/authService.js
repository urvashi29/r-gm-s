export const login = async (username, password) => {
  if (username == "admin" && password == "admin") {
    return {
      token: "fake-jwt-token",
      user: { name: "Admin" },
    };
  }
  throw new Error("Invalid credentials");
};

export const logout = () => {
  localStorage.removeItem("token");
};
