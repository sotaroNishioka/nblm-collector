import type { NextConfig } from "next";

const repo = "nblm-collector"; // GitHub リポジトリ名に合わせる (例: 'my-app')
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // ① GitHub Pages 用に静的書き出し
  output: "export", // Next.js 13.3 以降での静的エクスポート指定
  trailingSlash: true, // URLの末尾にスラッシュを強制し、404エラーを防ぐ

  // ② サブパス設定（ビルド時に決定）
  // GitHub Pages の場合、 https://<username>.github.io/<repository-name>/ のようにサブパスになるため設定
  basePath: isProd ? `/${repo}` : "", // ルーティングと <link href="..."> のパスを補正
  assetPrefix: isProd ? `/${repo}/` : "", // JavaScript、CSS、画像などの静的ファイルへのパスを補正

  // 画像最適化サーバーを使わない場合（静的エクスポート時は true を推奨）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
