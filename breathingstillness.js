document.getElementById("startTimer").addEventListener("click", function () {
  // Get the start button and update its state
  let startButton = document.getElementById("startTimer");
  startButton.classList.remove("done");
  startButton.classList.add("not-done");
  startButton.classList.add("disabled");

  let timerElement = document.getElementById("timer");
  let seconds = 60;
  clearInterval(window.timerInterval);

  // Start the timer
  window.timerInterval = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(window.timerInterval);
      timerElement.innerHTML = "<b>00:00</b>";
      startButton.classList.remove("not-done");
      startButton.classList.add("done");
      startButton.classList.remove("disabled");

      // Save the habit completion status for today
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem(`habit-breathing-stillness-${today}`, "true");

      // Show feedback notification
      let toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = "Breathing exercise completed!";
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.classList.add("show");
      }, 10);
      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
      }, 2000);

      // Reset timer display after completion
      setTimeout(() => {
        timerElement.innerHTML = "<b>01:00</b>";
      }, 1000);
      return;
    }

    // Count down the timer and update the display
    let displaySeconds =
      seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60;
    let displayMinutes =
      Math.floor(seconds / 60) < 10
        ? "0" + Math.floor(seconds / 60)
        : Math.floor(seconds / 60);
    timerElement.innerHTML = `<b>${displayMinutes}:${displaySeconds}</b>`;
  }, 1000);
});
