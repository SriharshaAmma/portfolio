async function submitForm(event) {
  event.preventDefault();

  const statusEl = document.getElementById("status");
  const form = event.target;
  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  // Show sending status
  statusEl.textContent = "Sending message...";
  statusEl.style.color = "blue";

  try {
    // Example: simulate API call with timeout (replace with actual API fetch if available)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // If using a backend endpoint:
    /*
    const response = await fetch("https://your-backend-endpoint.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Failed to send message");
    */

    statusEl.textContent = "Message sent successfully! ✅";
    statusEl.style.color = "green";

    // Clear form after 3 seconds
    setTimeout(() => {
      statusEl.textContent = "";
      form.reset();
    }, 3000);

  } catch (error) {
    statusEl.textContent = "Failed to send message. Please try again.";
    statusEl.style.color = "red";
    console.error(error);
  }
}