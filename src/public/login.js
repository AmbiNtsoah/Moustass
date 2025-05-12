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