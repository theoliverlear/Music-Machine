# Music Machine
## Empowering musicians by gamifying music education.

---

Music Machine is the program I wished I had when I started learning piano. It fuses music theory with gameplay so you can learn by doing: connect your MIDI keyboard, play, and watch notes, chords, and sheet music come alive in real time.

Built with React and hosted via Electron, Music Machine runs on your desktop and focuses on simplicity and contrast—like the black and white of piano keys—so the music stays front and center.

## ⭐️ What Music Machine is...
- A free, open‑source desktop app powered by Electron (easy to run locally).
- Plug‑and‑play with MIDI keyboards via WebMIDI; no special drivers required for most devices.
- Designed to teach fundamentals through play: keys, chords, and reading notation.
- Minimalist, high‑contrast UI so you can focus on sound and feel.

## 🧭 Modes and games
- 🎹 Free Play
  - Play anything and see exactly what you’re playing.
  - Live note name display, automatic pitch adjustments, and real‑time chord detection.
- 🎼 Sheet Music
  - See how keys on the piano translate to standard notation.
  - Choose key signatures and visualize your notes on staves as you play (VexFlow‑powered).
- 🎯 Chord Callout
  - A game that calls out chords and challenges you to play them quickly and accurately.
  - Metronome support, countdowns, and multiple challenge modes.
- 🗺️ Key Quest (in development)
  - An adventure through harmonies and melodies with increasing difficulty, combos, and power‑ups.

Note: Some gameplay elements (e.g., scoring, power‑ups/combos for Key Quest) are evolving and may not be fully implemented yet.

## ✅ Why you’ll love it
- Learn by playing: immediate visual feedback for notes, chords, and notation.
- No gatekeeping: open source and free to run.
- Built‑in guardrails for practice, like a metronome and countdowns.
- Works with common MIDI keyboards and controllers via WebMIDI.

## 🚀 Quick start (local desktop)
Prerequisites:
- Node.js 16+ and npm
- A MIDI keyboard or controller (optional but recommended)

Run it:
1. Clone the repository
   - `git clone https://github.com/…/Music-Machine.git`
   - `cd Music-Machine`
2. Install dependencies
   - `npm install`
3. Start the app (runs React + Electron together)
   - `npm start`
4. Connect your MIDI device when prompted and start playing.

Tips:
- If you have multiple MIDI devices, select one from the in‑app device picker.
- You can still explore UI without a keyboard; many screens render, but WebMIDI input unlocks the full experience.

## 🔒 Privacy and safety
- Local first: your music and settings stay on your machine.
- No API keys or financial data; just MIDI input and local state.
- You control tempo and practice flow with the metronome and timers.

## 🛠️ Technology you can trust
Music Machine is built on a modern, approachable stack:
- UI: React + TypeScript + SCSS
- Desktop host: Electron
- MIDI: WebMIDI (via `webmidi`)
- Audio & timing utilities: `tone`
- Notation rendering: VexFlow
- Routing: React Router
- Testing: Jest, ts‑jest, Testing Library

## 🧩 Features and code map
- Pages/routes (see `src/components/app/App.tsx`):
  - Home (`/`)
  - Free Play (`/free-play`)
  - Sheet Music (`/sheet-music`)
  - Chord Callout (`/chord-callout`)
  - Theory Engine (`/theory-engine`)
- MIDI input: `src/components/elements/element-group-midi/midi-piano/MidiPiano.tsx`
- Chords & notes: `src/models/chord`, `src/models/note`, and related hooks in `src/hooks/piano`
- Sheet music rendering: `src/components/elements/element-group-theory/.../LiveSheetNotes`
- Games: `src/components/pages/chord-callout` (with metronome and countdown components)
- Styles: SCSS modules in `src/components/**` and global styles in `src/styles`
- Tests: Jest tests under `src/test/**`

## 📚 Learn the most important concepts
- Keys and chords: See current notes and recognized chords in Free Play.
- Pitch and key signatures: Adjust pitch displays and select key signatures to understand tonal centers.
- Rhythm and timing: Practice with the built‑in metronome and countdown timers.

## ❓ Questions or ideas
- Open an issue in this repository with your question or feature idea.
- Want to collaborate or have feedback on music theory/gameplay? Issues and Discussions are welcome.