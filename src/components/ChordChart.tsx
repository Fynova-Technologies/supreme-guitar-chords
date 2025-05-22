import React from 'react';

export interface ChordDiagram {
  name: string;
  positions: number[];
  fingering: number[];
  frets: number;
}

interface ChordChartProps {
  chord: string;
  diagram: ChordDiagram;
}

export const ChordChart: React.FC<ChordChartProps> = ({ chord, diagram }) => {
  const { positions, fingering, frets } = diagram;
  const strings = 6;
  const fretCount = Math.max(frets, 4);
  
  // SVG dimensions
  const width = 120;
  const height = 140;
  const stringSpacing = 16;
  const fretSpacing = 20;
  const startX = 20;
  const startY = 30;
  
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
      <div className="text-center font-bold text-sm mb-2 text-gray-800">{chord}</div>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Guitar nut (thick line at top) */}
        <line
          x1={startX}
          y1={startY}
          x2={startX + (strings - 1) * stringSpacing}
          y2={startY}
          stroke="#333"
          strokeWidth={3}
        />
        
        {/* Fret lines */}
        {Array.from({ length: fretCount }, (_, i) => (
          <line
            key={`fret-${i + 1}`}
            x1={startX}
            y1={startY + (i + 1) * fretSpacing}
            x2={startX + (strings - 1) * stringSpacing}
            y2={startY + (i + 1) * fretSpacing}
            stroke="#666"
            strokeWidth={1}
          />
        ))}
        
        {/* String lines */}
        {Array.from({ length: strings }, (_, i) => (
          <line
            key={`string-${i}`}
            x1={startX + i * stringSpacing}
            y1={startY}
            x2={startX + i * stringSpacing}
            y2={startY + fretCount * fretSpacing}
            stroke="#333"
            strokeWidth={1}
          />
        ))}
        
        {/* Finger positions */}
        {positions.map((pos, stringIndex) => {
          if (pos === -1) {
            // X for muted strings
            return (
              <g key={`muted-${stringIndex}`}>
                <line
                  x1={startX + stringIndex * stringSpacing - 4}
                  y1={startY - 15}
                  x2={startX + stringIndex * stringSpacing + 4}
                  y2={startY - 7}
                  stroke="#d63031"
                  strokeWidth={2}
                />
                <line
                  x1={startX + stringIndex * stringSpacing + 4}
                  y1={startY - 15}
                  x2={startX + stringIndex * stringSpacing - 4}
                  y2={startY - 7}
                  stroke="#d63031"
                  strokeWidth={2}
                />
              </g>
            );
          } else if (pos === 0) {
            // Open string (circle)
            return (
              <circle
                key={`open-${stringIndex}`}
                cx={startX + stringIndex * stringSpacing}
                cy={startY - 11}
                r={4}
                fill="none"
                stroke="#00b894"
                strokeWidth={2}
              />
            );
          } else {
            // Fretted note (filled circle)
            return (
              <circle
                key={`fret-${stringIndex}`}
                cx={startX + stringIndex * stringSpacing}
                cy={startY + (pos - 0.5) * fretSpacing}
                r={6}
                fill="#2d3436"
              />
            );
          }
        })}
        
        {/* Fret numbers */}
        {Array.from({ length: fretCount }, (_, i) => (
          <text
            key={`fret-num-${i}`}
            x={startX - 10}
            y={startY + (i + 0.5) * fretSpacing + 3}
            fontSize="10"
            fill="#666"
            textAnchor="middle"
          >
            {i + 1}
          </text>
        ))}
        
        {/* String labels (E A D G B E) */}
        {['E', 'A', 'D', 'G', 'B', 'E'].map((note, i) => (
          <text
            key={`string-label-${i}`}
            x={startX + i * stringSpacing}
            y={startY + fretCount * fretSpacing + 15}
            fontSize="8"
            fill="#999"
            textAnchor="middle"
          >
            {note}
          </text>
        ))}
      </svg>
    </div>
  );
};