import { createClient } from '@/utils/supabase/server';
import YouTubeRecapCard from '@/components/YouTubeRecapCard';
import Header from '@/components/Header';

export default async function YouTubeRecapsPage() {
  const supabase = createClient();
  const { data: recaps, error } = await supabase
    .from('youtuberecaps')
    .select('*')
    .order('views_count', { ascending: false }) // Order by a column, e.g., 'id'
    .limit(4);

  if (error) {
    console.error('Error fetching YouTube recaps:', error);
    return <div>Error loading YouTube recaps</div>;
  }

  // Shuffle the results to simulate randomness
  const shuffledRecaps = recaps.sort(() => Math.random() - 0.5);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Random YouTube Recaps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shuffledRecaps.map((recap) => (
            <YouTubeRecapCard key={recap.id} recap={recap} />
          ))}
        </div>
      </div>
    </div>
  );
}
