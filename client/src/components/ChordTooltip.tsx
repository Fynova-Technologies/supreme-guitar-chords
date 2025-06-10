import React, { useState, useRef, useEffect } from 'react';
import { chordDiagrams } from '@/data/ChordDiagrams';
import { ChordChart } from './ChordChart';

interface ChordTooltipProps {
  chord: string;
  children: React.ReactNode;
}

export const ChordTooltip: React.FC<ChordTooltipProps> = ({ chord, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  // Clean chord name for lookup
  const cleanChord = chord.replace(/[\/\(\)]/g, '').split(/[\/\(\)]/)[0];
  const diagram = chordDiagrams[cleanChord];
  
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (diagram) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      
      // Small delay before showing tooltip
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }
  };
  
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };
  
  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const rect = tooltip.getBoundingClientRect();
      
      // Adjust position if tooltip goes off screen
      let adjustedX = position.x - rect.width / 2;
      let adjustedY = position.y - rect.height - 10;
      
      if (adjustedX < 10) adjustedX = 10;
      if (adjustedX + rect.width > window.innerWidth - 10) {
        adjustedX = window.innerWidth - rect.width - 10;
      }
      if (adjustedY < 10) adjustedY = position.y + 30;
      
      tooltip.style.left = `${adjustedX}px`;
      tooltip.style.top = `${adjustedY}px`;
    }
  }, [isVisible, position]);
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  if (!diagram) {
    return <>{children}</>;
  }
  
  return (
    <>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-help"
      >
        {children}
      </span>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <ChordChart chord={chord} diagram={diagram} />
        </div>
      )}
    </>
  );
};