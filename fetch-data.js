async function fetchUserData() {

    const apiUrl= 'https://jsonplaceholder.typicode.com/users';
    document.getElementById("api-data");
}
        try {
        const response = await fetch(apiURL);

        const user = await response.json(); 
        }
}
  dataContainer.innerHTML = 'Loading user data...';


    