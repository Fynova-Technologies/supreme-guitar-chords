import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { 
  Share, 
  Copy, 
  ArrowUp, 
  ArrowDown, 
  Star,
  Printer,
  FileText,
  Play,
  Pause
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useChordVerseStore } from "@/lib/store";
import { toast } from "sonner";

interface ChordControlsProps {
  artistName: string;
  songTitle: string;
  chordsText: string;
  chordsRef: React.RefObject<HTMLDivElement>;
}

export function ChordControls({ artistName, songTitle, chordsText, chordsRef }: ChordControlsProps) {
  const { 
    currentTransposition, 
    setTransposition, 
    isAutoscrolling,
    setIsAutoscrolling,
    autoscrollSpeed,
    setAutoscrollSpeed,
    addFavorite,
    removeFavorite,
    isFavorite
  } = useChordVerseStore();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  // Check if the current song is a favorite
  const songIsFavorite = isFavorite(artistName, songTitle);
  
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (songIsFavorite) {
      removeFavorite(artistName, songTitle);
      toast.success("Removed from favorites");
    } else {
      addFavorite(artistName, songTitle);
      toast.success("Added to favorites");
    }
  };
  
  const transposePlus = () => {
    setTransposition(currentTransposition + 1);
  };
  
  const transposeMinus = () => {
    setTransposition(currentTransposition - 1);
  };
  
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(chordsText);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy. Try again.");
    }
  };
  
  const shareSong = async () => {
    const url = window.location.href;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${songTitle} by ${artistName}`,
          text: `Check out the chords for "${songTitle}" by ${artistName}`,
          url
        });
        toast.success("Shared successfully");
      } else {
        // Fallback to copy URL
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        toast.error("Failed to share");
      }
    }
  };
  
  const printChords = () => {
    window.print();
  };

  const exportToPDF = async () => {
    if (!chordsRef.current) {
      toast.error("Unable to generate PDF. Please try again.");
      return;
    }

    setIsGeneratingPDF(true);
    
    try {
      const element = chordsRef.current;
      
      // Create a clone of the element for PDF generation
      const clonedElement = element.cloneNode(true) as HTMLElement;
      
      // Style the cloned element for better PDF output
      clonedElement.style.position = 'absolute';
      clonedElement.style.left = '-9999px';
      clonedElement.style.top = '0';
      clonedElement.style.width = element.offsetWidth + 'px';
      clonedElement.style.height = 'auto';
      clonedElement.style.maxHeight = 'none';
      clonedElement.style.overflow = 'visible';
      clonedElement.style.backgroundColor = 'white';
      clonedElement.style.color = 'black';
      clonedElement.style.padding = '20px';
      
      // Add title to the PDF content
      const titleElement = document.createElement('div');
      titleElement.innerHTML = `
        <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px; color: black;">${songTitle}</h1>
        <p style="font-size: 18px; margin-bottom: 20px; color: #666;">by ${artistName}</p>
        ${currentTransposition !== 0 ? `<p style="font-size: 14px; margin-bottom: 15px; color: #888;">Transposed: ${currentTransposition > 0 ? '+' : ''}${currentTransposition}</p>` : ''}
      `;
      clonedElement.insertBefore(titleElement, clonedElement.firstChild);
      
      // Append to body temporarily
      document.body.appendChild(clonedElement);
      
      // Generate canvas from the cloned element
      const canvas = await html2canvas(clonedElement, {
        scale: 2, // Higher quality
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: clonedElement.scrollWidth,
        height: clonedElement.scrollHeight,
      });
      
      // Remove the cloned element
      document.body.removeChild(clonedElement);
      
      // Create PDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Calculate dimensions to fit the page
      const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
      const finalWidth = imgWidth * 0.264583 * ratio;
      const finalHeight = imgHeight * 0.264583 * ratio;
      
      // Center the image on the page
      const x = (pdfWidth - finalWidth) / 2;
      const y = (pdfHeight - finalHeight) / 2;
      
      pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
      
      // Save the PDF
      const fileName = `${songTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_chords.pdf`;
      pdf.save(fileName);
      
      toast.success("PDF generated successfully!");
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  
  const toggleAutoscroll = () => {
    setIsAutoscrolling(!isAutoscrolling);
    if (!isAutoscrolling) {
      toast.success("Auto-scroll started");
    } else {
      toast.info("Auto-scroll paused");
    }
  };
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded-lg shadow-sm border">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={handleFavoriteToggle}
          className="flex items-center gap-1"
        >
          <Star className={`h-4 w-4 ${songIsFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
          {songIsFavorite ? "Favorited" : "Favorite"}
        </Button>
        
        <Button 
          variant="secondary" 
          size="sm"
          onClick={copyToClipboard}
          className="flex items-center gap-1"
        >
          <Copy className="h-4 w-4" />
          Copy
        </Button>
        
        <Button 
          variant="secondary" 
          size="sm"
          onClick={shareSong}
          className="flex items-center gap-1"
        >
          <Share className="h-4 w-4" />
          Share
        </Button>
        
        <div className="sm:col-span-1 flex gap-1">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={printChords} 
            className="flex-1"
          >
            <Printer className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={exportToPDF}
            className="flex-1"
            id="pdf-btn"
          >
            <FileText className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Transpose ({currentTransposition > 0 ? `+${currentTransposition}` : currentTransposition})</span>
          <div className="flex gap-1">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={transposeMinus} 
              className="h-8 w-8 p-0"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setTransposition(0)} 
              className="h-8"
            >
              Reset
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={transposePlus} 
              className="h-8 w-8 p-0"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Auto-scroll</span>
          <Button 
            variant={isAutoscrolling ? "default" : "outline"}
            size="sm" 
            onClick={toggleAutoscroll} 
            className="h-8"
          >
            {isAutoscrolling ? (
              <>
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-1" />
                Play
              </>
            )}
          </Button>
        </div>
        
        {isAutoscrolling && (
          <div className="pt-2">
            <span className="text-xs text-muted-foreground mb-1 block">
              {/* Speed */}
              Speed: {autoscrollSpeed.toFixed(1)}x
            </span>
            <Slider 
              min={1.1} 
              max={15} 
              step={1} 
              value={[autoscrollSpeed * 10]} 
              onValueChange={(values) => setAutoscrollSpeed(values[0] / 10)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
