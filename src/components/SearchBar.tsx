import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Suggestion {
  id: string;
  title: string;
}

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 2) {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSuggestionClick = (title: string) => {
    router.push(`/manga/${encodeURIComponent(title)}`);
  };

  return (
    <div className="relative">
      <div className="flex">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a manga, manhwa, or webtoon recap..."
          className="rounded-r-none"
        />
        <Button className="rounded-l-none">Search</Button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-b shadow-lg">
          {suggestions.map((suggestion: Suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.title)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
