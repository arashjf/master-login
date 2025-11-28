const form = document.getElementById("login-form");
const toastContainer = document.getElementById("toastContainer");

form.addEventListener("submit", function (e) {
  // e.preventDefault();

  const fname = document.getElementById("fname");
  const pass = document.getElementById("pass");

  if (fname.value === "Arash" && pass.value === "1234567") {
    showtoast("✅ ورود با موفقیت انجام شد", "success");
  } else {
    showtoast("❌ نام کاربری یا رمز اشتباه است", "error");
  }
});

function showtoast(message, type = "succes") {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;
  document.getElementById("toast-container").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);

}

document.getElementById("icon-pass").addEventListener("click", function () {
  const passvalue = document.getElementById("pass");

  const type =
    passvalue.getAttribute("type") === "password" ? "text" : "password";

  passvalue.setAttribute("type", type);

  this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
});
