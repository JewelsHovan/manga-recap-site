import { createClient } from '@/utils/supabase/server';
import { TopMangaCard } from '@/components/TopMangaCard';

const supabase = createClient();

export async function TopMangaSection() {
  // Fetch Top Manga/Manhwa/Webtoons with recap data
  const { data: topManga, error: topMangaError } = await supabase
    .from('titles')
    .select(`
      id,
      title_name,
      type,
      cover_image_url
    `)
    .order('release_date', { ascending: false })
    .limit(10);

  if (topMangaError) {
    console.error('Error fetching top manga:', topMangaError);
    return <p>Error loading top manga. Please try again later.</p>;
  }

  // Fetch recap data separately
  const { data: recapData, error: recapError } = await supabase
    .from('youtuberecaps')
    .select('title_id, views_count, likes_count');

  if (recapError) {
    console.error('Error fetching recap data:', recapError);
    return <p>Error loading recap data. Please try again later.</p>;
  }

  // Manually join the data
  const topMangaWithStats = topManga?.map(manga => {
    const mangaRecaps = recapData.filter(recap => recap.title_id === manga.id);
    return {
      ...manga,
      total_views: mangaRecaps.reduce((sum, recap) => sum + (recap.views_count || 0), 0),
      total_likes: mangaRecaps.reduce((sum, recap) => sum + (recap.likes_count || 0), 0),
    };
  });

  // Sort by total views (you can change this to total_likes if preferred)
  topMangaWithStats?.sort((a, b) => b.total_views - a.total_views);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Top Manga/Manhwa/Webtoons</h2>
      <div className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex space-x-4">
          {topMangaWithStats && topMangaWithStats.length > 0 ? (
            topMangaWithStats.map((manga) => (
              <div key={manga.id} className="snap-center shrink-0">
                <TopMangaCard manga={manga} />
              </div>
            ))
          ) : (
            <p className="text-center">No top manga available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
}
