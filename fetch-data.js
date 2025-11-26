async function fetchUserdata() {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const dataVontainer = document.getElementById('api-data');

        try {
        const response = await fetch(apiURL);

        const user = await response.json(); 
        }
}
  dataContainer.innerHTML = 'Loading user data...';


    