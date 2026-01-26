// Registration Form
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

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
    alert("Registration successful (front-end only)");
  }
});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  if (!loginEmail.value.includes("@")) {
    loginEmailError.textContent = "Invalid email";
    valid = false;
  } else {
    loginEmailError.textContent = "";
  }

  if (loginPassword.value === "") {
    loginPassError.textContent = "Password required";
    valid = false;
  } else {
    loginPassError.textContent = "";
  }

  if (valid) {
    alert("Login successful (front-end only)");
  }
});
