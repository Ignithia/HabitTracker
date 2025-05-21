document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const habitsStatus = {
    "breathing-stillness":
      localStorage.getItem(`habit-breathing-stillness-${todayStr}`) === "true",
    "one-thought-one-line":
      localStorage.getItem(`habit-one-thought-one-line-${todayStr}`) === "true",
  };

  // Update the status labels for both habits
  document.getElementById("breathing-status").textContent = habitsStatus[
    "breathing-stillness"
  ]
    ? "Done"
    : "Not done";
  document.getElementById("breathing-status").className = habitsStatus[
    "breathing-stillness"
  ]
    ? "status-label done"
    : "status-label not-done";

  document.getElementById("thought-status").textContent = habitsStatus[
    "one-thought-one-line"
  ]
    ? "Done"
    : "Not done";
  document.getElementById("thought-status").className = habitsStatus[
    "one-thought-one-line"
  ]
    ? "status-label done"
    : "status-label not-done";

  // Save habit status for a specific date
  function updateHabitStatus(habit, dateStr, status) {
    localStorage.setItem(`habit-${habit}-${dateStr}`, status);
  }

  // Get last 7 days' completion data for a habit
  function getWeeklyData(habit) {
    const weeklyData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      const done = localStorage.getItem(`habit-${habit}-${dateStr}`) === "true";
      weeklyData.push({ date, done });
    }
    return weeklyData;
  }

  // Render weekly overview circles for a habit
  function generateWeeklyOverview(containerId, habit) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    const weeklyData = getWeeklyData(habit);
    weeklyData.forEach(({ date, done }) => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.classList.add(done ? "done" : "not-done");
      circle.textContent = `${date.getDate().toString().padStart(2, "0")}/${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}`;
      container.appendChild(circle);
    });
  }

  // Make generateWeeklyOverview available globally
  window.generateWeeklyOverview = generateWeeklyOverview;

  // Render weekly overviews for both habits
  generateWeeklyOverview("breathing-weekly-overview", "breathing-stillness");
  generateWeeklyOverview("thought-weekly-overview", "one-thought-one-line");

  // Ensure today's status is saved in localStorage
  updateHabitStatus(
    "breathing-stillness",
    todayStr,
    habitsStatus["breathing-stillness"]
  );
  updateHabitStatus(
    "one-thought-one-line",
    todayStr,
    habitsStatus["one-thought-one-line"]
  );
});
