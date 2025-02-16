/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.lexica.art'],
        remotePatterns: [
       
            {
                protocol: 'https',
                hostname: 'instagram.fdel8-2.fna.fbcdn.net',
            },
            {
                protocol: 'https',
                hostname: 'scontent.cdninstagram.com',
            },
        ],
    },
};

export default nextConfig;
