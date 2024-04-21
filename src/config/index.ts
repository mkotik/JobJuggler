const config = {
  apiBaseUrl: "",
};

try {
  if (process.env.NODE_ENV === "development") {
    config.apiBaseUrl = "http://localhost:5500";
  }
} catch (err) {
  throw new Error("config unable to be loaded");
}

export default config;
