// Select the form
document.querySelector(".contact_info").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from refreshing

    console.log("Form submitted."); // Debugging

    // Collect form values
    let fullname = event.target.elements["fullname"].value.trim();
    let phone = event.target.elements["phone"].value.trim();
    let email = event.target.elements["email"].value.trim();
    let message = event.target.elements["message"].value.trim();

    // Log field values for debugging
    console.log("Fullname:", fullname);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);

    // === VALIDATION SECTION ===

    // 1. Check if all required fields are filled
    if (!fullname || !phone || !email || !message) {
        
        alert("Fill in all required information");
        return;
    }

    // 2. Validate phone number (digits only + length 7–15)
    let phonePattern = /^\d{7,15}$/;
    if (!phonePattern.test(phone)) {
        
        alert("Please enter a valid phone number (7–15 digits only).");
        return;
    }

    // 3. Validate email structure
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
        
        alert("Please enter a valid email address (must contain @ and .).");
        return;
    }

});