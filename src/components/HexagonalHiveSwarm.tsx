"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AGENTS = [
  { id: 0, title: 'Architect', action: 'Analyzing Requirements', color: '#00f3ff' }, // Neon Cyan
  { id: 1, title: 'Developer', action: 'Writing Core Logic', color: '#0066ff' }, // Electric Blue
  { id: 2, title: 'Security Tester', action: 'Running Pentests', color: '#b800ff' }, // Deep Purple
  { id: 3, title: 'QA Engineer', action: 'Running Unit Tests', color: '#00f3ff' }, 
  { id: 4, title: 'DevOps', action: 'Building Pipeline', color: '#0066ff' },
  { id: 5, title: 'Project Manager', action: 'Verifying Scope', color: '#b800ff' },
];

export default function HexagonalHiveSwarm() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % AGENTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const center = { x: 500, y: 500 };
  const smallHexSize = 100;
  const largeHexSize = 160;
  
  // Pointy-topped hexagon points generators
  const buildHexagonPoints = (radius: number) => {
    return Array.from({ length: 6 }).map((_, i) => {
      const angle_deg = 60 * i - 30; 
      const angle_rad = Math.PI / 180 * angle_deg;
      return `${(radius * Math.cos(angle_rad)).toFixed(2)},${(radius * Math.sin(angle_rad)).toFixed(2)}`;
    }).join(' ');
  };
  
  const smallHexPoints = buildHexagonPoints(smallHexSize);
  const largeHexPoints = buildHexagonPoints(largeHexSize);

  // Outer hexagons distances (distance between center of large and center of small)
  // Apothem = R * sqrt(3) / 2
  // Center to small center gap = Apothem_large + Apothem_small + gap
  const apothemLarge = largeHexSize * 0.866;
  const apothemSmall = smallHexSize * 0.866;
  const outerDistance = apothemLarge + apothemSmall + 40; 

  const outerCenters = AGENTS.map((_, i) => {
    const angle_deg = 60 * i;
    const angle_rad = Math.PI / 180 * angle_deg;
    return {
      x: Number((center.x + outerDistance * Math.cos(angle_rad)).toFixed(2)),
      y: Number((center.y + outerDistance * Math.sin(angle_rad)).toFixed(2)),
    };
  });

  return (
    <div className="w-full relative max-w-3xl aspect-square mx-auto bg-gray-950 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl flex items-center justify-center font-sans tracking-wide">
      {/* Background radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-gray-950/80 to-gray-950 pointer-events-none" />

      <svg viewBox="0 0 1000 1000" className="w-full h-full absolute inset-0 z-10 drop-shadow-2xl">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Render Connection Lines to Active Agent as Particle Streams */}
        <AnimatePresence>
          {AGENTS.map((agent, i) => {
            if (i !== activeIndex) return null;
            return (
              <motion.line
                key={`stream-${agent.id}`}
                x1={outerCenters[i].x}
                y1={outerCenters[i].y}
                x2={center.x}
                y2={center.y}
                stroke={agent.color}
                strokeWidth="4"
                strokeDasharray="10 20"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  strokeDashoffset: { ease: "linear", duration: 1, repeat: Infinity },
                  opacity: { duration: 0.4 }
                }}
                style={{ filter: "url(#glow)" }}
              />
            );
          })}
        </AnimatePresence>

        {/* Central Hexagon */}
        <g transform={`translate(${center.x}, ${center.y})`}>
          <motion.polygon
            points={largeHexPoints}
            fill="rgba(15, 23, 42, 0.7)"
            stroke={AGENTS[activeIndex].color}
            strokeWidth="3"
            animate={{
              boxShadow: `0 0 40px ${AGENTS[activeIndex].color}`
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ filter: "url(#glow)" }}
          />
          {/* Central Text */}
          <foreignObject x={-largeHexSize} y={-largeHexSize} width={largeHexSize * 2} height={largeHexSize * 2}>
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`center-text-${activeIndex}`}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: AGENTS[activeIndex].color }}></span>
                    Active Mission
                  </div>
                  <div className="text-white font-medium text-lg leading-tight mt-1" style={{ textShadow: `0 0 15px ${AGENTS[activeIndex].color}` }}>
                    {AGENTS[activeIndex].action}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </foreignObject>
        </g>

        {/* Outer Hexagons mapping */}
        {AGENTS.map((agent, i) => {
          const isActive = i === activeIndex;
          const pos = outerCenters[i];

          return (
            <g key={agent.id} transform={`translate(${pos.x}, ${pos.y})`}>
              <motion.polygon
                points={smallHexPoints}
                initial={{ fill: "rgba(15, 23, 42, 0.4)", stroke: "rgba(255, 255, 255, 0.1)", strokeWidth: 2 }}
                animate={{
                  fill: isActive ? `rgba(15, 23, 42, 0.9)` : "rgba(15, 23, 42, 0.4)",
                  stroke: isActive ? agent.color : "rgba(255, 255, 255, 0.15)",
                  strokeWidth: isActive ? 4 : 2,
                }}
                transition={{ duration: 0.4 }}
                style={isActive ? { filter: "url(#glow)" } : {}}
              />
              
              <foreignObject x={-smallHexSize} y={-smallHexSize} width={smallHexSize * 2} height={smallHexSize * 2}>
                <div className="w-full h-full flex items-center justify-center text-center p-2 relative">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      color: isActive ? '#fff' : '#64748b'
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center"
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="absolute inset-0 bg-white opacity-[0.03] rounded-full pointer-events-none"
                      />
                    )}
                    <span className="text-xs font-semibold tracking-wider uppercase mb-1 relative z-10 transition-colors duration-300" style={isActive ? { color: agent.color } : {}}>
                      {agent.title}
                    </span>
                  </motion.div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
