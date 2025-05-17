import type { NextConfig } from "next";

const repoName = "nblm-collector"; // リポジトリ名

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポートを有効化
  // GitHub Pagesのサブディレクトリ対応
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  // assetPrefix を使う場合、画像の最適化を無効にする必要がある
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
