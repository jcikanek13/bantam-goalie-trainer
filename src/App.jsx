import React, { useMemo, useState, useEffect, useRef } from "react";

const PROGRAM = {
  1: {
    title: "Day 1 – Strength & Core + Hand–Eye",
    items: [
      { name: "Warm-Up", detail: "Dynamic stretches, banded walks, hip openers (10 min)", cat: "Warm-Up", img: "/img/warm-up_dynamic-stretch.png" },
      { name: "Goblet Squats", detail: "4×10", cat: "Strength", img: "/img/strength_goblet-squats.png" },
      { name: "Bulgarian Split Squats", detail: "3×8 each leg", cat: "Strength", img: "/img/strength_bulgarian-split-squats.png" },
      { name: "Glute Bridges", detail: "4×12", cat: "Strength", img: "/img/strength_glute-bridges.png" },
      { name: "Medicine Ball Rotational Throws", detail: "3×12 explosive", cat: "Power", img: "/img/power_rotational-throws.png" },
      { name: "Plank with Shoulder Taps", detail: "3×30 sec", cat: "Core", img: "/img/core_plank-shoulder-taps.png" },
      { name: "Wall Ball Catch", detail: "3×45 sec (glove → blocker)", cat: "Hand–Eye", img: "/img/handeye_wall-ball-catch.png" },
      { name: "Cool-Down", detail: "Pigeon, hamstrings, butterfly (6–8 min)", cat: "Cool-Down", img: "/img/cooldown_hips-hamstrings.png" },
    ],
  },
  2: {
    title: "Day 2 – Endurance & Conditioning + Hand–Eye",
    items: [
      { name: "Warm-Up", detail: "Jump rope 3 min", cat: "Warm-Up", img: "/img/warm-up_jump-rope.png" },
      { name: "Interval Sprints", detail: "8×30 sec hard, 60 sec rest", cat: "Endurance", img: "/img/endurance_interval-sprints.png" },
      { name: "Agility Ladder", detail: "3 rounds (in-out, icky shuffle, crossover)", cat: "Agility", img: "/img/agility_ladder.png" },
      { name: "Shuttle Runs (5–10–5)", detail: "5 reps", cat: "Agility", img: "/img/agility_shuttle-5-10-5.png" },
      { name: "Rowing Machine", detail: "3×3 min steady", cat: "Endurance", img: "/img/endurance_rower.png" },
      { name: "Dead Bugs", detail: "3×12 each side", cat: "Core", img: "/img/core_dead-bugs.png" },
      { name: "Partner Reaction Toss", detail: "3×12 random (stance)", cat: "Hand–Eye", img: "/img/handeye_partner-reaction-toss.png" },
      { name: "Cool-Down", detail: "Quads, calves, IT bands (6–8 min)", cat: "Cool-Down", img: "/img/cooldown_legs.png" },
    ],
  },
  3: {
    title: "Day 3 – Flexibility & Mobility + Hand–Eye",
    items: [
      { name: "Warm-Up", detail: "Light cardio 5 min", cat: "Warm-Up", img: "/img/warm-up_light-cardio.png" },
      { name: "Hip Flexor (Couch)", detail: "2×30 sec each side", cat: "Mobility", img: "/img/mobility_couch-stretch.png" },
      { name: "Deep Squat Hold + Hip Pry", detail: "2×45 sec", cat: "Mobility", img: "/img/mobility_squat-pry.png" },
      { name: "90/90 Hip Rotations", detail: "3×8 each side", cat: "Mobility", img: "/img/mobility_90-90.png" },
      { name: "Groin Straddle Stretch", detail: "2×30 sec", cat: "Mobility", img: "/img/mobility_straddle.png" },
      { name: "Yoga Flow", detail: "Cat–cow, child’s pose, down dog (5–6 min)", cat: "Mobility", img: "/img/mobility_yoga-flow.png" },
      { name: "Side Plank", detail: "3×20 sec each side", cat: "Core", img: "/img/core_side-plank.png" },
      { name: "Juggling", detail: "3×60 sec (2→3 balls)", cat: "Hand–Eye", img: "/img/handeye_juggling.png" },
      { name: "Cool-Down", detail: "Breathing + gentle hip openers", cat: "Cool-Down", img: "/img/cooldown_hips.png" },
    ],
  },
  4: {
    title: "Day 4 – Speed & Reaction + Hand–Eye",
    items: [
      { name: "Warm-Up", detail: "Dynamic stretches, banded mobility (10 min)", cat: "Warm-Up", img: "/img/warm-up_dynamic-stretch.png" },
      { name: "Box Jumps", detail: "4×6 (stick landing in stance)", cat: "Power", img: "/img/power_box-jumps.png" },
      { name: "Lateral Bounds", detail: "3×8 each side", cat: "Power", img: "/img/power_lateral-bounds.png" },
      { name: "Cone Shuffle Bursts", detail: "5×20 sec (low stance)", cat: "Agility", img: "/img/agility_cone-shuffle.png" },
      { name: "Med Ball Slam & Side Catch", detail: "3×12", cat: "Power", img: "/img/power_slam-side-catch.png" },
      { name: "Reaction Ball Chase", detail: "3×30 sec (glove/blocker)", cat: "Hand–Eye", img: "/img/handeye_reaction-ball.png" },
      { name: "Cool-Down", detail: "Hips + shoulders (6–8 min)", cat: "Cool-Down", img: "/img/cooldown_upper-lower.png" },
    ],
  },
  5: {
    title: "Day 5 – Integrated Game Simulation + Hand–Eye",
    items: [
      { name: "Warm-Up", detail: "Dynamic full-body (10 min)", cat: "Warm-Up", img: "/img/warm-up_dynamic-stretch.png" },
      { name: "Lateral Shuffle (stance)", detail: "30 sec", cat: "Conditioning", img: "/img/conditioning_lateral-shuffle.png" },
      { name: "Burpees", detail: "10 (scramble recovery)", cat: "Conditioning", img: "/img/conditioning_burpees.png" },
      { name: "Med Ball Rotational Throws", detail: "12 reps", cat: "Power", img: "/img/power_rotational-throws.png" },
      { name: "Plank to Push-Up", detail: "15 sec", cat: "Core", img: "/img/core_plank-to-pushup.png" },
      { name: "Jump Rope", detail: "30 sec", cat: "Conditioning", img: "/img/conditioning_jump-rope.png" },
      { name: "Repeat Circuit", detail: "4 rounds, 90 sec rest", cat: "Conditioning", img: "/img/conditioning_circuit.png" },
      { name: "Number Call Drill", detail: "Partner flashes numbers/colors; call out quickly", cat: "Hand–Eye", img: "/img/handeye_number-call.png" },
      { name: "Finisher", detail: "Sprint 15s → Butterfly → Recover ×8", cat: "Conditioning", img: "/img/conditioning_finisher.png" },
      { name: "Cool-Down", detail: "Yoga flow: hips, hamstrings, back, shoulders", cat: "Cool-Down", img: "/img/cooldown_flow.png" },
    ],
  },
};

const CAT_BADGE = {
  "Warm-Up": "🔥",
  Strength: "🏋️",
  Power: "⚡",
  Core: "🧱",
  Mobility: "🧘",
  Agility: "🌀",
  Endurance: "⏱️",
  Conditioning: "⏱️",
  "Hand–Eye": "👀",
  "Cool-Down": "❄️",
};

function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
  }, [key, state]);
  return [state, setState];
}

function Timer({ seconds = 30 }) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setRemaining(r => Math.max(0, r - 1)), 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  useEffect(() => { if (remaining === 0 && running) setRunning(false); }, [remaining, running]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xl font-semibold tabular-nums">{remaining}s</span>
      <button onClick={() => setRunning(r => !r)} className="px-3 py-1 rounded-2xl shadow bg-white">
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setRemaining(seconds); setRunning(false); }} className="px-3 py-1 rounded-2xl shadow bg-white">
        Reset
      </button>
    </div>
  );
}

function ExerciseCard({ dKey, idx, item, checked, toggle }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-3">
      <div className="flex items-start gap-3">
        <button aria-label="toggle exercise" onClick={toggle} className={`mt-1 w-6 h-6 rounded-full border-2 ${checked ? 'bg-black' : ''}`}></button>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">{item.name}</h3>
            <span className="text-xl" title={item.cat}>{CAT_BADGE[item.cat] || "🏒"}</span>
          </div>
          <p className="text-sm text-gray-600">{item.detail}</p>
          <div className="mt-3">
            <img src={item.img} alt={item.name} className="w-full rounded-xl" />
          </div>
          {/(sec|s)\b/i.test(item.detail) && (
            <div className="mt-3">
              <Timer seconds={parseInt(item.detail.match(/(\d+)\s*(sec|s)/i)?.[1] || '30', 10)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [day, setDay] = useLocalStorage("goalie_day", 1);
  const [progress, setProgress] = useLocalStorage("goalie_progress", {});
  const d = PROGRAM[day];

  const completedCount = React.useMemo(() => {
    const p = progress[day] || {}; 
    return Object.values(p).filter(Boolean).length;
  }, [progress, day]);

  const toggle = (idx) => {
    setProgress((prev) => {
      const p = { ...(prev[day] || {}) };
      p[idx] = !p[idx];
      return { ...prev, [day]: p };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Bantam Goalie Trainer</h1>
        <p className="text-sm text-gray-600">5-Day Off-Ice Plan with Hand–Eye</p>
      </header>

      <div className="grid grid-cols-5 gap-2 mb-4">
        {[1,2,3,4,5].map(n => (
          <button key={n} onClick={() => setDay(n)} className={`py-2 rounded-2xl shadow text-sm ${day===n? 'bg-black text-white':'bg-white'}`}>Day {n}</button>
        ))}
      </div>

      <div className="p-4 bg-white rounded-2xl shadow mb-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{d.title}</h2>
          <span className="text-sm text-gray-500">{completedCount}/{d.items.length} done</span>
        </div>
      </div>

      {d.items.map((item, idx) => (
        <ExerciseCard
          key={idx}
          dKey={day}
          idx={idx}
          item={item}
          checked={(progress[day]||{})[idx]}
          toggle={() => toggle(idx)}
        />
      ))}

      <footer className="mt-6 mb-10 text-center text-xs text-gray-500">
        <p>Tip: Replace image paths in /public/img with your own GIFs/photos.</p>
      </footer>
    </div>
  );
}
