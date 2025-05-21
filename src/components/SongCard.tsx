
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Song } from "@/types";
import { Button } from "@/components/ui/button";
import { useChordVerseStore } from "@/lib/store";

interface SongCardProps {
  song: Song;
  artistName: string;
}

export function SongCard({ song, artistName }: SongCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useChordVerseStore();
  const songIsFavorite = isFavorite(artistName, song.title);
  
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (songIsFavorite) {
      removeFavorite(artistName, song.title);
    } else {
      addFavorite(artistName, song.title);
    }
  };
  
  return (
    <Link to={`/artist/${encodeURIComponent(artistName)}/song/${encodeURIComponent(song.title)}`}>
      <Card className="cursor-pointer transition-shadow hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-bold">{song.title}</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleFavoriteToggle}
          >
            <Star 
              className={`h-4 w-4 ${songIsFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`}
            />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm">
            <div className="rounded bg-secondary px-2 py-1">Key: {song.key}</div>
            {song.difficulty && (
              <div className="rounded bg-secondary px-2 py-1">
                {song.difficulty.charAt(0).toUpperCase() + song.difficulty.slice(1)}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
