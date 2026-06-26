# FloodRift 🎮 ✨

FloodRift is a clean, high-energy puzzle game built using React Native and Expo. The objective is to unify a randomized grid of vibrant pastel colors using standard flood-fill mechanics starting from a dynamic anchor node. 

The game features infinite progression, scaling difficulty, an organic layout framework, and responsive data syncing.

---

## 🚀 Key Features

* **Dynamic Scaling Matrix:** Starts on a compact $5 \times 5$ board layout (Level 1) and algorithmically scales up to a complex $10 \times 10$ layout around Level 8, expanding color counts and shifting move limits as complexity ramps up.
* **Randomized Grid Origin:** No locked configurations. Every new stage seeds the starting source anchor at a completely randomized tile coordinate point $(r, c)$ inside the grid.
* **Lively End-Game Overlays:** Seamless boun   cy, spring-animated cards that pop up immediately upon a win or loss with goofy punchlines and minimal text.
* **Faint Pastel Canvas Shifting:** The entire app wrapper smoothly transition-fades its background color among 5 faint pastels on a per-level basis.
* **Clean Custom Layout Manager:** Features an edge-to-edge layout that respects mobile status bars and native device notches while maintaining a modern, floating, rounded tab navigation bar.
* **Profile Center:** A dedicated tracking screen to view maximum historical level metrics and active win-streak values.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Expo SDK (using `expo-router` file-based navigation architecture)
* **Core UI Layout:** React Native (Animated API, StyleSheet API, Context Provider State Routing)
* **Safe Area Handling:** `react-native-safe-area-context`
* **Icons & Haptics:** Custom Expo Icon Symbols & `HapticTab` interactions

---

## 📦 Local Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/color-flood.git](https://github.com/your-username/color-flood.git)```

   
<img width="1080" height="2340" alt="Screenshot_20260627_011710_color-flood" src="https://github.com/user-attachments/assets/e5555234-b1ba-49f7-bc46-3a0536386747" />
