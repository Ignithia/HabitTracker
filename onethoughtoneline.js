//One-Thought-One-Line
document.getElementById("submit").addEventListener("click", function () {
  const inputBox = document.querySelector(".input-box");
  const thought = inputBox.value.trim();
  if (thought) {
    const now = new Date();
    const timestamp = now.toLocaleDateString();
    const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
    savedThoughts.push({ thought, timestamp });
    localStorage.setItem("thoughts", JSON.stringify(savedThoughts));
    inputBox.value = ""; // Clear the input box
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("one-thought-one-line", today);
  }
});
