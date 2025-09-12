import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Artist } from "@/types";

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  // Safe access to songs array with fallback to empty array
  const songsCount = artist.songs?.length || 0;
  
  return (
    <Link to={`/artist/${encodeURIComponent(artist.name)}`}>
      <Card className="cursor-pointer transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle>{artist.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {songsCount} song{songsCount !== 1 ? 's' : ''}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}