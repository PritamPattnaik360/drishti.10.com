/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo at /<repo-name>/, not the root, so the
// build needs a matching basePath/assetPrefix. Only apply it in CI
// (GITHUB_ACTIONS is set there) so local dev/build still run at "/".
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isGithubActions && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
}

module.exports = nextConfig
