/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.18.10'],
  // allowedDevOrigins: ['10.210.182.30'],
  images: {
    qualities: [25, 50, 75, 100],
  },
  reactCompiler: true,
};

export default nextConfig;
