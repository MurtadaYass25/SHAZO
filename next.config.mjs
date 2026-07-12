/** @type {import('next').NextConfig} */

// GitHub Pages serves this project at https://<user>.github.io/<repo>/,
// so every internal path needs the repo name prefixed in production builds.
// IMPORTANT: keep this in sync with the actual repository name (case-sensitive).
const repoName = "DAWI";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export — required for GitHub Pages (no Node server there)
  images: { unoptimized: true }, // next/image's optimizer needs a server; disable it for static export
  trailingSlash: true, // generates /page/index.html so GitHub Pages routes folders correctly
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
