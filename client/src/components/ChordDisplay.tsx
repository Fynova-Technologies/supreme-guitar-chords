// import { useEffect, useRef, useState, forwardRef } from "react";
// import { useChordVerseStore } from "@/lib/store";
// import { parseAndTransposeChords } from "@/lib/utils";
// import { ChordTooltip } from "./ChordTooltip";

// interface ChordDisplayProps {
//   chordsText: string;
//   originalKey: string;
// }

// export const ChordDisplay = forwardRef<HTMLDivElement, ChordDisplayProps>(
//   ({ chordsText, originalKey }, ref) => {
//     const { currentTransposition, isAutoscrolling, autoscrollSpeed } = useChordVerseStore();
//     const containerRef = useRef<HTMLDivElement>(null);
//     const animationFrameRef = useRef<number>();
//     const [simpleContent, setSimpleContent] = useState<React.ReactNode[]>([]);
    
//     // Process text to add interactive chord tooltips
//     useEffect(() => {
//       if (chordsText) {
//         const lines = chordsText.split('\n');
        
//         const processedLines = lines.map((line, lineIndex) => {
//           // Enhanced chord regex to match your JSON format
//           const chordRegex = /\b([A-G][#b]?(?:maj|min|m|M|sus|add|dim|aug|°|ø)?[0-9]*(?:\/[A-G][#b]?)?)\b/g;
//           let lastIndex = 0;
//           const lineElements: React.ReactNode[] = [];
//           let match;
          
//           // Check if this line contains section markers like [Verse 1], [Chorus], etc.
//           const sectionMatch = line.match(/^\[(.*?)\]$/);
//           if (sectionMatch) {
//             return (
//               <div key={lineIndex} className="font-bold text-lg text-blue-700 mt-4 mb-2">
//                 {line}
//               </div>
//             );
//           }
          
//           // Check if line is empty
//           if (line.trim() === '') {
//             return <div key={lineIndex} className="h-4"></div>;
//           }
          
//           // Process chords in the line
//           while ((match = chordRegex.exec(line)) !== null) {
//             // Add text before chord
//             if (match.index > lastIndex) {
//               lineElements.push(
//                 <span key={`text-${lineIndex}-${lastIndex}`}>
//                   {line.slice(lastIndex, match.index)}
//                 </span>
//               );
//             }
            
//             // Add chord with tooltip
//             lineElements.push(
//               <ChordTooltip key={`chord-${lineIndex}-${match.index}`} chord={match[1]}>
//                 <span className="font-bold text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-1 py-0.5 rounded transition-all duration-200 cursor-help select-none">
//                   {match[1]}
//                 </span>
//               </ChordTooltip>
//             );
            
//             lastIndex = match.index + match[0].length;
//           }
          
//           // Add remaining text
//           if (lastIndex < line.length) {
//             lineElements.push(
//               <span key={`text-${lineIndex}-${lastIndex}`}>
//                 {line.slice(lastIndex)}
//               </span>
//             );
//           }
          
//           return (
//             <div key={lineIndex} className="whitespace-pre leading-relaxed">
//               {lineElements.length > 0 ? lineElements : line}
//             </div>
//           );
//         });
        
//         setSimpleContent(processedLines);
//       } else {
//         setSimpleContent([]);
//       }
//     }, [chordsText]);
    
//     // Handle autoscroll
//     useEffect(() => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//         animationFrameRef.current = undefined;
//       }
      
//       if (!isAutoscrolling || !containerRef.current) {
//         return;
//       }
      
//       const container = containerRef.current;
      
//       const scroll = () => {
//         if (container && isAutoscrolling) {
//           if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
//             container.scrollTop = 0;
//           } else {
//             container.scrollTop += autoscrollSpeed * 1.5;
//           }
          
//           if (isAutoscrolling) {
//             animationFrameRef.current = requestAnimationFrame(scroll);
//           }
//         }
//       };
      
//       animationFrameRef.current = requestAnimationFrame(scroll);
      
//       return () => {
//         if (animationFrameRef.current) {
//           cancelAnimationFrame(animationFrameRef.current);
//           animationFrameRef.current = undefined;
//         }
//       };
//     }, [isAutoscrolling, autoscrollSpeed]);
    
//     return (
//       <div 
//         ref={(node) => {
//           containerRef.current = node;
//           if (typeof ref === 'function') {
//             ref(node);
//           } else if (ref) {
//             ref.current = node;
//           }
//         }}
//         id="chords-section"
//         className="relative h-full w-full max-w-full overflow-y-auto rounded-lg bg-card p-6"
//         style={{ maxHeight: "70vh" }}
//       >
//         <div className="font-mono text-base leading-relaxed">
//           {simpleContent.length > 0 ? simpleContent : (
//             <div className="text-muted-foreground">
//               Debug: No content to display
//               <br />
//               chordsText length: {chordsText?.length || 0}
//               <br />
//               chordsText preview: {chordsText ? chordsText.substring(0, 50) + "..." : "undefined"}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// );

// ChordDisplay.displayName = "ChordDisplay";



// Updated ChordDisplay.tsx with better debugging and content handling
import { useEffect, useRef, useState, forwardRef } from "react";
import { useChordVerseStore } from "@/lib/store";
import { parseAndTransposeChords } from "@/lib/utils";
import { ChordTooltip } from "./ChordTooltip";

interface ChordDisplayProps {
  chordsText: string;
  originalKey: string;
}

export const ChordDisplay = forwardRef<HTMLDivElement, ChordDisplayProps>(
  ({ chordsText, originalKey }, ref) => {
    const { currentTransposition, isAutoscrolling, autoscrollSpeed } = useChordVerseStore();
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number>();
    const [simpleContent, setSimpleContent] = useState<React.ReactNode[]>([]);
    
    // Process text to add interactive chord tooltips
    useEffect(() => {
      console.log('ChordDisplay: Processing chordsText:', {
        hasContent: !!chordsText,
        length: chordsText?.length || 0,
        firstChars: chordsText ? chordsText.substring(0, 100) : 'No content'
      });

      if (chordsText && chordsText.trim()) {
        const lines = chordsText.split('\n');
        console.log('ChordDisplay: Split into', lines.length, 'lines');
        
        const processedLines = lines.map((line, lineIndex) => {
          // Enhanced chord regex to match your JSON format
          const chordRegex = /\b([A-G][#b]?(?:maj|min|m|M|sus|add|dim|aug|°|ø)?[0-9]*(?:\/[A-G][#b]?)?)\b/g;
          let lastIndex = 0;
          const lineElements: React.ReactNode[] = [];
          let match;
          
          // Check if this line contains section markers like [Verse 1], [Chorus], etc.
          const sectionMatch = line.match(/^\[(.*?)\]$/);
          if (sectionMatch) {
            return (
              <div key={lineIndex} className="font-bold text-lg text-blue-700 mt-4 mb-2">
                {line}
              </div>
            );
          }
          
          // Check if line is empty
          if (line.trim() === '') {
            return <div key={lineIndex} className="h-4"></div>;
          }
          
          // Process chords in the line
          while ((match = chordRegex.exec(line)) !== null) {
            // Add text before chord
            if (match.index > lastIndex) {
              lineElements.push(
                <span key={`text-${lineIndex}-${lastIndex}`}>
                  {line.slice(lastIndex, match.index)}
                </span>
              );
            }
            
            // Add chord with tooltip
            lineElements.push(
              <ChordTooltip key={`chord-${lineIndex}-${match.index}`} chord={match[1]}>
                <span className="font-bold text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-1 py-0.5 rounded transition-all duration-200 cursor-help select-none">
                  {match[1]}
                </span>
              </ChordTooltip>
            );
            
            lastIndex = match.index + match[0].length;
          }
          
          // Add remaining text
          if (lastIndex < line.length) {
            lineElements.push(
              <span key={`text-${lineIndex}-${lastIndex}`}>
                {line.slice(lastIndex)}
              </span>
            );
          }
          
          return (
            <div key={lineIndex} className="whitespace-pre-wrap leading-relaxed">
              {lineElements.length > 0 ? lineElements : line}
            </div>
          );
        });
        
        console.log('ChordDisplay: Processed', processedLines.length, 'lines');
        setSimpleContent(processedLines);
      } else {
        console.log('ChordDisplay: No content to process');
        setSimpleContent([]);
      }
    }, [chordsText]);
    
    // Handle autoscroll
    useEffect(() => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
      
      if (!isAutoscrolling || !containerRef.current) {
        return;
      }
      
      const container = containerRef.current;
      
      const scroll = () => {
        if (container && isAutoscrolling) {
          if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += autoscrollSpeed * 1.5;
          }
          
          if (isAutoscrolling) {
            animationFrameRef.current = requestAnimationFrame(scroll);
          }
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(scroll);
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = undefined;
        }
      };
    }, [isAutoscrolling, autoscrollSpeed]);
    
    return (
      <div 
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        id="chords-section"
        className="relative h-full w-full max-w-full overflow-y-auto rounded-lg bg-card p-6"
        style={{ maxHeight: "70vh" }}
      >
        <div className="font-mono text-base leading-relaxed">
          {chordsText && chordsText.trim() ? (
            simpleContent.length > 0 ? simpleContent : (
              <div className="text-muted-foreground">
                Processing content...
              </div>
            )
          ) : (
            <div className="text-muted-foreground">
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">No chords/lyrics available</h3>
                <p>This song doesn't have chord/lyric data in the database.</p>
              </div>
              
              {/* Debug info */}
              <div className="bg-muted p-4 rounded text-sm">
                <h4 className="font-bold mb-2">Debug Info:</h4>
                <p>chordsText provided: {chordsText ? 'Yes' : 'No'}</p>
                <p>chordsText type: {typeof chordsText}</p>
                <p>chordsText length: {chordsText?.length || 0}</p>
                <p>chordsText is empty string: {chordsText === ''}</p>
                <p>chordsText after trim: "{chordsText?.trim()}"</p>
                {chordsText && (
                  <div className="mt-2">
                    <p>First 200 characters:</p>
                    <pre className="bg-background p-2 rounded mt-1 text-xs overflow-x-auto">
                      {chordsText.substring(0, 200)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ChordDisplay.displayName = "ChordDisplay";