
import { useEffect, useRef, useState } from "react";
import { useChordVerseStore } from "@/lib/store";
import { parseAndTransposeChords, formatChordsText } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChordDisplayProps {
  chordsText: string;
  originalKey: string;
}

export function ChordDisplay({ chordsText, originalKey }: ChordDisplayProps) {
  const { currentTransposition, isAutoscrolling, autoscrollSpeed } = useChordVerseStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [transposedText, setTransposedText] = useState(chordsText);
  
  // Handle transposition
  useEffect(() => {
    setTransposedText(parseAndTransposeChords(chordsText, currentTransposition));
  }, [chordsText, currentTransposition]);
  
  // Handle autoscroll with improved implementation
  useEffect(() => {
    if (!isAutoscrolling || !containerRef.current) return;
    
    const container = containerRef.current;
    let animationFrameId: number;
    
    const scroll = () => {
      if (container) {
        // Increase the scroll increment for more noticeable scrolling
        container.scrollTop += autoscrollSpeed * 0.2;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoscrolling, autoscrollSpeed]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative h-full w-full max-w-full overflow-y-auto rounded-lg bg-card p-6"
      style={{ maxHeight: "70vh" }}
    >
      <div
        className="font-mono text-base leading-relaxed"
        dangerouslySetInnerHTML={{ 
          __html: formatChordsText(transposedText)
        }}
      />
    </div>
  );
}
