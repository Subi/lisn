/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: "api.spotify.com",
                port: '',
            },
            {
                protocol: 'https',
                hostname: "i.scdn.co",
                port: '',
            },
            {
                protocol: 'http',
                hostname: "i.scdn.co",
                port: '',
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
                port: '',
            }
        ]
    }
};

export default nextConfig;
