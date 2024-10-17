import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ThumbsUp } from 'lucide-react';

interface TopMangaCardProps {
  manga: {
    id: number;
    title_name: string;
    type: 'Manga' | 'Manhwa' | 'Webtoon';
    cover_image_url: string;
    total_views: number;
    total_likes: number;
  };
}

export function TopMangaCard({ manga }: TopMangaCardProps) {
  return (
    <Card className="w-[200px] bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <Link href={`/manga/${manga.title_name}`}>
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={manga.cover_image_url}
            alt={manga.title_name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2 bg-blue-500 text-white"
          >
            {manga.type}
          </Badge>
        </div>
      </Link>
      <CardContent className="p-3">
        <h3 className="font-bold text-sm mb-2 text-white line-clamp-1">{manga.title_name}</h3>
        <div className="flex items-center justify-between text-gray-400 text-xs">
          <div className="flex items-center">
            <Eye className="w-3 h-3 mr-1" />
            <span>{manga.total_views.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="w-3 h-3 mr-1" />
            <span>{manga.total_likes.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TopMangaCard;

