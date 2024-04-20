// const env = process.env.NODE_ENV; // This gives you the current environment ('development', 'production', etc.)
// console.log(env);

// interface Config {
//   loginUrl: string;
// }

// let configModule: Promise<{ default: Config }>;

// if (env === "development") {
//   configModule = import("./config.dev");
// } else {
//   // Default import or handle other environments
//   configModule = import("./config.prod");
// }

// const getConfig = async () => {
//   const module = await configModule;
//   return module.default;
// };

// export default getConfig;

const globalConfig = {
  development: {
    loginUrl: "http://localhost:5500",
  },
};

let config: typeof globalConfig.development | {} = {};

try {
  if (process.env.NODE_ENV === "development") {
    config = globalConfig[process.env.NODE_ENV];
  }
} catch (err) {
  throw new Error("config unable to be loaded");
}

export default config;
