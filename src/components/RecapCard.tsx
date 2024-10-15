"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Clock } from 'lucide-react';
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

  return (
    <Card 
      className="bg-gray-800 overflow-hidden transition-all duration-300 h-[400px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={video_url} target="_blank" rel="noopener noreferrer" className="relative block h-48">
        <Image
          src={video_thumbnail_url || '/placeholder.svg'}
          alt={video_title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{Math.ceil(duration / 3600)} hours</span>
        </div>
      </Link>
      <CardContent className="flex-grow py-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{video_title}</h3>
        <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Watch Recap
        </Button>
      </CardFooter>
    </Card>
  );
}
