/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-return */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      require("unplugin-icons/webpack").default({
        compiler: "jsx",
        jsx: "react",
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
