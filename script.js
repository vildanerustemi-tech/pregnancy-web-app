function showSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function calculateDueDate() {
  const input = document.getElementById("lastPeriod").value;

  if (!input) {
    document.getElementById("result").innerText =
      "Please select a valid date.";
    return;
  }

  const date = new Date(input);
  date.setDate(date.getDate() + 280);

  document.getElementById("result").innerText =
    "Estimated due date: " + date.toDateString();
}

function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    document.getElementById("formMsg").innerText =
      "Please fill in all fields.";
    return;
  }

  document.getElementById("formMsg").innerText =
    "Thank you! Your message has been sent.";
}
