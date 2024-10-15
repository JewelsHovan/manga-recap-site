"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ContentCreatorCardProps {
  creator: {
    id: number;
    creator_name: string;
    channel_url: string;
    profile_image_url: string;
    bio: string;
  };
}

export default function ContentCreatorCard({ creator }: ContentCreatorCardProps) {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden" style={{ height: '400px' }}>
      <Image
        src={creator.profile_image_url}
        alt={creator.creator_name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{creator.creator_name}</h2>
        <p className="text-gray-600">
          {showFullBio ? creator.bio : `${creator.bio.substring(0, 100)}...`}
        </p>
        {creator.bio.length > 100 && (
          <button
            onClick={toggleBio}
            className="text-blue-500 hover:underline"
          >
            {showFullBio ? 'Show Less' : 'Show More'}
          </button>
        )}
        <a
          href={creator.channel_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block mt-2"
        >
          Visit Channel
        </a>
      </div>
    </div>
  );
}
