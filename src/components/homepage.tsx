import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createClient } from '@/utils/supabase/server';
import { RecapCard } from '@/components/RecapCard';
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from 'date-fns';

// Initialize Supabase client
const supabase = createClient();

export default async function HomepageComponent() {
  // Fetch Recently Added Recaps
  const { data: recentRecaps, error: recentError } = await supabase
    .from('youtuberecaps')
    .select('video_title, video_url, video_thumbnail_url, description, published_at, duration')
    .order('published_at', { ascending: false })
    .limit(4);

  // Fetch Trending Recaps
  const { data: trendingRecaps, error: trendingError } = await supabase
    .from('youtuberecaps')
    .select('video_title, video_url, video_thumbnail_url, description, published_at, views_count, duration')
    .order('views_count', { ascending: false })
    .limit(6);

  // Fetch New Releases Recaps
  const { data: newRecaps, error: newError } = await supabase
    .from('youtuberecaps')
    .select('video_title, video_url, video_thumbnail_url, description, published_at, duration')
    .order('published_at', { ascending: false })
    .limit(6);

  // Handle Errors
  if (recentError || trendingError || newError) {
    console.error('Error fetching recaps:', recentError || trendingError || newError);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">      
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Manga Recaps</h1>
          <p className="text-xl mb-8">
            Find and watch YouTube recaps of your favorite manga, manhwa, and webtoons
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <Input
                placeholder="Search for a manga, manhwa, or webtoon recap..."
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Recap Categories */}
        <Tabs defaultValue="trending" className="mb-12">
          <TabsList className="mb-4 flex space-x-2">
            <TabsTrigger className="py-2 px-4" value="trending">Trending</TabsTrigger>
            <TabsTrigger className="py-2 px-4" value="new">New Releases</TabsTrigger>
            <TabsTrigger className="py-2 px-4" value="popular">Popular Genres</TabsTrigger>
          </TabsList>
          
          {/* Trending Tab Content */}
          <TabsContent value="trending">
            {trendingRecaps && trendingRecaps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trendingRecaps.map((recap) => (
                  <RecapCard
                    key={recap.video_title}
                    video_title={recap.video_title}
                    video_url={recap.video_url}
                    video_thumbnail_url={recap.video_thumbnail_url}
                    description={recap.description}
                    duration={recap.duration}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center">No trending recaps available at the moment.</p>
            )}
          </TabsContent>

          {/* New Releases Tab Content */}
          <TabsContent value="new">
            {newRecaps && newRecaps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newRecaps.map((recap) => (
                  <RecapCard
                    key={recap.video_title}
                    video_title={recap.video_title}
                    video_url={recap.video_url}
                    video_thumbnail_url={recap.video_thumbnail_url}
                    description={recap.description}
                    duration={recap.duration}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center">No new releases available at the moment.</p>
            )}
          </TabsContent>

          {/* Popular Genres Tab Content */}
          <TabsContent value="popular">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Action', 'Romance', 'Fantasy', 'Sci-Fi', 'Horror', 'Comedy', 'Drama', 'Adventure'].map((genre) => (
                <Button 
                  key={genre} 
                  variant="outline" 
                  className="h-20 text-black bg-white hover:bg-gray-200 hover:text-gray-800 border-gray-300 text-lg font-semibold tracking-wide"
                >
                  {genre}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Recently Added Recaps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recently Added Recaps</h2>
          <div className="space-y-4">
            {recentRecaps && recentRecaps.length > 0 ? (
              recentRecaps.map((recap) => (
                <Card 
                  key={recap.video_title} 
                  className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center p-4">
                    <div className="relative mr-4">
                      <Image
                        src={recap.video_thumbnail_url || '/placeholder.svg'}
                        alt={recap.video_title}
                        width={120}
                        height={68}
                        className="rounded-lg object-cover"
                      />
                      <Badge 
                        variant="secondary"
                        className="absolute bottom-1 right-1 bg-black bg-opacity-75"
                      >
                        {recap.duration}
                      </Badge>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold mb-1 truncate text-white">
                        {recap.video_title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2 mb-2">
                        {recap.description}
                      </CardDescription>
                      <p className="text-xs text-gray-400">
                        {formatDistanceToNow(new Date(recap.published_at), { addSuffix: true })}
                      </p>
                    </div>
                    <a
                      href={recap.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4"
                    >
                      <Button className="whitespace-nowrap">Watch Now</Button>
                    </a>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-center">No recaps available at the moment.</p>
            )}
          </div>
        </section>

        {/* Top Manga/Manhwa/Webtoons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Top Manga/Manhwa/Webtoons</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border border-gray-700">
            <div className="flex w-max space-x-4 p-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item} className="w-[250px] bg-gray-800">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?text=Top+${item}`}
                      alt={`Top Manga ${item}`}
                      width={250}
                      height={150}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="truncate text-lg">Top Manga Title {item}</CardTitle>
                    <CardDescription className="truncate text-sm">
                      A brief description of the top-rated manga.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </section>
      </main>
    </div>
  );
}
