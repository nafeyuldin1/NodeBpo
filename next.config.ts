/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',  // Enables static export mode
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Optional configurations:
  // trailingSlash: true,  // Uncomment if you want to add trailing slashes to URLs (e.g., /me -> /me/)
  // skipTrailingSlashRedirect: true, // Prevents automatic redirect for trailing slashes
  // distDir: 'dist',  // Uncomment to change the output directory from 'out' to 'dist'
};

module.exports = nextConfig;
