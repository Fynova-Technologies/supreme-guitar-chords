
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { ArtistCard } from "@/components/ArtistCard";
import { Artist } from "@/types";
import { fuzzySearch } from "@/lib/utils";
import { useChordVerseStore } from "@/lib/store";
// import chordsData from "@/data/chordsData.json";
import music from "@/data/artists.json"

function Index() {
  const { searchQuery } = useChordVerseStore();
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  
  useEffect(() => {
    const artists = music.artists as unknown as Artist[];
    
    if (searchQuery && searchQuery.trim() !== '') {
      const results = fuzzySearch(artists, searchQuery, ['name', 'songs.title']);
      setFilteredArtists(results);
    } else {
      setFilteredArtists(artists);
    }
  }, [searchQuery]);
  
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          {searchQuery ? 'Search Results' : 'Artists'}
        </h1>
        
        {filteredArtists.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            {searchQuery 
              ? "No artists or songs found matching your search." 
              : "No artists available."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Index;
