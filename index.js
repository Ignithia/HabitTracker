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
});
