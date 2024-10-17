import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BookOpenIcon, StarIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: { title: string } }) {
  const manga = await getManga(params.title);
  return {
    title: `${manga.title_name} | Your Site Name`,
    description: manga.description,
  };
}

async function getManga(encodedTitle: string) {
  const supabase = createClient();
  const decodedTitle = decodeURIComponent(encodedTitle);
  
  const { data, error } = await supabase
    .from('titles')
    .select(`
      id,
      title_name,
      description,
      type,
      status,
      cover_image_url,
      release_date
    `)
    .eq('title_name', decodedTitle)
    .single();

  if (error || !data) {
    throw new Error('Manga not found');
  }

  return data;
}

export default async function MangaPage({ params }: { params: { title: string } }) {
  const manga = await getManga(params.title);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 xl:w-1/4">
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] w-full shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src={manga.cover_image_url}
                    alt={manga.title_name}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    Read Now
                  </button>
                  <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300">
                    Add to Library
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <h1 className="text-4xl font-bold mb-4 text-white">{manga.title_name}</h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary" className="bg-blue-600 text-white px-3 py-1 text-sm">
                  {manga.type}
                </Badge>
                <Badge variant="outline" className={`px-3 py-1 text-sm ${manga.status === 'Ongoing' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                  {manga.status}
                </Badge>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{manga.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-gray-400">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <span>Released: {new Date(manga.release_date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  <span>Chapters: {'N/A'}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <StarIcon className="w-5 h-5 mr-2" />
                  <span>Rating: {'N/A'}</span>
                </div>
              </div>
              {/* Add more sections here, such as chapter list, reviews, etc. */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
