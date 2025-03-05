document.getElementById("submit").addEventListener("click", function () {
  const inputBox = document.querySelector(".input-box");
  const thought = inputBox.value.trim();
  if (thought) {
    const now = new Date();
    const timestamp = now.toLocaleDateString();
    const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
    savedThoughts.push({ thought, timestamp });
    localStorage.setItem("thoughts", JSON.stringify(savedThoughts));
    inputBox.value = "";
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem(`habit-one-thought-one-line-${today}`, "true");

    document.getElementById("thought-status").textContent = "Done";
    document.getElementById("thought-status").className = "status done";

    generateWeeklyOverview("thought-weekly-overview", "one-thought-one-line");
  }
});
