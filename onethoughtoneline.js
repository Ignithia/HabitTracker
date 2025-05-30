document.getElementById("submit").addEventListener("click", function () {
  const inputBox = document.querySelector(".input-box");
  const thought = inputBox.value.trim();
  if (thought) {
    // Save the thought with timestamp and update localStorage
    const now = new Date();
    const timestamp = now.toLocaleDateString();
    const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
    savedThoughts.push({ thought, timestamp });
    localStorage.setItem("thoughts", JSON.stringify(savedThoughts));
    inputBox.value = "";
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem(`habit-one-thought-one-line-${today}`, "true");

    // Update daily label and weekly overview
    document.getElementById("thought-status").textContent = "Done";
    document.getElementById("thought-status").className = "status done";
    generateWeeklyOverview("thought-weekly-overview", "one-thought-one-line");

    // Show feedback notification
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Thought saved!";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("show");
    }, 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
});
