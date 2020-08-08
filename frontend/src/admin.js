class Admin {
    constructor(name, username, email) {
        this.name = name;
        this.username = username;
        this.email = email;
    }

renderAdmin() {
    let adminsDiv = document.getElementById("admins-container")

    adminsDiv.innerHTML += 
    `
    <ul>
    <h3>Username: ${this.username}</h3>
    <li> Name: ${this.name} - Email: ${this.email} </li>
    </ul>
    
    `
    }
}
