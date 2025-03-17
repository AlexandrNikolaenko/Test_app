/** @type {import('next').NextConfig} */

const repo = 'Test_app'

const nextConfig = {
    basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: 'export',
};

export default nextConfig;
