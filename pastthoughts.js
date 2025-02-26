document.addEventListener("DOMContentLoaded", function () {
  const thoughtsContainer = document.getElementById("thoughts-container");
  const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
  if (thoughtsContainer.children.length === 0) {
    // Add some fake thoughts
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

    fakeThoughts.forEach((thought) => {
      const thoughtElement = document.createElement("p");
      thoughtElement.classList.add("thought-item");
      thoughtElement.id = "fakethought-item";
      thoughtElement.textContent = thought;
      thoughtsContainer.appendChild(thoughtElement);
    });
  }

  savedThoughts.forEach(({ thought, timestamp }) => {
    if (thoughtsContainer.lastChild.id === "fakethought-item") {
      thoughtsContainer.innerHTML = "";
    }
    const thoughtElement = document.createElement("p");
    thoughtElement.classList.add("thought-item");
    thoughtElement.textContent = `${thought} : ${timestamp}`;
    thoughtsContainer.appendChild(thoughtElement);
  });
});
