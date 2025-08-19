## Simon Game

A simple Simon memory game built with HTML, CSS, and JavaScript. Watch the sequence and repeat it by clicking the colored tiles. Each round adds one more step to the sequence.

### Features
- **Start with key or click**: Begin the game by pressing any key or by clicking any tile (mobile friendly).
- **Four colored tiles**: `red`, `blue`, `green`, `yellow` laid out in a 2x2 grid.
- **Animated feedback**: Active tiles briefly highlight; wrong input flashes only the clicked tile (no full-screen flash).
- **Sounds**: Each color has a distinct tone; a different sound plays on wrong input.
- **Progressive difficulty**: The sequence grows by one step each level.

### Quick Start
1. Download or clone this project.
2. Open `index.html` directly in your browser.
   - Optional: use a local server (e.g., VS Code Live Server) for the best experience.

### How to Play
1. Press any key or click a tile to start.
2. Watch the sequence as tiles light up and play sounds.
3. Repeat the sequence by clicking the tiles in the same order.
4. If you make a mistake, the clicked tile briefly flashes, a "wrong" sound plays, and the game resets. Press any key or click to start again.

### Project Structure
```
symion_game/
  ├─ index.html    # Markup and game layout
  ├─ style.css     # Visual styles and animations
  └─ app.js        # Game logic and interactions
```

### Customization
- **Tile colors**: Edit the color classes in `style.css` (`.red`, `.blue`, `.green`, `.yellow`).
- **Press animation**: Tweak `.pressed` in `style.css` (e.g., scale, shadow, opacity).
- **Wrong input effect**: Adjust `.wrong` in `style.css` to change how the clicked tile flashes on mistakes.
- **Timings**:
  - In `app.js`, `nextSequence()` uses short delays when showing the next tile (600ms before show, 200ms press flash). Adjust these values for pacing.
  - In `style.css`, the `flash` keyframes control the brief flash effect; change the duration if desired.
- **Sounds**: In `app.js`, `playSound(name)` maps each color to a tone. Replace the URLs with your own audio files if you prefer other sounds.

### Troubleshooting
- **Nothing happens on click**: The first click starts the game. After the startup sequence plays, enter the sequence by clicking tiles in order.
- **No sound**: Some browsers block audio until after a user interaction. Click a tile once, then sounds should work.
- **Mobile issues**: Start by tapping a tile to enable audio; ensure your device is not in silent mode.
- **Game restarts immediately**: That means the clicked order didn’t match the sequence. Watch the sequence closely and try again.

### Notes
- The game starts on the first key press or tile click and updates the title to show the current level.
- On a wrong input, only the clicked tile flashes; the background does not flash.

### License
Feel free to use and modify this project for learning or your own purposes.


