    // Fetch Dashboard data with async/await and redirect to login if not logged in
    async function getDashboardData() {
        try {
  
          const response = await fetch('/api/dashboard', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          if(data.status==='ok'){
          document.getElementById('dashboard').innerHTML = `
            Bienvenido ${data.user.email}!!
          `}
          else   {
            window.location.href = '/login';
          }
        } catch (error) {
          console.error(error);
        }
      };
  
    /*   async function logout() {
        try {
          const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          if (data.status) {
            window.location.href = '/logout';
          }
        } catch (error) {
          console.error(error);
        }
      }; */
      getDashboardData();