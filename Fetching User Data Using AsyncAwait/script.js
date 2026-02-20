const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {

    const container = document.getElementById("usersContainer");

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        
        users.forEach(user => {

            
            const card = document.createElement("div");
            card.classList.add("user-card");

            
            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;

            
            container.appendChild(card);
        });

    } catch (error) {
        
        container.innerHTML = `<p class="error">Error loading user data. Please try again later.</p>`;
        console.error(error);
    }
}

fetchUsers();