// Set Launch Date (YYYY, MM-1, DD, HH, MM, SS)
// Example: Dec 31, 2025, 23:59:59
const launchDate = new Date("December 31, 2025 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>🎉 We are Live!</h2>";
    return;
  }

  // Time calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display values
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();
