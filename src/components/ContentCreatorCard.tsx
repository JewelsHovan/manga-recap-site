"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContentCreatorCardProps {
  creator: {
    id: number;
    creator_name: string;
    channel_url: string;
    profile_image_url: string;
    bio: string;
    category: string;
  };
}

export default function ContentCreatorCard({ creator }: ContentCreatorCardProps) {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-gray-200"
      style={{ height: '400px' }}
    >
      <div className="relative h-48">
        <Image
          src={creator.profile_image_url}
          alt={creator.creator_name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75} // Adjust quality as needed
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-xl font-bold text-white truncate">{creator.creator_name}</h2>
        </div>
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
          {creator.category}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-gray-600 mb-2">
            {showFullBio ? creator.bio : `${creator.bio.substring(0, 100)}...`}
          </p>
          {creator.bio.length > 100 && (
            <button
              onClick={toggleBio}
              className="text-blue-500 hover:underline text-sm"
            >
              {showFullBio ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
        <a
          href={creator.channel_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded-full text-center hover:bg-blue-600 transition-colors duration-200"
        >
          Visit Channel
        </a>
      </div>
    </motion.div>
  );
}
