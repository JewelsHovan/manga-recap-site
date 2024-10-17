import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock } from 'lucide-react';

interface MangaCardProps {
  manga: {
    id: number;
    title_name: string;
    description: string;
    type: 'Manga' | 'Manhwa' | 'Webtoon';
    status: 'Ongoing' | 'Completed';
    cover_image_url: string;
    release_date: string;
  };
}

export function MangaCard({ manga }: MangaCardProps) {
  return (
    <Card className="bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <Link href={`/manga/${manga.title_name}`}>
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={manga.cover_image_url}
            alt={manga.title_name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <Badge variant="secondary" className="bg-blue-500 text-white">
              {manga.type}
            </Badge>
            <Badge variant="outline" className={manga.status === 'Ongoing' ? 'bg-green-500' : 'bg-red-500'}>
              {manga.status}
            </Badge>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-white line-clamp-1">{manga.title_name}</h3>
        <p className="text-sm text-gray-300 line-clamp-2 mb-2">{manga.description}</p>
        <div className="flex items-center text-gray-400 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>Released: {new Date(manga.release_date).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button variant="outline" size="sm" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
          <BookOpen className="w-4 h-4 mr-2" />
          Read More
        </Button>
        <Link href={`/manga/${manga.id}/recaps`} passHref>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            View Recaps
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default MangaCard;
