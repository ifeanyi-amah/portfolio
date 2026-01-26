// // Login Form
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   let valid = true;

//   const loginForm = document.getElementById("loginForm");

//   if (!loginEmail.value.includes("@")) {
//     loginEmailError.textContent = "Invalid email";
//     valid = false;
//   } else {
//     loginEmailError.textContent = "";
//   }

//   if (loginPassword.value === "") {
//     loginPassError.textContent = "Password required";
//     valid = false;
//   } else {
//     loginPassError.textContent = "";
//   }

//   if (valid) {
//     loginForm.reset();
//     alert("Login successful (front-end only)");
//   }
// });


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginEmailError = document.getElementById("loginEmailError");
  const loginPassError = document.getElementById("loginPassError");

  // Basic validation
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

  if (!valid) return;

  // Get stored users (array)
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  if (storedUsers.length === 0) {
    alert("No user found. Please sign up first.");
    return;
  }

  // Find user by email
  const user = storedUsers.find(
    (u) => u.email === loginEmail.value
  );

  if (!user) {
    alert("User not found ❌");
    return;
  }

  // Check password
  if (user.password === loginPassword.value) {
    alert("Login successful 🎉");
    document.getElementById("loginForm").reset();

    // Save login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", user.email);
  } else {
    alert("Invalid email or password ❌");
  }
});





