
import { useEffect, useState } from "react";
import { useChordVerseStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Search, SearchX } from "lucide-react";

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useChordVerseStore();
  const [inputValue, setInputValue] = useState(searchQuery);
  
  // Debounce search query updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery]);
  
  const handleClearSearch = () => {
    setInputValue("");
    setSearchQuery("");
  };
  
  return (
    <div className="relative w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search artists or songs..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="pl-9 pr-8 w-full"
      />
      {inputValue && (
        <button
          className="absolute right-2.5 top-2.5 h-5 w-5 text-muted-foreground hover:text-foreground"
          onClick={handleClearSearch}
          aria-label="Clear search"
        >
          <SearchX className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
