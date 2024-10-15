"use client";

import Image from 'next/image';
import { useState } from 'react';
import { FaRegClock, FaEye, FaThumbsUp, FaCalendarAlt } from 'react-icons/fa'; // Icons for duration, views, likes, date

interface YouTubeRecapCardProps {
  recap: {
    id: number;
    video_title: string;
    video_url: string;
    video_thumbnail_url: string;
    published_at: string;
    duration: number;
    views_count: number;
    likes_count: number;
    description: string;
  };
}

export default function YouTubeRecapCard({ recap }: YouTubeRecapCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-gray-900 border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <a href={recap.video_url} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="relative">
          <Image
            src={recap.video_thumbnail_url}
            alt={recap.video_title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
      <div className="p-6 border-t border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-2 leading-tight">
          {recap.video_title}
        </h2>
        <p className="text-sm text-gray-400 mb-4 leading-snug">
          {showFullDescription
            ? recap.description
            : `${recap.description.substring(0, 50)}...`}
        </p>
        {recap.description.length > 50 && (
          <button
            onClick={toggleDescription}
            className="text-blue-400 hover:text-blue-500 font-medium mb-4"
          >
            {showFullDescription ? 'Show Less' : 'Show More'}
          </button>
        )}

        {/* Horizontal layout for metadata */}
        <div className="flex justify-between items-center text-gray-400 mt-4 space-x-4">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <p>{new Date(recap.published_at).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center">
            <FaRegClock className="mr-1" />
            <p>{Math.floor(recap.duration / 60)} min</p> {/* Converted to minutes */}
          </div>
        </div>

        {/* Views and Likes in a row */}
        <div className="flex justify-between items-center text-gray-400 mt-2 space-x-4">
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <p>{recap.views_count.toLocaleString()}</p>
          </div>
          <div className="flex items-center">
            <FaThumbsUp className="mr-1" />
            <p>{recap.likes_count.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}