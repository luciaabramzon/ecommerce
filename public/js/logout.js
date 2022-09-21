/* 
 async function logout() {
  try{ 
const response = await  fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.status) {
      window.location.href = '/logout';
    } 
  }
   catch (error) {
    console.error(error);
  }
}
 */

async function getData(){
  try {
    const response = await fetch('/api/dashboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data)
    document.getElementById('name').innerHTML=`${data.user.email}!`
  }
    catch(err){
        console.log(err)
    }
}
getData()

async function logout() {
  try{ 
const response = await  fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.status) {
      window.location.href = '/login';
    } 
  }
   catch (error) {
    console.error(error);
  }
}

setTimeout(logout,2000)