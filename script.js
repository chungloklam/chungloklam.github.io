document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting immediately
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for reaching out, " + name + "! I will get back to you soon.");
      // In a real scenario, you would send this data to a server or an email service.
      document.getElementById("contact-form").reset();  // Clear the form
    } else {
      alert("Please fill in all fields.");
    }
  });
  