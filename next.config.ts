import type { NextConfig } from "next";

const repoName = "nblm-collector"; // リポジトリ名
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポートを有効化
  // GitHub Pagesのサブディレクトリ対応
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true, // 末尾スラッシュを強制
  // assetPrefix を使う場合、画像の最適化を無効にする必要がある
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
