async function login() {
    try {

      const user = document.querySelector('input[name="email"]').value;
      const password = document.querySelector('input[name="password"]').value;
      const resultado = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user,
          password
        })
      });
      const data = await resultado.json();
      location.href = '/dashboard.html';
    } catch (error) {
      alert("Credentials are incorrect");
    }
  }