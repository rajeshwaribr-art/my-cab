document.addEventListener("DOMContentLoaded", () => {
  const y = new Date().getFullYear();
  ["year", "year2", "year3"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });
});

function handleLoginForm(e){
  e.preventDefault();
  const user = document.getElementById("userId").value.trim();
  if(!user){ 
    alert("Please enter email or mobile."); 
    return false; 
  }
  alert("Demo login successful for: " + user + "\n(This site is static — replace with real auth.)");
  return false;
}

function submitBooking(e){
  e.preventDefault();
  const name = document.getElementById("fullname").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  if(!name || !mobile){ 
    alert("Please complete name and mobile."); 
    return false; 
  }

  const bookingId = "K2K-" + Math.random().toString(36).slice(2,9).toUpperCase();
  const result = document.getElementById("bookingResult");
  result.innerHTML = `<strong>Booking confirmed!</strong><br/>
Booking ID: ${bookingId}<br/>
We emailed the confirmation to ${document.getElementById("email").value || "(no email provided)"}.`;

  return false;
}