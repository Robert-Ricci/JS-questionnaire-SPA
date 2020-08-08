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
    <h3>  Name: ${this.name}</h3>
    <li>  Email: ${this.email} </li>
    </ul>
    
    `
    }
}
