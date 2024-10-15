import { createClient } from '@/utils/supabase/server';

export async function generateMetadata({ params }: { params: { title: string } }) {
  // ... (optional: generate metadata based on the manga title)
}

async function getManga(title: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('mangas')
    .select('*')
    .eq('title', title)
    .single();

  if (error || !data) {
    throw new Error('Manga not found');
  }

  return data;
}

export default async function MangaPage({ params }: { params: { title: string } }) {
  const manga = await getManga(params.title);

  return (
    <div>
      <h1>{manga.title}</h1>
      {/* Add more manga details here */}
    </div>
  );
}
