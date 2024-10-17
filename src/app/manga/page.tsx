import { createClient } from '@/utils/supabase/server';
import MangaCard from '@/components/MangaCard';
import { Button } from "@/components/ui/button";
import { Header } from '@/components/Header';
import Link from 'next/link';

const supabase = createClient();

const ITEMS_PER_PAGE = 20;

export default async function MangaPage({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = Number(searchParams.page) || 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data: mangaList, error, count } = await supabase
    .from('titles')
    .select('*', { count: 'exact' })
    .order('title_name', { ascending: true })
    .range(offset, offset + ITEMS_PER_PAGE - 1);

  if (error) {
    console.error('Error fetching manga:', error);
    return <div>Error loading manga. Please try again later.</div>;
  }

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Manga Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mangaList && mangaList.length > 0 ? (
          mangaList.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))
        ) : (
          <p className="text-white col-span-full text-center">No manga available at the moment.</p>
        )}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        {currentPage > 1 && (
          <Link href={`/manga?page=${currentPage - 1}`}>
            <Button>Previous</Button>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/manga?page=${currentPage + 1}`}>
            <Button>Next</Button>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
}
