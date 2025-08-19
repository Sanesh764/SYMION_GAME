const buttonColors = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let userClickedPattern = [];
    let started = false;
    let level = 0;

    // Start game on keydown
    document.addEventListener("keydown", () => {
      if (!started) {
        document.getElementById("level-title").textContent = "Level " + level;
        nextSequence();
        started = true;
      }
    });

    // Handle button clicks
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        if (!started) {
          document.getElementById("level-title").textContent = "Level " + level;
          nextSequence();
          started = true;
          return;
        }
        const userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
      });
    });

    function nextSequence() {
      userClickedPattern = [];
      level++;
      document.getElementById("level-title").textContent = "Level " + level;
      
      const randomNumber = Math.floor(Math.random() * 4);
      const randomChosenColor = buttonColors[randomNumber];
      gamePattern.push(randomChosenColor);
      
      // Delay before showing the next color
      setTimeout(() => {
        const btn = document.getElementById(randomChosenColor);
        btn.classList.add("pressed");
        setTimeout(() => btn.classList.remove("pressed"), 200);
        playSound(randomChosenColor);
      }, 600);
    }

    function playSound(name) {
      let soundURL;
      if (name === "wrong") {
        soundURL = "https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav";
      } else {
        const soundIndex = buttonColors.indexOf(name) + 1;
        soundURL = `https://s3.amazonaws.com/freecodecamp/simonSound${soundIndex}.mp3`;
      }
      
      const audio = new Audio(soundURL);
      audio.play().catch(e => {
        // Fallback if audio fails to load
        console.log("Audio playback failed:", e);
      });
    }

    function animatePress(currentColor) {
      const btn = document.getElementById(currentColor);
      btn.classList.add("pressed");
      setTimeout(() => btn.classList.remove("pressed"), 100);
    }

    function checkAnswer(currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
          setTimeout(nextSequence, 1000);
        }
      } else {
        playSound("wrong");
        const wrongColor = userClickedPattern[currentLevel];
        const wrongButton = document.getElementById(wrongColor);
        if (wrongButton) {
          wrongButton.classList.add("wrong");
          setTimeout(() => wrongButton.classList.remove("wrong"), 200);
        }
        document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
        startOver();
      }
    }

    function startOver() {
      level = 0;
      gamePattern = [];
      started = false;
    }

