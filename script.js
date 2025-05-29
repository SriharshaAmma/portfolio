function submitForm(event) {
  event.preventDefault();
  document.getElementById("status").textContent = "Message sent successfully!";
  setTimeout(() => {
    document.getElementById("status").textContent = "";
    event.target.reset();
  }, 3000);
}

