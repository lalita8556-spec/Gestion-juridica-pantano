const pages = process.env.GITHUB_PAGES === 'true';
/** @type {import('next').NextConfig} */
const config = pages ? {
  output: 'export',
  basePath: '/Gestion-juridica-pantano',
  trailingSlash: true,
  images: { unoptimized: true },
} : {};
export default config;
