document.addEventListener("DOMContentLoaded", function () {
  const thoughtsContainer = document.getElementById("thoughts-container");
  const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];

  thoughtsContainer.innerHTML = "";

  if (savedThoughts.length === 0) {
    // Show example thoughts if none are saved
    // This way, users can see how it looks even if they haven't saved any thoughts yet.
    const fakeThoughts = [
      "These are fake thoughts. Just to show you how it looks.",
      "I need to exercise more.",
      "I should read a book every month.",
      "I should spend more time with family.",
      "I need to improve my diet.",
      "I want to travel more.",
      "I should spend less time on social media.",
      "I want to learn a new instrument.",
      "I should spend more time in nature.",
      "I need to improve my sleep schedule.",
    ];

    // Show fake saved thoughts
    fakeThoughts.forEach((thought) => {
      const thoughtElement = document.createElement("div");
      thoughtElement.classList.add("thought-item");
      thoughtElement.innerHTML = `<h3>Thought</h3><p>${thought}</p>`;
      thoughtsContainer.appendChild(thoughtElement);
    });
  } else {
    // Show saved thoughts with timestamps
    savedThoughts.forEach(({ thought, timestamp }) => {
      const thoughtElement = document.createElement("div");
      thoughtElement.classList.add("thought-item");
      thoughtElement.innerHTML = `<h3>Saved Thought - <span class="date">${timestamp}</span></h3><p>${thought}</p>`;
      thoughtsContainer.appendChild(thoughtElement);
    });
  }
});
