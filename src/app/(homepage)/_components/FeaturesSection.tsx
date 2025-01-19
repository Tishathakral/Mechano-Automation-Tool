import React from 'react';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Automated Messaging',
    description: 'Send personalized messages automatically to your followers.',
    image: 'https://image.lexica.art/full_webp/5a58314a-8891-471e-a522-81e9a7630748',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track your engagement and performance with detailed analytics.',
    image: 'https://image.lexica.art/full_webp/034cddd1-a36d-4dec-8d20-12ba9882ff9a',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Navigate effortlessly with our intuitive design.',
    image: 'https://image.lexica.art/full_webp/5a3d2d24-68ff-437d-ac6f-84975d683f6a',
  },
  {
    title: 'Global Reach',
    description: 'Connect with users worldwide and expand your audience.',
    image: 'https://image.lexica.art/full_webp/1632a0e0-1827-4905-b3b6-4cbf15a0b4c4',
  },
];

const FeaturesSection = () => {
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with Powerful Features
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From automated messaging to detailed analytics, Mechano has everything you need to enhance your Instagram experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h5 className="text-xl font-semibold text-black dark:text-white">{feature.title}</h5>
            <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
