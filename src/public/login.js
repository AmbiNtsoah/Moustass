/* Juste pour switcher entre le loginform et signup form */
const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginTab.addEventListener('click', () => {
      loginTab.classList.add('border-blue-600', 'text-blue-600');
      signupTab.classList.remove('border-blue-600', 'text-blue-600');
      signupTab.classList.add('text-gray-600');
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    });

    signupTab.addEventListener('click', () => {
      signupTab.classList.add('border-blue-600', 'text-blue-600');
      loginTab.classList.remove('border-blue-600', 'text-blue-600');
      loginTab.classList.add('text-gray-600');
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    });

/* Pour la fonctionnalité  */
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll("input");
  const username = inputs[0].value;
  const password = inputs[1].value;
  const confirmPassword = inputs[2].value;

  if (password !== confirmPassword) return alert("Passwords do not match");

  const res = await fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email: username + "@ex.com", password })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Signup successful!");
    document.getElementById("loginTab").click();
  } else {
    alert(data.message);
  }
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputs = e.target.querySelectorAll("input");
  const email = inputs[0].value;
  const password = inputs[1].value;

  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("username", data.username);
    window.location.href = "profile.html";
  } else {
    alert(data.message);
  }
});
