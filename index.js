document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];

  const habitsStatus = {
    "breathing-stillness":
      localStorage.getItem("breathing-stillness") === today,
    "one-thought-one-line":
      localStorage.getItem("one-thought-one-line") === today,
  };

  document.getElementById("breathing-status").textContent = habitsStatus[
    "breathing-stillness"
  ]
    ? "Done"
    : "Not done";
  document.getElementById("breathing-status").className = habitsStatus[
    "breathing-stillness"
  ]
    ? "status done"
    : "status not-done";

  document.getElementById("thought-status").textContent = habitsStatus[
    "one-thought-one-line"
  ]
    ? "Done"
    : "Not done";
  document.getElementById("thought-status").className = habitsStatus[
    "one-thought-one-line"
  ]
    ? "status done"
    : "status not-done";

  const weeklyData = [
    { day: "Mon", month: "Feb", done: true },
    { day: "Tue", month: "Feb", done: false },
    { day: "Wed", month: "Feb", done: true },
    { day: "Thu", month: "Feb", done: true },
    { day: "Fri", month: "Feb", done: false },
    { day: "Sat", month: "Feb", done: true },
    { day: "Sun", month: "Feb", done: true },
  ];

  function generateWeeklyOverview(containerId) {
    const container = document.getElementById(containerId);
    weeklyData.forEach(({ day, month, done }) => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.classList.add(done ? "done" : "not-done");
      circle.textContent = `${day} ${month}`;
      container.appendChild(circle);
    });
  }

  generateWeeklyOverview("breathing-weekly-overview");
  generateWeeklyOverview("thought-weekly-overview");
});
