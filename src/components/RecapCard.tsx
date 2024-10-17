"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface RecapCardProps {
  video_title: string;
  video_url: string;
  video_thumbnail_url: string;
  description: string;
  duration: number; // New prop for video duration
}

export function RecapCard({ video_title, video_url, video_thumbnail_url, description, duration }: RecapCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${mins}m ${secs}s`;
  };

  return (
    <Card 
      className="bg-gray-800 overflow-hidden transition-all duration-300 h-[400px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={video_url} target="_blank" rel="noopener noreferrer" className="relative block h-48 group">
        <Image
          src={video_thumbnail_url || '/placeholder.svg'}
          alt={video_title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold">
          Recap
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{formatDuration(duration)}</span>
        </div>
      </Link>
      <CardContent className="flex-grow py-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-primary-foreground">{video_title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground group"
        >
          Watch Recap
          <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
}
