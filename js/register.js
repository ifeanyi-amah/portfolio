// Registration Form
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const registerForm = document.getElementById("registerForm");
  const username = regUsername.value.trim();
  const email = regEmail.value.trim();
  const password = regPassword.value;
  const confirm = regConfirm.value;

  // Username
  if (username === "") {
    regUserError.textContent = "Username is required";
    valid = false;
  } else {
    regUserError.textContent = "";
  }

  // Email
  if (!email.includes("@")) {
    regEmailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    regEmailError.textContent = "";
  }

  // Password
  if (password.length < 6) {
    regPassError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    regPassError.textContent = "";
  }

  // Confirm Password
  if (password !== confirm) {
    regConfirmError.textContent = "Passwords do not match";
    valid = false;
  } else {
    regConfirmError.textContent = "";
  }

  if (valid) {
    // Get existing users or create empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert("Email already registered");
      return;
    }

    // Save new user
    const newUser = {
      username,
      email,
      password // ⚠️ plain text (OK for demo, NOT for real apps)
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    registerForm.reset();
    alert("Registration successful!");
  }
});

