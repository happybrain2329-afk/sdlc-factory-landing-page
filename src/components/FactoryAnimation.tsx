"use client";

import { motion } from "framer-motion";

export default function FactoryAnimation() {
  return (
    <section id="factory" className="py-8 pb-32 relative overflow-x-hidden">
      {/* Heading — centred with padding */}
      <div className="px-6 md:px-16">
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-primary tracking-[3px] uppercase mb-4">
            The Assembly Line
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold tracking-tighter">
            Watch Your Tickets Get{" "}
            <span className="text-secondary">Manufactured</span> Into Features
          </h2>
        </motion.div>
      </div>

      {/* Factory Container — true 100vw */}
      <div className="relative w-full">
        <div className="relative h-[680px] w-full select-none">

          {/* === RAW TICKETS (Left side — flush to screen edge) === */}
          <div className="absolute left-2 top-[40px] w-[220px]">

            <div
              className="absolute top-0 left-3 w-[190px] bg-surface-container-high border border-outline-variant/50 p-3 shadow-xl"
              style={{ animation: "floatTicket1 4s ease-in-out infinite" }}
            >
              <div className="font-mono text-xs text-outline mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-error inline-block shrink-0" />
                SDLC-142
              </div>
              <div className="text-sm text-on-surface font-medium">Fix auth token bug</div>
            </div>

            <div
              className="absolute top-[95px] left-6 w-[190px] bg-surface-container-high border border-outline-variant/50 p-3 shadow-xl"
              style={{ animation: "floatTicket2 4.5s ease-in-out infinite 0.5s" }}
            >
              <div className="font-mono text-xs text-outline mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary inline-block shrink-0" />
                SDLC-87
              </div>
              <div className="text-sm text-on-surface font-medium">Build user dashboard</div>
            </div>

            <div
              className="absolute top-[190px] left-0 w-[190px] bg-surface-container-high border border-outline-variant/50 p-3 shadow-xl"
              style={{ animation: "floatTicket3 3.8s ease-in-out infinite 1s" }}
            >
              <div className="font-mono text-xs text-outline mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary inline-block shrink-0" />
                SDLC-203
              </div>
              <div className="text-sm text-on-surface font-medium">Add REST API endpoint</div>
            </div>

            <div
              className="absolute top-[285px] left-8 w-[190px] bg-surface-container-high border border-outline-variant/50 p-3 shadow-xl"
              style={{ animation: "floatTicket4 4.2s ease-in-out infinite 0.3s" }}
            >
              <div className="font-mono text-xs text-outline mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary-dim inline-block shrink-0" />
                SDLC-56
              </div>
              <div className="text-sm text-on-surface font-medium">Refactor DB queries</div>
            </div>

          </div>

          {/* === FLOW ARROW IN === */}
          <div
            className="absolute bottom-[160px] left-[11%] text-2xl text-primary font-mono font-bold"
            style={{ animation: "arrowPulse 2s ease-in-out infinite" }}
          >
            &#9658;&#9658;&#9658;
          </div>

          {/* === ROBOT STATIONS === */}
          <RobotStation1 />
          <RobotStation2 />
          <RobotStation3 />
          <RobotStation4 />
          <RobotStation5 />

          {/* === CONVEYOR BELT === */}
          <div className="absolute bottom-[90px] left-0 right-0 h-14 bg-surface-container border-2 border-outline-variant/60 overflow-hidden">
            <div
              className="absolute inset-1"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #45484F 0px, #45484F 20px, #161A21 20px, #161A21 40px)",
                animation: "conveyorScroll 2s linear infinite",
              }}
            />
          </div>

          {/* === MOVING TICKETS ON BELT — sit inside the belt === */}
          {[
            { delay: 0,  label: "Tickets",       icon: "▣" },
            { delay: -5, label: "Code",           icon: "{}" },
            { delay: -10, label: "Documentation", icon: "≡" },
          ].map(({ delay, label, icon }) => (
            <div
              key={label}
              className="absolute bottom-[93px] w-[150px] h-[48px] bg-primary border-2 border-on-primary/30 shadow-[0_0_20px_rgba(143,245,255,0.6)] flex items-center gap-3 px-4"
              style={{ animation: `moveOnBelt 14s linear infinite ${delay}s` }}
            >
              <span className="text-on-primary font-mono text-base font-black shrink-0 leading-none opacity-70">
                {icon}
              </span>
              <span className="text-on-primary font-[family-name:var(--font-space-grotesk)] text-sm font-black uppercase tracking-wider leading-none">
                {label}
              </span>
            </div>
          ))}

          {/* Conveyor legs */}
          {["8%", "30%", "52%", "74%", "92%"].map((left, i) => (
            <div
              key={i}
              className="absolute bottom-[33px] w-3 h-[57px] bg-outline-variant"
              style={{ left }}
            />
          ))}

          {/* === FLOW ARROW OUT === */}
          <div
            className="absolute bottom-[160px] right-[11%] text-2xl text-primary font-mono font-bold"
            style={{ animation: "arrowPulse 2s ease-in-out infinite" }}
          >
            &#9658;&#9658;&#9658;
          </div>

          {/* === POLISHED OUTPUT (Right side — flush to screen edge) === */}
          <div className="absolute right-2 top-[40px] w-[220px]">
            {[
              {
                title: "Auth System — Complete",
                meta: "14 tests passed • PR merged",
                top: "0",
                right: "6px",
                delay: "0s",
              },
              {
                title: "User Dashboard — Live",
                meta: "98% coverage • deployed",
                top: "115px",
                right: "26px",
                delay: "0.5s",
              },
              {
                title: "REST API v2 — Released",
                meta: "docs generated • 0 bugs",
                top: "230px",
                right: "2px",
                delay: "1s",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="absolute w-[200px] bg-gradient-to-br from-primary/10 to-primary-dim/5 border border-primary/40 p-3.5 shadow-[0_4px_24px_rgba(143,245,255,0.15)]"
                style={{
                  top: card.top,
                  right: card.right,
                  animation: `polishedFloat 4s ease-in-out infinite ${card.delay}`,
                }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-5 h-5 bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span className="text-sm font-bold text-primary">Shipped</span>
                </div>
                <div className="text-sm text-on-surface font-semibold leading-tight">
                  {card.title}
                </div>
                <div className="font-mono text-xs text-primary-dim mt-1">
                  {card.meta}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ===== ROBOT STATION COMPONENTS ===== */

function RobotStation1() {
  return (
    <div className="absolute flex flex-col items-center" style={{ left: "16%", bottom: "150px" }}>
      <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[240px] drop-shadow-xl">
        <rect x="20" y="130" width="40" height="25" rx="0" fill="#161A21" stroke="#73757D" strokeWidth="2"/>
        <rect x="15" y="70" width="50" height="60" rx="0" fill="#10131A" stroke="#73757D" strokeWidth="2"/>
        <rect x="22" y="78" width="36" height="22" rx="0" fill="#0B0E14" stroke="#8FF5FF" strokeWidth="1.8"/>
        <circle cx="33" cy="89" r="4" fill="#8FF5FF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="47" cy="89" r="4" fill="#8FF5FF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" begin="0.3s"/>
        </circle>
        <line x1="40" y1="70" x2="40" y2="55" stroke="#73757D" strokeWidth="2.5"/>
        <circle cx="40" cy="52" r="5" fill="#BF81FF">
          <animate attributeName="r" values="5;6.5;5" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <g style={{ transformOrigin: "center top", animation: "armStamp 3s ease-in-out infinite" }}>
          <rect x="62" y="82" width="28" height="10" rx="0" fill="#45484F" stroke="#73757D" strokeWidth="1.5"/>
          <circle cx="88" cy="87" r="7" fill="#161A21" stroke="#8FF5FF" strokeWidth="2"/>
          <line x1="85" y1="93" x2="82" y2="102" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
          <line x1="91" y1="93" x2="94" y2="102" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        </g>
        <rect x="25" y="108" width="10" height="5" rx="0" fill="#8FF5FF">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
        </rect>
      </svg>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70px] h-[35px] rounded-full bg-primary blur-[18px]" style={{ animation: "glowPulse 3s ease-in-out infinite" }} />
      <div className="font-mono text-xs text-outline uppercase tracking-widest mt-1">Agent 01</div>
      <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-on-surface mt-0.5">PO-Bot</div>
    </div>
  );
}

function RobotStation2() {
  return (
    <div className="absolute flex flex-col items-center" style={{ left: "32%", bottom: "150px" }}>
      <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[240px] drop-shadow-xl">
        <rect x="20" y="130" width="40" height="25" rx="0" fill="#161A21" stroke="#73757D" strokeWidth="2"/>
        <rect x="12" y="68" width="56" height="62" rx="0" fill="#10131A" stroke="#73757D" strokeWidth="2"/>
        <polygon points="40,76 50,82 50,92 40,98 30,92 30,82" fill="#0B0E14" stroke="#BF81FF" strokeWidth="2"/>
        <circle cx="40" cy="88" r="6" fill="#BF81FF" opacity="0.8">
          <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
        </circle>
        <rect x="28" y="56" width="24" height="14" rx="0" fill="#161A21" stroke="#73757D" strokeWidth="1.8"/>
        <line x1="34" y1="60" x2="34" y2="66" stroke="#BF81FF" strokeWidth="1.5" opacity="0.8"/>
        <line x1="40" y1="60" x2="40" y2="66" stroke="#BF81FF" strokeWidth="1.5" opacity="0.8"/>
        <line x1="46" y1="60" x2="46" y2="66" stroke="#BF81FF" strokeWidth="1.5" opacity="0.8"/>
        <g style={{ transformOrigin: "center top", animation: "armScan 4s ease-in-out infinite 0.5s" }}>
          <rect x="65" y="80" width="24" height="12" rx="0" fill="#45484F" stroke="#73757D" strokeWidth="1.5"/>
          <rect x="85" y="77" width="10" height="17" rx="0" fill="#161A21" stroke="#BF81FF" strokeWidth="2"/>
        </g>
        <rect x="22" y="110" width="12" height="4" rx="0" fill="#BF81FF" opacity="0.8">
          <animate attributeName="width" values="12;20;12" dur="2s" repeatCount="indefinite"/>
        </rect>
      </svg>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70px] h-[35px] rounded-full bg-secondary blur-[18px]" style={{ animation: "glowPulse 3s ease-in-out infinite" }} />
      <div className="font-mono text-xs text-outline uppercase tracking-widest mt-1">Agent 02</div>
      <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-on-surface mt-0.5">Architect-Bot</div>
    </div>
  );
}

function RobotStation3() {
  return (
    <div className="absolute flex flex-col items-center" style={{ left: "48%", bottom: "150px" }}>
      <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[240px] drop-shadow-xl">
        <rect x="20" y="130" width="40" height="25" rx="0" fill="#161A21" stroke="#73757D" strokeWidth="2"/>
        <rect x="10" y="65" width="60" height="65" rx="0" fill="#10131A" stroke="#73757D" strokeWidth="2"/>
        <rect x="16" y="72" width="48" height="18" rx="0" fill="#0B0E14" stroke="#8FF5FF" strokeWidth="2"/>
        <rect x="22" y="77" width="13" height="7" rx="0" fill="#8FF5FF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="0.8s" repeatCount="indefinite"/>
        </rect>
        <rect x="46" y="77" width="13" height="7" rx="0" fill="#8FF5FF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="0.8s" repeatCount="indefinite" begin="0.2s"/>
        </rect>
        {/* Code lines - bigger and more visible */}
        <rect x="18" y="98" width="30" height="3" rx="0" fill="#8FF5FF" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="18" y="106" width="22" height="3" rx="0" fill="#8FF5FF" opacity="0.45"/>
        <rect x="18" y="114" width="26" height="3" rx="0" fill="#8FF5FF" opacity="0.3"/>
        <g style={{ transformOrigin: "center top", animation: "armWeld 2.5s ease-in-out infinite 1s" }}>
          <rect x="67" y="75" width="30" height="13" rx="0" fill="#45484F" stroke="#73757D" strokeWidth="1.5"/>
          <polygon points="95,75 107,81 95,87" fill="#8FF5FF" opacity="0.9"/>
          <circle cx="107" cy="81" r="3" fill="#BF81FF">
            <animate attributeName="r" values="2;5;2" dur="0.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.2;1" dur="0.4s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
      {/* Sparks */}
      <div className="absolute" style={{ bottom: "150px", left: "calc(48% + 88px)" }}>
        {[
          { sx: "15px", sy: "-20px", delay: "0s" },
          { sx: "-10px", sy: "-25px", delay: "0.2s" },
          { sx: "20px", sy: "-10px", delay: "0.4s" },
          { sx: "-5px", sy: "-30px", delay: "0.1s" },
        ].map((spark, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[4px] bg-primary rounded-full"
            style={{
              "--sx": spark.sx,
              "--sy": spark.sy,
              animation: `sparkFly 1.5s ease-out infinite ${spark.delay}`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70px] h-[35px] rounded-full bg-primary blur-[18px]" style={{ animation: "glowPulse 3s ease-in-out infinite" }} />
      <div className="font-mono text-xs text-outline uppercase tracking-widest mt-1">Agent 03</div>
      <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-on-surface mt-0.5">Dev-Bot</div>
    </div>
  );
}

function RobotStation4() {
  return (
    <div className="absolute flex flex-col items-center" style={{ left: "64%", bottom: "150px" }}>
      <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[240px] drop-shadow-xl">
        <rect x="20" y="130" width="40" height="25" rx="0" fill="#161A21" stroke="#73757D" strokeWidth="2"/>
        <rect x="14" y="70" width="52" height="60" rx="0" fill="#10131A" stroke="#73757D" strokeWidth="2"/>
        <circle cx="40" cy="62" r="18" fill="none" stroke="#00DEEC" strokeWidth="2.5"/>
        <circle cx="40" cy="62" r="11" fill="#0B0E14" stroke="#00DEEC" strokeWidth="1.8"/>
        <line x1="54" y1="75" x2="63" y2="84" stroke="#00DEEC" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="40" cy="62" r="5" fill="#00DEEC" opacity="0.6">
          <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
        {/* Checklist - thicker, more visible */}
        <line x1="22" y1="82" x2="26" y2="87" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="87" x2="32" y2="79" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        <rect x="36" y="81" width="22" height="3" rx="0" fill="#45484F"/>

        <line x1="22" y1="96" x2="26" y2="101" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="101" x2="32" y2="93" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        <rect x="36" y="95" width="18" height="3" rx="0" fill="#45484F"/>

        <line x1="22" y1="110" x2="26" y2="115" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="115" x2="32" y2="107" stroke="#8FF5FF" strokeWidth="2" strokeLinecap="round"/>
        <rect x="36" y="109" width="20" height="3" rx="0" fill="#45484F"/>

        <g style={{ transformOrigin: "center top", animation: "armInspect 3.5s ease-in-out infinite 0.8s" }}>
          <rect x="63" y="82" width="24" height="10" rx="0" fill="#45484F" stroke="#73757D" strokeWidth="1.5"/>
          <rect x="83" y="77" width="5" height="19" rx="0" fill="#00DEEC" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite"/>
          </rect>
        </g>
      </svg>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70px] h-[35px] rounded-full bg-primary-dim blur-[18px]" style={{ animation: "glowPulse 3s ease-in-out infinite" }} />
      <div className="font-mono text-xs text-outline uppercase tracking-widest mt-1">Agent 04</div>
      <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-on-surface mt-0.5">QA-Bot</div>
    </div>
  );
}

function RobotStation5() {
  return (
    <div className="absolute flex flex-col items-center" style={{ left: "80%", bottom: "150px" }}>
      <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[240px] drop-shadow-xl">
        <rect x="20" y="130" width="40" height="25" rx="0" fill="#161A21" stroke="#73757D" strokeWidth="2"/>
        <rect x="16" y="68" width="48" height="62" rx="0" fill="#10131A" stroke="#73757D" strokeWidth="2"/>
        <path d="M40 44 L52 64 L28 64 Z" fill="#161A21" stroke="#8FF5FF" strokeWidth="2"/>
        <circle cx="40" cy="57" r="4" fill="#8FF5FF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" repeatCount="indefinite"/>
        </circle>
        {/* Deploy progress bars - taller and more visible */}
        <rect x="22" y="76" width="36" height="5" rx="0" fill="#0B0E14"/>
        <rect x="22" y="76" width="0" height="5" rx="0" fill="#8FF5FF">
          <animate attributeName="width" values="0;36;0" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="22" y="87" width="36" height="5" rx="0" fill="#0B0E14"/>
        <rect x="22" y="87" width="0" height="5" rx="0" fill="#00DEEC">
          <animate attributeName="width" values="0;36;0" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
        </rect>
        <rect x="22" y="98" width="36" height="5" rx="0" fill="#0B0E14"/>
        <rect x="22" y="98" width="0" height="5" rx="0" fill="#BF81FF">
          <animate attributeName="width" values="0;36;0" dur="2.8s" repeatCount="indefinite" begin="1s"/>
        </rect>
        {/* Git branch - thicker strokes */}
        <circle cx="30" cy="116" r="4" fill="none" stroke="#8FF5FF" strokeWidth="1.8"/>
        <circle cx="43" cy="109" r="4" fill="none" stroke="#8FF5FF" strokeWidth="1.8"/>
        <circle cx="43" cy="123" r="4" fill="none" stroke="#8FF5FF" strokeWidth="1.8"/>
        <line x1="34" y1="116" x2="39" y2="109" stroke="#8FF5FF" strokeWidth="1.5"/>
        <line x1="34" y1="116" x2="39" y2="123" stroke="#8FF5FF" strokeWidth="1.5"/>
        <g style={{ transformOrigin: "center top", animation: "armPack 3s ease-in-out infinite 1.5s" }}>
          <rect x="61" y="80" width="26" height="12" rx="0" fill="#45484F" stroke="#73757D" strokeWidth="1.5"/>
          <rect x="83" y="77" width="13" height="18" rx="0" fill="#161A21" stroke="#8FF5FF" strokeWidth="2"/>
          <text x="86" y="89" fontFamily="monospace" fontSize="8" fill="#8FF5FF" fontWeight="bold">&#x2191;</text>
        </g>
      </svg>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70px] h-[35px] rounded-full bg-primary blur-[18px]" style={{ animation: "glowPulse 3s ease-in-out infinite" }} />
      <div className="font-mono text-xs text-outline uppercase tracking-widest mt-1">Agent 05</div>
      <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-on-surface mt-0.5">DevOps-Bot</div>
    </div>
  );
}
