document.getElementById("startTimer").addEventListener("click", function () {
  let startButton = document.getElementById("startTimer");
  startButton.classList.remove("done");
  startButton.classList.add("not-done");
  startButton.classList.add("disabled");

  let timerElement = document.getElementById("timer");
  let seconds = 60;
  clearInterval(window.timerInterval);
  window.timerInterval = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(window.timerInterval);
      timerElement.innerHTML = "<b>00:00</b>";
      startButton.classList.remove("not-done");
      startButton.classList.add("done");
      startButton.classList.remove("disabled");
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem(`habit-breathing-stillness-${today}`, "true");

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
      setTimeout(() => {
        timerElement.innerHTML = "<b>01:00</b>";
      }, 1000);
      return;
    }
    let displaySeconds =
      seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60;
    let displayMinutes =
      Math.floor(seconds / 60) < 10
        ? "0" + Math.floor(seconds / 60)
        : Math.floor(seconds / 60);
    timerElement.innerHTML = `<b>${displayMinutes}:${displaySeconds}</b>`;
  }, 1000);
});
