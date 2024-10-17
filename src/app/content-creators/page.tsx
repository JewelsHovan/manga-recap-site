import { createClient } from '@/utils/supabase/server';
import ContentCreatorCard from '@/components/ContentCreatorCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function ContentCreatorsPage() {
  const supabase = createClient();
  const { data: creators, error } = await supabase.from('contentcreators').select('*');

  if (error) {
    console.error('Error fetching content creators:', error);
    return <div>Error loading content creators</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Content Creators</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {creators.map((creator) => (
            <ContentCreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
