
    async function getDashboardData() {
        try {
            const response = await fetch('/api/dashboard', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json', 
            },
          });
          const data = await response.json();
          console.log(data)
          if(data.status==='ok'){
          document.getElementById('dashboard').innerHTML = `
            Bienvenido ${data.user.username}!!
          `}
          else   {
            window.location.href = '/login';
          }
        } catch (error) {
          console.error(error);
        }
      };
        getDashboardData();
